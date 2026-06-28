import fs from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

const postsDir = path.join(process.cwd(), "content/blog");

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key) meta[key.trim()] = rest.join(":").trim();
  }
  return { meta, content: match[2] };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { meta } = parseFrontmatter(raw);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: meta.title ?? file,
        date: meta.date ?? "",
        description: meta.description ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(postsDir, slug + ext);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { meta, content } = parseFrontmatter(raw);
      return {
        meta: { slug, title: meta.title ?? slug, date: meta.date ?? "", description: meta.description ?? "" },
        content,
      };
    }
  }
  return null;
}
