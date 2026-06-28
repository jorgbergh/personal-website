import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Writing — Jorgen Bergh",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16">
      <div className="mb-16 flex items-end justify-between">
        <div className="space-y-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">(06)</p>
          <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
          <p className="text-sm text-[#888780]">Occasional posts on ML, learning, and other things.</p>
        </div>
        <Link href="/" className="text-sm text-[#888780] hover:text-[#111110] transition-colors">
          ← Back
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-[#aaa89e] font-[family-name:var(--font-geist-mono)]">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="space-y-0">
          {posts.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-7">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_100px] gap-2 md:gap-8 items-start">
                  <div className="space-y-1">
                    <p className="font-medium text-[#111110] group-hover:underline underline-offset-2 transition-colors">
                      {post.title}
                    </p>
                    {post.description && (
                      <p className="text-sm text-[#888780]">{post.description}</p>
                    )}
                  </div>
                  {post.date && (
                    <p className="text-xs text-[#b8b6af] font-[family-name:var(--font-geist-mono)] md:text-right">
                      {post.date}
                    </p>
                  )}
                </div>
              </Link>
              {i < posts.length - 1 && <hr className="border-t border-[#f0ede6]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
