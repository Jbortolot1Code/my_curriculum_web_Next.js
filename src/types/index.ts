export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  contactText: string;
  profileImage: string;
  socials: SocialLink[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type ProjectStatus = "done" | "in-progress";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  status?: string;
  statusType?: ProjectStatus;
  context?: string;
};

export type SkillGroupKey = "languages" | "backend" | "frontend" | "ml";

export type SkillGroup = {
  key?: SkillGroupKey;
  title: string;
  items: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  thumbnail: string;
  image: string;
  fileUrl?: string;
  description?: string;
};

export type LanguageProficiency = {
  code: string;
  name: string;
  level: string;
  levelPercent: number;
  note?: string;
};
