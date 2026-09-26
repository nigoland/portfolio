import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  /** Short display title used on compact cards (e.g. the home page project tickets) */
  shortTitle?: string;
  /** Year label shown on compact cards, e.g. "2026" (independent of publishedAt) */
  caseStudyYear?: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  /** Shorter blurb for compact cards (e.g. the home page project tickets); falls back to summary */
  ticketSummary?: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  timeframe?: string;
  teamSize?: string;
  scope?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    shortTitle: data.shortTitle || "",
    caseStudyYear: data.caseStudyYear || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    ticketSummary: data.ticketSummary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    timeframe: data.timeframe || "",
    teamSize: data.teamSize || "",
    scope: data.scope || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
