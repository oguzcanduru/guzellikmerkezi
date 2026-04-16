import Navbar from "../components/navbar";
import "../css/Homepage.css";
import gorsel1 from "../assets/84-home-1-2.webp";
import gorsel2 from "../assets/84-home-1-3.webp";
import gorsel3 from "../assets/84-home-1-4-2.webp";

import treatment from "../assets/84-treatment-2.webp";
import treatment1 from "../assets/84-treatment-1.webp";
import treatment2 from "../assets/84-treatment-3.webp";
import Footer from "../components/footer";

export default function Homepage() {
  const services = [
    { name: "Rinoplasti" },
    { name: "Yüz Germe" },
    { name: "Derin Plan Yüz Germe" },
    { name: "Cilt Temizliği" },
    { name: "Lazer Cilt Yenileme" },
    { name: "Akne Terapisi" },
  ];

  const treatments = [
    { name: "Rinoplasti", img: treatment },
    { name: "Yüz Şekillendirme", img: treatment1 },
    { name: "Cilt Gençleştirme", img: treatment1 },
    { name: "Medikal Estetik", img: treatment2 },
  ];

  return (
    <div className="hero w-full h-screen text-white relative font-sans overflow-x-hidden">
      <Navbar />

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Alanı */}
      <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-20 uppercase">
        <div className="flex flex-col justify-center items-center lg:items-start flex-1 text-center lg:text-left">
          <p className="text-[12px] md:text-[14px] font-medium tracking-[0.3em] text-white mb-4 opacity-90">
            İleri Estetik Tıp Uygulamaları
          </p>
          <h1 className="text-[36px] sm:text-[45px] lg:text-[64px] font-light leading-[1.1] w-full lg:w-[65%] tracking-[0.1em]">
            Zarif <span className="text-[#E5C99F]">Güzellik.</span> <br />
            Özenle <br className="hidden lg:block" />
            Tasarlanmış.
          </h1>
        </div>

        <div className="flex justify-center lg:justify-end items-end pb-10 lg:pb-0">
          <p className="text-[13px] md:text-[14px] font-light tracking-[0.1em] lg:tracking-[0.15em] w-full max-w-[450px] lg:w-[380px] text-white leading-relaxed text-center lg:text-right normal-case opacity-80">
            Duru'da, doğal yapınızı asla bozmadan onu daha da güzelleştirmek
            için cerrahi hassasiyeti estetik ustalığıyla birleştiriyoruz.
          </p>
        </div>
      </div>

      {/* Felsefe Bölümü */}
      <section className="bg w-full min-h-screen flex flex-wrap items-center p-6 md:p-20 relative overflow-visible bg-[#0a0a0a]">
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E5C99F]/10 rounded-full blur-3xl"></div>

          <div className="relative group">
            <img
              src={gorsel1}
              alt="Büyük Görsel"
              className="w-full max-w-[600px] xl:w-[650px] h-[450px] md:h-[650px] xl:h-[750px] rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="hidden lg:block absolute -bottom-10 -right-10 xl:-right-20 z-20">
              <div className="absolute inset-0 border border-[#E5C99F] translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
              <img
                src={gorsel2}
                alt="Küçük Görsel"
                className="w-[220px] h-[300px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover transition-all duration-500 hover:translate-y-[-10px] hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:pl-24 flex flex-col justify-center text-center lg:text-left text-white">
          <span className="text-[#E5C99F] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium block">
            Felsefemiz
          </span>

          <h3 className="text-[32px] md:text-[50px] xl:text-[64px] font-light leading-[1.2] lg:leading-[1.1] tracking-[0.05em]">
            Modern Estetik <br />
            <span className="text-[#E5C99F] italic">Bakım</span> İçin <br />
            <span className="relative inline-block">
              Yeni Adres
              <div className="absolute bottom-2 left-0 w-full h-[1px] bg-[#E5C99F]/30"></div>
            </span>
          </h3>

          <p className="mt-8 text-[15px] md:text-[17px] xl:text-[19px] font-light leading-relaxed text-gray-300 max-w-[500px] mx-auto lg:mx-0">
            Duru, yüz düzeltme, vücut şekillendirme ve rejeneratif, ameliyatsız
            tedaviler konusunda uzmanlaşmış, doktorlar tarafından yönetilen bir
            estetik kliniğidir.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-10 max-w-[500px] mx-auto lg:mx-0">
            <div>
              <h4 className="text-[#E5C99F] font-medium tracking-widest text-sm uppercase mb-2">
                Uzmanlık
              </h4>
              <p className="text-sm text-gray-400">
                Her işlemde hekimlerin öncülüğünde klinik mükemmellik.
              </p>
            </div>
            <div>
              <h4 className="text-[#E5C99F] font-medium tracking-widest text-sm uppercase mb-2">
                Sonuçlar
              </h4>
              <p className="text-sm text-gray-400">
                Doğal uyum ve uzun vadeli estetik gelişim.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start">
            <button className="group relative px-10 py-4 bg-[#c92a45] hover:bg-[#a82239] transition-colors duration-300 rounded-md text-sm tracking-widest uppercase font-medium">
              Uzmanımızla Tanışın
            </button>
          </div>
        </div>
      </section>

      {/* Temel Yaklaşımlar Bölümü */}
      <section className="bg-[#221a19] w-full p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center">
        <h3 className="text-[28px] md:text-[45px] xl:text-[60px] font-light leading-tight tracking-[0.1em] text-center uppercase text-white mb-12 lg:mb-20 z-20">
          TEMEL <span className="text-[#E5C99F]">TEDAVİ</span> SÜTUNLARIMIZ
        </h3>

        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center lg:justify-start">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[85%] h-[500px] lg:h-full overflow-hidden rounded-3xl z-0 group">
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:opacity-10 opacity-60 rounded-3xl"></div>
            <img
              src={gorsel3}
              alt="Tedavi Görseli"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="relative bg-[#1a1413]/90 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl border border-white/5 shadow-2xl z-20 w-full max-w-[550px] lg:ml-12">
            <div>
              <h4 className="uppercase text-[22px] md:text-[32px] xl:text-[38px] font-light leading-tight tracking-wider text-white">
                Yüz Hatlarını Belirginleştirme
              </h4>

              <p className="mt-6 text-[14px] md:text-[15px] text-gray-300 leading-relaxed font-light normal-case">
                Rejuvita'da yüz düzeltme işlemi, yapı ve uyum temellerine
                dayanır. İfadeyi ve karakteri bozmadan doğal oranları
                geliştiriyoruz.
              </p>
            </div>

            <div className="mt-10 border-t border-[#E5C99F]/20 pt-8">
              <ul className="flex flex-wrap gap-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="w-full sm:w-1/2 text-[#E5C99F] text-[13px] md:text-[14px] tracking-[0.1em] font-light list-none 
                         hover:translate-x-1 transition-transform duration-300 cursor-pointer 
                         flex items-center group mb-1"
                  >
                    <span className="mr-2 opacity-40 group-hover:opacity-100 transition-opacity shrink-0">
                      —
                    </span>
                    <span className="truncate">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-12 px-8 py-4 rounded-md w-fit border border-[#E5C99F]/30 text-[#E5C99F] text-xs tracking-widest hover:bg-[#E5C99F] hover:text-[#221a19] transition-all duration-300 uppercase">
              Detayları Görüntüle
            </button>
          </div>
        </div>

        {/* Buton Grubu */}
        <div className="flex flex-wrap justify-center gap-4 mt-20">
          <button className="rounded-md uppercase p-4 w-[200px] bg-black text-white transition-all duration-300 hover:bg-[#d98391] hover:-translate-y-1 hover:shadow-lg active:scale-95">
            Yüz İyileştirme
          </button>
          <button className="rounded-md uppercase p-4 w-[200px] bg-black text-white transition-all duration-300 hover:bg-[#d98391] hover:-translate-y-1 hover:shadow-lg active:scale-95">
            Vücut Şekillendirme
          </button>
          <button className="rounded-md uppercase p-4 w-[200px] bg-black text-white transition-all duration-300 hover:bg-[#d98391] hover:-translate-y-1 hover:shadow-lg active:scale-95">
            Cilt Bakımı
          </button>
        </div>

        {/* Popüler Tedaviler Başlığı */}
        <h3 className="text-[28px] md:text-[45px] xl:text-[60px] font-light mt-20 leading-tight tracking-[0.1em] text-center uppercase text-white mb-12 lg:mb-20 z-20">
          POPÜLER <span className="text-[#E5C99F]">TEDAVİLERİMİZ</span>
        </h3>

        {/* Tedavi Kartları (Artık Grid ile sabit) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-10">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${treatment.img})` }}
              className="relative w-full h-[450px] bg-cover bg-center rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] shadow-xl"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

              <div className="relative z-10 h-full flex items-end p-8">
                <h4 className="text-white text-lg font-light tracking-widest uppercase border-b border-[#E5C99F]/50 pb-2 w-full">
                  {treatment.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* İstatistikler Bölümü */}
      </section>
      <Footer />
    </div>
  );
}
