export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 bg-transparent absolute top-0 z-50">
      {/* Sol Menü */}
      <div className="flex w-1/3 justify-start gap-4 pl-6">
        <a
          className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
          href="/"
        >
          HOME
        </a>
        <a
          className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
          href="/services"
        >
          SERVICES
        </a>
        <a
          className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
          href="/pages"
        >
          PAGES
        </a>
        <a
          className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
          href="/blog"
        >
          BLOG
        </a>
        <a
          className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
          href="/contacts"
        >
          CONTACTS
        </a>
      </div>

      {/* Orta Logo */}
      <div className="w-1/3 text-center">
        <h1 className="text-white text-2xl font-light tracking-[0.3em] uppercase">
          LOGO
        </h1>
      </div>

      {/* Sağ Taraf (Boş veya İkonlar için) */}
      <div className="w-1/3 flex justify-end">
        {/* Buraya arama ikonu veya randevu butonu gelebilir */}
      </div>
    </nav>
  );
}
