import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/blog";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Jorgen Bergh`, description: post.meta.description };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16">
      <div className="mb-12 flex items-start justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          {post.meta.date && (
            <p className="text-xs text-[#b8b6af] font-[family-name:var(--font-geist-mono)]">
              {post.meta.date}
            </p>
          )}
          <h1 className="text-2xl font-semibold tracking-tight">{post.meta.title}</h1>
          {post.meta.description && (
            <p className="text-sm text-[#888780]">{post.meta.description}</p>
          )}
        </div>
        <Link href="/blog" className="text-sm text-[#888780] hover:text-[#111110] transition-colors shrink-0">
          ← All posts
        </Link>
      </div>

      <hr className="border-t border-[#e8e6e0] mb-10" />

      <article className="prose prose-sm prose-neutral max-w-xl
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-p:text-[#444340] prose-p:leading-relaxed
        prose-a:text-[#111110] prose-a:underline prose-a:underline-offset-2
        prose-strong:text-[#111110] prose-strong:font-medium
        prose-li:text-[#444340]
        prose-code:font-[family-name:var(--font-geist-mono)] prose-code:text-[#555450] prose-code:text-xs">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
