export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo ve Hakkında */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl tracking-[0.2em] font-light">
              DURU<span className="text-[#E5C99F]">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Doğal güzelliğinizi cerrahi hassasiyet ve estetik sanatıyla
              yeniden yorumluyoruz. Modern tıbbın en ileri uygulamalarıyla
              yanınızdayız.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Buraya Lucide Icon'ları veya basit SVG'ler ekleyebilirsin */}
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E5C99F] transition-colors cursor-pointer text-xs group">
                <span className="group-hover:text-[#E5C99F]">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E5C99F] transition-colors cursor-pointer text-xs group">
                <span className="group-hover:text-[#E5C99F]">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E5C99F] transition-colors cursor-pointer text-xs group">
                <span className="group-hover:text-[#E5C99F]">YT</span>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-[#E5C99F] text-xs uppercase tracking-[0.3em] font-medium mb-8">
              Hızlı Menü
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">
                Kurumsal
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Tedavilerimiz
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Öncesi & Sonrası
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Blog & Haberler
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                İletişim
              </li>
            </ul>
          </div>

          {/* Popüler Hizmetler */}
          <div>
            <h4 className="text-[#E5C99F] text-xs uppercase tracking-[0.3em] font-medium mb-8">
              Hizmetler
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">
                Rinoplasti
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Yüz Germe
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Medikal Estetik
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cilt Yenileme
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Vücut Şekillendirme
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-[#E5C99F] text-xs uppercase tracking-[0.3em] font-medium mb-8">
              İletişim
            </h4>
            <ul className="flex flex-col gap-6 text-sm text-gray-400 font-light">
              <li className="leading-relaxed">
                Nişantaşı, Valikonağı Cd. No:12 <br />
                Şişli / İstanbul
              </li>
              <li>
                <span className="block text-white mb-1">Randevu Hattı:</span>
                +90 (212) 000 00 00
              </li>
              <li>
                <span className="block text-white mb-1">E-posta:</span>
                info@duruklinik.com
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Footer (Telif Hakları) */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500 tracking-widest uppercase">
            © 2026{" "}
            <a href="https://diajans.com" target="blank">
              diajans.com
            </a>{" "}
            TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-8 text-[11px] text-gray-500 tracking-widest uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">
              KVKK
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Çerez Politikası
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
