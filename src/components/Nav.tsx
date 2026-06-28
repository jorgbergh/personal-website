"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects & Research" },
  { href: "/training", label: "Training" },
  { href: "/blog", label: "Writing" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="max-w-5xl mx-auto w-full px-6 pt-8 pb-0 flex items-center justify-between">
      <Link href="/" className="text-sm font-medium tracking-tight text-[#111110] hover:text-[#555450] transition-colors">
        Jorgen Bergh
      </Link>
      <nav>
        <ul className="flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "text-[#111110] font-medium"
                    : "text-[#888780] hover:text-[#111110]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
