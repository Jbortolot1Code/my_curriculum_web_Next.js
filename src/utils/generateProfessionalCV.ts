import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, PDFFont, PDFName, PDFPage, PDFString, rgb } from "pdf-lib";
import { getProfessionalCV } from "@/data/professionalCV";
import { profile } from "@/data/profile";
import type { Language } from "@/data/translations";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 44;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const BOTTOM = 60;
const BODY_SIZE = 10.5;
const LINE_HEIGHT = 14;
const colors = {
  ink: rgb(0.10, 0.16, 0.23),
  muted: rgb(0.32, 0.39, 0.46),
  accent: rgb(0.03, 0.40, 0.48),
  rule: rgb(0.83, 0.89, 0.91),
  highlight: rgb(0.93, 0.97, 0.97),
};

type AssetLoader = (path: string) => Promise<ArrayBuffer | Uint8Array>;
type PendingLink = { page: PDFPage; id: string; rect: number[] };

// Cada linha é medida com a fonte incorporada, inclusive palavras sem espaços.
function wrapText(text: string, font: PDFFont, size: number, width: number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.replace(/[\u2010-\u2015]/g, "-").split("\n")) {
    let line = "";
    for (const word of paragraph.trim().split(/\s+/)) {
      const candidate = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, size) <= width) {
        line = candidate;
        continue;
      }
      if (line) lines.push(line);
      line = "";
      for (const character of word) {
        if (font.widthOfTextAtSize(line + character, size) > width) {
          lines.push(line);
          line = "";
        }
        line += character;
      }
    }
    lines.push(line);
  }
  return lines;
}

function addExternalLink(doc: PDFDocument, page: PDFPage, rect: number[], url: string) {
  page.node.addAnnot(doc.context.register(doc.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: rect,
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(url) },
  })));
}

class CVLayout {
  page!: PDFPage;
  y = PAGE_HEIGHT - MARGIN;
  pages: PDFPage[] = [];
  links: PendingLink[] = [];

  constructor(
    readonly doc: PDFDocument,
    readonly regular: PDFFont,
    readonly bold: PDFFont,
    readonly continuationTitle: string,
  ) {}

  newPage(first = false) {
    this.page = this.doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    this.pages.push(this.page);
    this.page.drawRectangle({ x: 0, y: PAGE_HEIGHT - 7, width: PAGE_WIDTH, height: 7, color: colors.accent });
    this.y = PAGE_HEIGHT - MARGIN;
    if (!first) {
      this.text(profile.name, { bold: true, size: 15 });
      this.text(this.continuationTitle, { size: 9, muted: true });
      this.y -= 12;
    }
  }

  ensure(height: number) {
    if (this.y - height < BOTTOM) this.newPage();
  }

  height(text: string, size = BODY_SIZE, bold = false, width = CONTENT_WIDTH) {
    return wrapText(text, bold ? this.bold : this.regular, size, width).length * LINE_HEIGHT;
  }

  text(value: string, options: { bold?: boolean; size?: number; muted?: boolean; x?: number; width?: number } = {}) {
    const size = options.size ?? BODY_SIZE;
    const font = options.bold ? this.bold : this.regular;
    const lines = wrapText(value, font, size, options.width ?? CONTENT_WIDTH);
    this.ensure(lines.length * LINE_HEIGHT);
    for (const line of lines) {
      this.page.drawText(line, {
        x: options.x ?? MARGIN,
        y: this.y - size,
        font, size,
        color: options.muted ? colors.muted : colors.ink,
      });
      this.y -= LINE_HEIGHT;
    }
  }

  section(title: string, firstBlockHeight: number) {
    // O título fica junto ao primeiro item, mesmo se a página mudar.
    this.ensure(34 + firstBlockHeight);
    this.y -= 6;
    this.page.drawRectangle({ x: MARGIN, y: this.y - 19, width: 3, height: 17, color: colors.accent });
    this.page.drawText(title.toLocaleUpperCase(), { x: MARGIN + 12, y: this.y - 15, size: 11, font: this.bold, color: colors.accent });
    this.page.drawLine({ start: { x: MARGIN, y: this.y - 24 }, end: { x: PAGE_WIDTH - MARGIN, y: this.y - 24 }, thickness: 0.6, color: colors.rule });
    this.y -= 34;
  }

  documentLink(label: string, id: string) {
    this.ensure(18);
    const size = 9;
    const width = this.regular.widthOfTextAtSize(label, size);
    this.page.drawText(label, { x: MARGIN, y: this.y - size, size, font: this.regular, color: colors.accent });
    this.page.drawLine({ start: { x: MARGIN, y: this.y - 11 }, end: { x: MARGIN + width, y: this.y - 11 }, thickness: 0.4, color: colors.accent });
    this.links.push({ page: this.page, id, rect: [MARGIN, this.y - 13, MARGIN + width, this.y + 2] });
    this.y -= 18;
  }

  bullet(value: string) {
    this.page.drawCircle({ x: MARGIN + 2, y: this.y - 6, size: 1.4, color: colors.accent });
    this.text(value, { x: MARGIN + 11, width: CONTENT_WIDTH - 11 });
  }
}

async function fetchAsset(path: string) {
  const response = await fetch(encodeURI(path));
  if (!response.ok) throw new Error(`Could not load CV asset: ${path} (${response.status})`);
  return response.arrayBuffer();
}

/** Gera os mesmos bytes no navegador e nas verificações locais. */
export async function buildProfessionalCV(lang: Language, loadAsset: AssetLoader = fetchAsset): Promise<Uint8Array> {
  const cv = getProfessionalCV(lang);
  const annexes = [
    ...cv.certificates.filter((item) => item.fileUrl).map((item) => ({ id: item.id, fileUrl: item.fileUrl! })),
    ...cv.references,
  ];
  const [regularBytes, boldBytes, photoBytes, annexBytes] = await Promise.all([
    loadAsset("/fonts/cv/SourceSans3-Regular.ttf"),
    loadAsset("/fonts/cv/SourceSans3-Semibold.ttf"),
    loadAsset(profile.profileImage),
    Promise.all(annexes.map((item) => loadAsset(item.fileUrl))),
  ]);
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  doc.setTitle(`${profile.name} - ${cv.documentTitle}`);
  doc.setAuthor(profile.name);
  doc.setLanguage(lang);
  const [regular, bold, photo, sources] = await Promise.all([
    doc.embedFont(regularBytes, { subset: true }),
    doc.embedFont(boldBytes, { subset: true }),
    doc.embedPng(photoBytes),
    Promise.all(annexBytes.map((bytes) => PDFDocument.load(bytes))),
  ]);
  const layout = new CVLayout(doc, regular, bold, cv.documentTitle);
  layout.newPage(true);

  // Cabeçalho: foto proporcional, contatos legíveis e links externos reais.
  const photoWidth = 82;
  const photoHeight = photo.height / photo.width * photoWidth;
  layout.page.drawImage(photo, { x: PAGE_WIDTH - MARGIN - photoWidth, y: PAGE_HEIGHT - MARGIN - photoHeight, width: photoWidth, height: photoHeight });
  layout.page.drawText(profile.name, { x: MARGIN, y: layout.y - 28, size: 28, font: bold, color: colors.ink });
  layout.y -= 42;
  layout.text(cv.headline, { bold: true, size: 11, width: CONTENT_WIDTH - photoWidth - 24 });
  layout.y -= 4;
  layout.text(profile.location, { size: 10, muted: true });
  for (const social of profile.socials) {
    const label = `${social.label}: ${social.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
    const lines = wrapText(label, regular, 9, CONTENT_WIDTH - photoWidth - 24);
    for (const line of lines) {
      layout.page.drawText(line, { x: MARGIN, y: layout.y - 9, size: 9, font: regular, color: colors.accent });
      addExternalLink(doc, layout.page, [MARGIN, layout.y - 12, MARGIN + regular.widthOfTextAtSize(line, 9), layout.y + 2], social.href);
      layout.y -= LINE_HEIGHT;
    }
  }
  layout.y = Math.min(layout.y, PAGE_HEIGHT - MARGIN - photoHeight) - 12;

  if (profile.websiteUrl) {
    const websiteLines = wrapText(profile.websiteUrl, regular, 10.5, CONTENT_WIDTH - 28);
    const height = 32 + websiteLines.length * LINE_HEIGHT;
    layout.ensure(height + 8);
    const top = layout.y;
    layout.page.drawRectangle({ x: MARGIN, y: top - height, width: CONTENT_WIDTH, height, color: colors.highlight, borderColor: colors.rule, borderWidth: 0.7 });
    layout.page.drawText(cv.websiteLabel.toLocaleUpperCase(), { x: MARGIN + 14, y: top - 19, size: 9, font: bold, color: colors.accent });
    websiteLines.forEach((line, index) => layout.page.drawText(line, { x: MARGIN + 14, y: top - 36 - index * LINE_HEIGHT, size: 10.5, font: regular, color: colors.accent }));
    addExternalLink(doc, layout.page, [MARGIN, top - height, PAGE_WIDTH - MARGIN, top], profile.websiteUrl);
    layout.y = top - height - 8;
  }

  layout.section(cv.summaryTitle, layout.height(cv.summary));
  layout.text(cv.summary);
  layout.y -= 4;

  const experienceHeight = (item: typeof cv.experiences[number]) =>
    layout.height(item.role, 11, true) + layout.height(`${item.company} · ${item.period}`, 9.5) +
    item.highlights.reduce((height, text) => height + layout.height(text, BODY_SIZE, false, CONTENT_WIDTH - 11), 0) +
    (item.referenceId ? 18 : 0) + 10;
  layout.section(cv.experienceTitle, experienceHeight(cv.experiences[0]));
  for (const item of cv.experiences) {
    layout.ensure(experienceHeight(item));
    layout.text(item.role, { bold: true, size: 11 });
    layout.text(`${item.company} · ${item.period}`, { muted: true, size: 9.5 });
    layout.y -= 3;
    item.highlights.forEach((text) => layout.bullet(text));
    if (item.referenceId) layout.documentLink(cv.viewDocument, item.referenceId);
    layout.y -= 7;
  }

  const languagesLine = cv.languages.map((item) => `${item.name}: ${item.level}`).join(" · ");
  const skillsHeight = cv.skills.reduce((height, group) => height + layout.height(`${group.title}: ${group.items.join(", ")}`, 9.5) + 2, 0) + layout.height(languagesLine, 9.5);
  layout.section(cv.skillsTitle, skillsHeight);
  for (const group of cv.skills) {
    layout.text(`${group.title}: ${group.items.join(", ")}`, { size: 9.5 });
    layout.y -= 2;
  }
  layout.text(languagesLine, { size: 9.5, muted: true });

  layout.newPage();
  const educationHeight = (item: typeof cv.education[number]) => item.status === "in-progress"
    ? 44 + layout.height(item.degree, 11, true, CONTENT_WIDTH - 28) + layout.height(item.institution, 9.5, false, CONTENT_WIDTH - 28) + layout.height(item.period, 9.5, false, CONTENT_WIDTH - 28)
    : layout.height(item.degree, 11, true) + layout.height(`${item.institution} · ${item.period}`, 9.5) + (item.certificateId ? 18 : 0) + 7;
  layout.section(cv.educationTitle, educationHeight(cv.education[0]) + 8);
  for (const item of cv.education) {
    const blockHeight = educationHeight(item);
    layout.ensure(blockHeight + 8);
    if (item.status === "in-progress") {
      const top = layout.y;
      layout.page.drawRectangle({ x: MARGIN, y: top - blockHeight, width: CONTENT_WIDTH, height: blockHeight, color: colors.highlight, borderColor: colors.rule, borderWidth: 0.7 });
      layout.page.drawRectangle({ x: MARGIN, y: top - blockHeight, width: 3, height: blockHeight, color: colors.accent });
      layout.page.drawText(cv.currentStudyLabel.toLocaleUpperCase(), { x: MARGIN + 14, y: top - 21, size: 9, font: bold, color: colors.accent });
      layout.y -= 32;
      layout.text(item.degree, { bold: true, size: 11, x: MARGIN + 14, width: CONTENT_WIDTH - 28 });
      layout.text(item.institution, { size: 9.5, muted: true, x: MARGIN + 14, width: CONTENT_WIDTH - 28 });
      layout.text(item.period, { size: 9.5, x: MARGIN + 14, width: CONTENT_WIDTH - 28 });
      layout.y = top - blockHeight - 10;
      continue;
    }
    layout.text(item.degree, { bold: true, size: 11 });
    layout.text(`${item.institution} · ${item.period}`, { size: 9.5, muted: true });
    if (item.certificateId) layout.documentLink(cv.viewDocument, item.certificateId);
    layout.y -= 7;
  }

  const educationCertificates = new Set(cv.education.map((item) => item.certificateId));
  const training = cv.certificates.filter((item) => !educationCertificates.has(item.id));
  if (training.length) {
    layout.section(cv.certificationsTitle, 65);
    for (const item of training) {
      layout.ensure(layout.height(item.title, 11, true) + layout.height(`${item.issuer} · ${item.date}`, 9.5) + 25);
      layout.text(item.title, { bold: true, size: 11 });
      layout.text(`${item.issuer} · ${item.date}`, { size: 9.5, muted: true });
      if (item.fileUrl) layout.documentLink(cv.viewDocument, item.id);
      layout.y -= 7;
    }
  }

  layout.section(cv.referencesTitle, 100);
  for (const item of cv.references) {
    layout.ensure(layout.height(item.description) + layout.height(item.issuer, 9.5) + 60);
    layout.text(item.title, { bold: true, size: 11 });
    const date = new Intl.DateTimeFormat(lang, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(item.issuedOn));
    layout.text(`${item.issuer} · ${date}`, { size: 9.5, muted: true });
    layout.text(item.description);
    layout.documentLink(cv.viewDocument, item.id);
  }

  // Projetos têm uma página própria, sem dividir a seção de formação.
  const projectHeight = (item: typeof cv.projects[number]) =>
    layout.height(item.title, 11, true) + layout.height(item.description) + layout.height(item.stack.join(" · "), 9) + 10;
  if (cv.projects.length) {
    layout.newPage();
    layout.section(cv.projectsTitle, projectHeight(cv.projects[0]));
    for (const item of cv.projects) {
      if (layout.y - projectHeight(item) < BOTTOM) {
        layout.newPage();
        layout.section(cv.projectsTitle, projectHeight(item));
      }
      layout.text(item.title, { bold: true, size: 11 });
      layout.text(item.description);
      layout.text(item.stack.join(" · "), { size: 9, muted: true });
      layout.y -= 10;
    }
  }
  layout.y -= 8;
  layout.text(cv.appendixNote, { size: 8.5, muted: true });

  // Copiar páginas conserva as dimensões originais. Os PDFs de origem não são alterados.
  const destinations = new Map<string, PDFPage>();
  for (let index = 0; index < sources.length; index++) {
    const copied = await doc.copyPages(sources[index], sources[index].getPageIndices());
    if (!copied.length) throw new Error(`Empty CV annex: ${annexes[index].id}`);
    copied.forEach((page) => doc.addPage(page));
    destinations.set(annexes[index].id, copied[0]);
  }
  for (const link of layout.links) {
    const target = destinations.get(link.id);
    if (!target) throw new Error(`Missing CV annex destination: ${link.id}`);
    link.page.node.addAnnot(doc.context.register(doc.context.obj({
      Type: "Annot", Subtype: "Link", Rect: link.rect, Border: [0, 0, 0],
      Dest: [target.ref, PDFName.of("Fit")],
    })));
  }
  const totalPages = doc.getPageCount();
  layout.pages.forEach((page, index) => {
    page.drawLine({ start: { x: MARGIN, y: 43 }, end: { x: PAGE_WIDTH - MARGIN, y: 43 }, thickness: 0.5, color: colors.rule });
    page.drawText(profile.name, { x: MARGIN, y: 28, size: 8, font: regular, color: colors.muted });
    const number = `${cv.page} ${index + 1} / ${totalPages}`;
    page.drawText(number, { x: PAGE_WIDTH - MARGIN - regular.widthOfTextAtSize(number, 8), y: 28, size: 8, font: regular, color: colors.muted });
  });
  return doc.save();
}

export async function generateProfessionalCV(lang: Language) {
  const bytes = await buildProfessionalCV(lang);
  const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `Jeferson-Bortoloti-CV-${lang}.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}
