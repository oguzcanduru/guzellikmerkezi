import Navbar from "../components/navbar";
import "../css/Homepage.css";
import gorsel1 from "../assets/84-home-1-2.webp";
import gorsel2 from "../assets/84-home-1-3.webp";
export default function Homepage() {
  return (
    <div className="hero w-full h-screen text-white relative font-sans">
      <Navbar />

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col justify-between h-full p-10 uppercase">
        <div className="flex flex-col justify-center flex-1">
          <p className="text-[14px] font-medium tracking-[0.3em] text-white mb-4 opacity-90">
            Advanced Aesthetic Medicine
          </p>
          <h1 className="text-[64px] font-light leading-[1.1] w-[65%] tracking-[0.1em]">
            Zarif <span className="text-[#E5C99F]">Güzellik.</span> <br />
            Özenle
            <br />
            Tasarlanmış.
          </h1>
        </div>
        <div className="flex justify-end items-end">
          <p className="text-[13px] font-light tracking-[0.15em] w-[380px] text-white leading-relaxed text-right normal-case">
            Duru'da, doğal yapınızı asla bozmadan onu daha da güzelleştirmek
            için cerrahi hassasiyeti estetik ustalığıyla birleştiriyoruz.
          </p>
        </div>
      </div>

      <section className="w-full min-h-screen flex flex-wrap items-center p-10 md:p-20 relative overflow-visible">
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E5C99F]/10 rounded-full blur-3xl"></div>

          <div className="relative group">
            <img
              src={gorsel1}
              alt="Büyük Görsel"
              className="w-[500px] xl:w-[550px] h-[650px] xl:h-[750px] rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute -bottom-20 -right-10 xl:-right-20 z-20">
              <div className="absolute inset-0 border border-[#E5C99F] translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
              <img
                src={gorsel2}
                alt="Küçük Görsel"
                className="w-[220px] h-[320px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover transition-all duration-500 hover:translate-y-[-10px] hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-32 lg:mt-0 lg:pl-24 flex flex-col justify-center text-white">
          <span className="text-[#E5C99F] uppercase tracking-[0.4em] text-sm mb-6 font-medium">
            Felsefemiz{" "}
          </span>

          <h3 className="text-[50px] xl:text-[64px] font-light leading-[1.1] tracking-[0.05em]">
            Modern Estetik <br />
            <span className="text-[#E5C99F] italic">Bakım</span> İçin <br />
            <span className="relative inline-block">
              Adres
              <div className="absolute bottom-2 left-0 w-full h-[1px] bg-[#E5C99F]/30"></div>
            </span>
          </h3>

          <p className="mt-8 text-[17px] xl:text-[19px] font-light leading-relaxed text-gray-300 max-w-[500px]">
            Duru, yüz düzeltme, vücut şekillendirme ve rejeneratif, ameliyatsız
            tedaviler konusunda uzmanlaşmış, doktorlar tarafından yönetilen bir
            estetik kliniğidir.
          </p>

          {/* Ekstra Genişletme: Küçük İkonlu Maddeler */}
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 max-w-[500px]">
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
                Doğal uyum ve uzun vadeli estetik gelişim.{" "}
              </p>
            </div>
          </div>

          {/* Buton Alanı */}
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-[#c92a45] overflow-hidden rounded-full ">
              Uzmanımızla Tanışın{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
