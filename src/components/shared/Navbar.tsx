"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Noto_Serif_Devanagari } from "next/font/google";
import SiteSearch from "./SiteSearch";

const serifDev = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500"],
});

type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "होम" },
  { href: "/sahitya", label: "साहित्य" },
  { href: "/samachar", label: "समाचार" },
  { href: "/rajniti-shasan", label: "राजनीति-शासन" },
  { href: "/samaj", label: "समाज" },
  { href: "/sanskriti-dharm", label: "संस्कृति-धर्म" },
  { href: "/jivanshaili", label: "जीवनशैली" },
  { href: "/arth-paryavaran", label: "अर्थ-पर्यावरण" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="bg-[#F3ECDC]">
        <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/logo.jpeg"
              alt="साहित्य सृजन संवाद"
              width={220}
              height={220}
              priority
              className="object-contain w-40 sm:w-48 h-auto"
            />

            <p
              className={`${serifDev.className} mt-4 text-base sm:text-lg text-[#2B2420] italic`}
            >
              कला संस्कृति चिंतन का पोर्टल
            </p>
          </Link>

          <div className="mt-6 w-24 border-t-2 border-[#B98D3E]" />
          <div className="mt-1 w-24 border-t border-[#B98D3E]" />
        </div>
      </div>

      <nav className="bg-[#2B2420] shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block whitespace-nowrap rounded px-3 py-2 text-sm sm:text-base transition-colors ${
                    pathname === item.href
                      ? "bg-[#7A2E2E] text-[#F3ECDC] font-semibold"
                      : "text-[#F3ECDC]/80 hover:text-[#F3ECDC]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pb-3 flex justify-center">
            <SiteSearch />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;