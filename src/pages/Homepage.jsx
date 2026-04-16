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
    <div className="w-full min-h-screen text-white relative font-sans overflow-x-hidden bg-[#0F0F0F]">
      <Navbar />

      {/* Hero Alanı - Pembe Çiçeklerle Uyumlu Soft Overlay */}
      <div className="hero relative w-full h-screen flex flex-col justify-between p-6 md:p-20 uppercase overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-pink-900/10 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center lg:items-start flex-1 text-center lg:text-left">
          <p className="text-[12px] md:text-[14px] font-medium tracking-[0.5em] text-[#F3D1D1] mb-6 opacity-90">
            Estetik Sanatı & Medikal Hassasiyet
          </p>
          <h1 className="text-[40px] sm:text-[55px] lg:text-[80px] font-light leading-[1.1] w-full lg:w-[70%] tracking-[0.05em]">
            Doğal{" "}
            <span className="text-[#F3D1D1] italic font-serif italic">
              Işıltı.
            </span>{" "}
            <br />
            Özenle <br className="hidden lg:block" />
            Tasarlanmış.
          </h1>
        </div>

        <div className="relative z-20 flex justify-center lg:justify-end items-end pb-10">
          <p className="text-[14px] md:text-[16px] font-light tracking-wide w-full max-w-[450px] text-gray-200 leading-relaxed text-center lg:text-right normal-case opacity-90">
            Çiçeklerin zarafetinden ilham alarak, doğal güzelliğinizi cerrahi
            ustalıkla yeniden formüle ediyoruz.
          </p>
        </div>
      </div>

      {/* Felsefe Bölümü - Rose & Dark Mod */}
      <section className="bg-[#0F0F0F] w-full py-24 px-6 md:px-20 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Arka Plan Glow Efekti (Pembe) */}
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full"></div>
            <img
              src={gorsel1}
              alt="Büyük Görsel"
              className="w-full max-w-[550px] h-[500px] md:h-[700px] rounded-2xl object-cover shadow-2xl relative z-10"
            />
            <div className="hidden lg:block absolute -bottom-10 -right-10 z-20">
              <img
                src={gorsel2}
                alt="Küçük Görsel"
                className="w-[240px] h-[320px] rounded-2xl shadow-2xl object-cover border-4 border-[#0F0F0F]"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:pl-24 text-center lg:text-left">
          <span className="text-[#F3D1D1] uppercase tracking-[0.4em] text-sm mb-6 font-medium block">
            Vizyonumuz
          </span>
          <h3 className="text-[36px] md:text-[56px] font-light leading-tight tracking-tight mb-8">
            Yeniden <br />
            <span className="text-[#F3D1D1] italic font-serif text-[1.1em]">
              Canlanan
            </span>{" "}
            Bir <br />
            Görünüm
          </h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-[500px] mx-auto lg:mx-0 mb-10">
            Duru Klinik'te her tedavi, bir çiçeğin açması gibi sabır ve estetik
            bir gözle planlanır.
          </p>
          <button className="px-10 py-4 border border-[#F3D1D1] text-[#F3D1D1] hover:bg-[#F3D1D1] hover:text-black transition-all duration-700 uppercase text-xs tracking-[0.2em] rounded-full">
            Detaylı Bilgi Al
          </button>
        </div>
      </section>

      {/* Temel Yaklaşımlar Bölümü (PUDRA PEMBESİ & BEYAZ GEÇİŞ) */}
      <section className="bg-gradient-to-b from-[#FFF5F5] to-white w-full py-24 px-6 md:px-20 text-[#2D2424]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[30px] md:text-[50px] font-light tracking-[0.1em] text-center uppercase mb-16">
            Güzelliğin{" "}
            <span className="text-[#D98E8E] italic font-serif">
              Dört Mevsimi
            </span>
          </h3>

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={gorsel3}
                alt="Tedavi"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="w-full lg:w-2/5 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-pink-50 lg:-ml-24 z-20">
              <h4 className="text-2xl md:text-3xl font-light uppercase tracking-wide mb-6 text-[#4A3737]">
                Yüz Hatlarını Belirginleştirme
              </h4>
              <p className="text-gray-600 font-light mb-8 leading-relaxed">
                Yüzünüzdeki hatları, en zarif pembe çiçeklerin yaprakları kadar
                pürüzsüz ve dengeli bir forma kavuşturuyoruz.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-500 tracking-wide font-medium"
                  >
                    <div className="w-1.5 h-1.5 bg-[#D98E8E] rounded-full mr-3"></div>
                    {service.name}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-[#4A3737] text-white hover:bg-[#D98E8E] transition-colors duration-500 rounded-xl text-xs tracking-widest uppercase font-bold">
                Uygulamaları Keşfet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Tedaviler - Rose Glow Efekti */}
      <section className="bg-[#0F0F0F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[30px] md:text-[50px] font-light tracking-[0.1em] text-center uppercase mb-20 text-white">
            ÖNE ÇIKAN <span className="text-[#F3D1D1]">HİZMETLER</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group relative h-[500px] rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-pink-500/10 transition-shadow duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${treatment.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-white text-lg font-light tracking-widest uppercase mb-4">
                    {treatment.name}
                  </h4>
                  <div className="w-0 group-hover:w-full h-0.5 bg-[#F3D1D1] transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Çiçekli Atmosfer Bitirişi */}
      <section className="bg-[#0F0F0F] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative rounded-[3rem] bg-gradient-to-br from-[#1a1413] to-[#2D1F1F] p-10 md:p-24 overflow-hidden border border-white/5">
            {/* Pembe Işık Hüzmesi */}
            <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-[#D98E8E]/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px]" />

            <span className="text-[#F3D1D1] uppercase tracking-[0.5em] text-xs mb-8 block relative z-10">
              Zamanın Ötesinde Bir Dokunuş
            </span>
            <h2 className="text-4xl md:text-7xl font-light mb-12 leading-tight relative z-10">
              Kendinizi <br />{" "}
              <span className="italic font-serif text-[#F3D1D1]">
                Yeniden Tanımlayın
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button className="px-14 py-5 bg-[#F3D1D1] text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl shadow-pink-500/5">
                Randevu Talep Et
              </button>
              <button className="px-14 py-5 border border-white/10 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                WhatsApp İletişim
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
