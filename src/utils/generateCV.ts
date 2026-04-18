import type { Language } from "@/data/translations";
import { profile } from "@/data/profile";
import {
  academicCV,
  type AcademicCV,
  type AcademicEntry,
  type AcademicEducation,
  type AcademicSkillGroup,
  type AcademicLanguageItem,
  type AcademicReference,
  type AcademicConference,
  type AcademicPublicationGroup,
} from "@/data/curriculo_acadm";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function hasContent<T>(items?: T[]): items is T[] {
  return Array.isArray(items) && items.length > 0;
}

function sectionWrapper(title: string, body: string): string {
  return `<section class="cv-section">
  <h2>${escapeHtml(title)}</h2>
  ${body}
</section>`;
}

function renderHighlights(highlights?: string[]): string {
  if (!hasContent(highlights)) return "";
  return `<ul>${highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>`;
}

function renderEntry(entry: AcademicEntry): string {
  const period = entry.period
    ? `<span class="period">${escapeHtml(entry.period)}</span>`
    : "";
  const organization = entry.organization
    ? `<p class="entry-org">${escapeHtml(entry.organization)}</p>`
    : "";
  const description = entry.description
    ? `<p class="entry-desc">${escapeHtml(entry.description)}</p>`
    : "";
  return `<div class="entry">
  <div class="entry-header">
    <h3>${escapeHtml(entry.title)}</h3>
    ${period}
  </div>
  ${organization}
  ${description}
  ${renderHighlights(entry.highlights)}
</div>`;
}

function renderEducation(item: AcademicEducation): string {
  const thesis = item.thesisTitle
    ? `<p class="entry-desc"><em>${escapeHtml(item.thesisTitle)}</em></p>`
    : "";
  const advisor = item.advisor
    ? `<p class="entry-desc">${escapeHtml(item.advisor)}</p>`
    : "";
  return `<div class="entry">
  <div class="entry-header">
    <h3>${escapeHtml(item.degree)}</h3>
    <span class="period">${escapeHtml(item.period)}</span>
  </div>
  <p class="entry-org">${escapeHtml(item.institution)}${
    item.location ? ` — ${escapeHtml(item.location)}` : ""
  }</p>
  ${thesis}
  ${advisor}
  ${renderHighlights(item.highlights)}
</div>`;
}

function renderSkillGroup(group: AcademicSkillGroup): string {
  return `<div class="skills-group"><strong>${escapeHtml(
    group.title
  )}:</strong> ${group.items.map(escapeHtml).join(", ")}</div>`;
}

function renderLanguage(item: AcademicLanguageItem): string {
  return `<div class="skills-group"><strong>${escapeHtml(
    item.language
  )}:</strong> ${escapeHtml(item.level)}</div>`;
}

function renderReference(ref: AcademicReference): string {
  return `<div class="entry">
  <h3>${escapeHtml(ref.name)}</h3>
  <p class="entry-org">${escapeHtml(ref.role)} — ${escapeHtml(ref.institution)}</p>
  <p class="entry-desc">${escapeHtml(ref.email)}</p>
</div>`;
}

function renderConference(item: AcademicConference): string {
  const kind = item.kind ? ` <em>(${escapeHtml(item.kind)})</em>` : "";
  return `<div class="entry">
  <div class="entry-header">
    <h3>${escapeHtml(item.title)}${kind}</h3>
    <span class="period">${escapeHtml(item.date)}</span>
  </div>
  <p class="entry-org">${escapeHtml(item.event)} — ${escapeHtml(item.location)}</p>
</div>`;
}

function renderPublicationGroup(group: AcademicPublicationGroup): string {
  return `<div class="entry">
  <h3>${escapeHtml(group.label)}</h3>
  <ul>${group.items.map((it) => `<li>${escapeHtml(it)}</li>`).join("")}</ul>
</div>`;
}

function renderMembership(item: string): string {
  return `<li>${escapeHtml(item)}</li>`;
}

function buildSections(cv: AcademicCV): string {
  const blocks: string[] = [];

  if (cv.researchInterests.content) {
    blocks.push(
      sectionWrapper(
        cv.researchInterests.title,
        `<p class="entry-desc">${escapeHtml(cv.researchInterests.content)}</p>`
      )
    );
  }

  if (hasContent(cv.education.items)) {
    blocks.push(
      sectionWrapper(
        cv.education.title,
        cv.education.items.map(renderEducation).join("\n")
      )
    );
  }

  if (hasContent(cv.researchExperience.items)) {
    blocks.push(
      sectionWrapper(
        cv.researchExperience.title,
        cv.researchExperience.items.map(renderEntry).join("\n")
      )
    );
  }

  if (hasContent(cv.teachingExperience.items)) {
    blocks.push(
      sectionWrapper(
        cv.teachingExperience.title,
        cv.teachingExperience.items.map(renderEntry).join("\n")
      )
    );
  }

  if (hasContent(cv.publications.groups)) {
    blocks.push(
      sectionWrapper(
        cv.publications.title,
        cv.publications.groups.map(renderPublicationGroup).join("\n")
      )
    );
  }

  if (hasContent(cv.conferences.items)) {
    blocks.push(
      sectionWrapper(
        cv.conferences.title,
        cv.conferences.items.map(renderConference).join("\n")
      )
    );
  }

  if (hasContent(cv.awards.items)) {
    blocks.push(
      sectionWrapper(
        cv.awards.title,
        cv.awards.items.map(renderEntry).join("\n")
      )
    );
  }

  if (hasContent(cv.academicService.items)) {
    blocks.push(
      sectionWrapper(
        cv.academicService.title,
        cv.academicService.items.map(renderEntry).join("\n")
      )
    );
  }

  if (hasContent(cv.technicalSkills.groups)) {
    blocks.push(
      sectionWrapper(
        cv.technicalSkills.title,
        cv.technicalSkills.groups.map(renderSkillGroup).join("\n")
      )
    );
  }

  if (hasContent(cv.certifications.items)) {
    blocks.push(
      sectionWrapper(
        cv.certifications.title,
        cv.certifications.items.map(renderEntry).join("\n")
      )
    );
  }

  if (hasContent(cv.memberships.items)) {
    blocks.push(
      sectionWrapper(
        cv.memberships.title,
        `<ul>${cv.memberships.items.map(renderMembership).join("")}</ul>`
      )
    );
  }

  if (hasContent(cv.languages.items)) {
    blocks.push(
      sectionWrapper(
        cv.languages.title,
        cv.languages.items.map(renderLanguage).join("\n")
      )
    );
  }

  const refsHasItems = hasContent(cv.references.items);
  const refsHasUponRequest = !!cv.references.uponRequestLabel;
  if (refsHasItems || refsHasUponRequest) {
    const refsBody = refsHasItems
      ? cv.references.items!.map(renderReference).join("\n")
      : `<p class="entry-desc"><em>${escapeHtml(
          cv.references.uponRequestLabel!
        )}</em></p>`;
    blocks.push(sectionWrapper(cv.references.title, refsBody));
  }

  return blocks.join("\n");
}

function buildContactLine(): string {
  const parts: string[] = [];
  if (profile.location) parts.push(escapeHtml(profile.location));
  for (const social of profile.socials) {
    if (social.href) {
      parts.push(`${escapeHtml(social.label)}: ${escapeHtml(social.href)}`);
    }
  }
  return parts.join(" &nbsp;|&nbsp; ");
}

export function generateAcademicCV(lang: Language) {
  const cv = academicCV[lang];

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(cv.documentTitle)} - ${escapeHtml(profile.name)}</title>
<style>
  @page { margin: 2cm; size: A4; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: "Times New Roman", Times, serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
    max-width: 21cm;
    margin: 0 auto;
    padding: 2cm;
  }
  h1 { font-size: 16pt; text-align: center; margin-bottom: 4pt; font-weight: bold; }
  h2 {
    font-size: 12pt;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1.5pt solid #000;
    padding-bottom: 3pt;
    margin-top: 18pt;
    margin-bottom: 8pt;
  }
  h3 { font-size: 11pt; font-weight: bold; margin-bottom: 2pt; }
  .center { text-align: center; }
  .doc-title { text-align: center; font-size: 11pt; color: #333; margin-bottom: 2pt; font-style: italic; }
  .contact-line { text-align: center; font-size: 10pt; color: #444; margin-bottom: 12pt; }
  .entry { margin-bottom: 12pt; }
  .entry-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  .entry-header .period { font-style: italic; font-size: 10pt; white-space: nowrap; }
  .entry-org { font-style: italic; margin-bottom: 2pt; }
  .entry-desc { margin-bottom: 4pt; text-align: justify; }
  ul { margin-left: 20pt; margin-bottom: 4pt; }
  ul li { margin-bottom: 2pt; }
  .skills-group { margin-bottom: 6pt; }
  .skills-group strong { font-size: 11pt; }
  .cv-section { page-break-inside: avoid; }
  @media print { body { padding: 0; } }
</style>
</head>
<body>
<h1>${escapeHtml(profile.name)}</h1>
<p class="doc-title">${escapeHtml(cv.documentTitle)}</p>
<p class="contact-line">${buildContactLine()}</p>

${buildSections(cv)}

</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (win) {
    win.onload = () => {
      setTimeout(() => {
        win.print();
      }, 500);
    };
  }
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
