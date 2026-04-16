"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "PAGES", href: "/pages" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACTS", href: "/contacts" },
  ];

  return (
    <nav className="w-full flex items-center justify-between md:px-20 pt-5 p-5 bg-transparent absolute top-0 z-50">
      {/* MASAÜSTÜ: Sol Menü */}
      <div className="hidden lg:flex w-1/3 justify-start gap-6 pl-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white text-[14px] hover:text-orange-400 transition-colors uppercase tracking-widest font-light leading-[1.1] font-bold"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* MOBİL: Hamburger Menü Butonu (Saf CSS İkonu) */}
      <div className="lg:hidden w-1/3 flex justify-start">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 z-[60]"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* ORTA: Logo */}
      <div className="w-1/3 text-center">
        <h1 className="text-white text-xl md:text-2xl font-light tracking-[0.4em] uppercase">
          LOGO
        </h1>
      </div>

      {/* SAĞ TARAF: İletişim ve Buton */}
      <div className="w-1/3 hidden md:flex items-center justify-end gap-6">
        <span className="text-white text-sm tracking-widest hidden xl:inline">
          +0850 123 1234
        </span>
        <button className="px-6 py-3 text-[10px] tracking-[0.2em] font-bold text-white border border-white/40 hover:bg-orange-700 hover:border-orange-700 transition-all duration-300 uppercase">
          BOOK A CONSULTATION
        </button>
      </div>

      {/* MOBİL MENÜ PANELİ */}
      <div
        className={`fixed inset-0 bg-stone-950 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden z-50`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl tracking-[0.3em] uppercase font-light hover:text-orange-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="text-white/60 text-sm">+0850 123 1234</span>
          <button className="px-6 py-3 text-[10px] text-white border border-white/40 uppercase tracking-widest">
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
