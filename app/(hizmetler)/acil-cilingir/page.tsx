import type { Metadata } from "next";
import { Zap, AlertCircle, PhoneCall, Timer } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { PHONE_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";

export const metadata: Metadata = {
  title: "Esenyurt Acil Çilingir | 15 Dakikada Kapınızda",
  description: "Esenyurt ve çevre bölgelerde acil çilingir mi lazım? 7/24 nöbetçi çilingir ekibimizle ortalama 15-20 dakikada adresinizdeyiz. Hemen arayın!",
};

export default function AcilCilingirPage() {
  return (
    <ServicePageTemplate
      title="Esenyurt Acil Çilingir — 15 Dakikada Kapınızda"
      description="Gecenin bir yarısı kapıda mı kaldınız? Ocağın üstünde yemek mi unuttunuz? Panik yapmayın! 7/24 aktif nöbetçi çilingir ağımızla Esenyurt, Avcılar ve Beylikdüzü bölgelerinde size en yakın ustamızı anında konumunuza yönlendiriyoruz."
      icon={<Zap size={32} />}
      features={[
        "Nöbetçi Çilingir",
        "Gece Kapı Açma",
        "Pazar Günü Açık Çilingir",
        "Bayramda Açık Çilingir",
      ]}
      faqs={[
        {
          q: "Şu an arasam ne zaman gelirsiniz?",
          a: "Motosikletli ve tam donanımlı mobil araçlarımız sayesinde, aramanızın ardından trafiğe takılmadan en kısa sürede (ortalama 15 dakika) yanınızda oluyoruz."
        },
        {
          q: "Gece tarifesi uyguluyor musunuz?",
          a: "Evet, gece saatlerinde standart ücrete nöbetçi çilingir tarifesi eklenmektedir. Ancak telefonda adresinizi verdikten sonra her zaman net bir fiyat alırsınız, sürpriz ücretlerle karşılaşmazsınız."
        },
        {
          q: "Kapı kilitliyken kapıyı kırmanız gerekir mi?",
          a: "Kapınız kilitliyken (üzerine birkaç kez kitlenmişse) maalesef kilidin (barelin) kırılarak açılması mecburidir. Ancak kapının ahşap veya çelik yüzeyine kesinlikle bir zarar verilmez."
        }
      ]}
      relatedServices={[
        { name: "Kapı Açma", href: "/kapi-acma" },
        { name: "Oto Çilingir", href: "/oto-cilingir" },
        { name: "Kilit Değişimi", href: "/kilit-degisimi" }
      ]}
      slug="acil-cilingir"
    >
      {/* ── URGENT SECTION ── */}
      <div className="bg-gradient-to-r from-red-600/20 to-amber-600/20 border border-red-500/50 rounded-2xl p-6 sm:p-8 mb-16 relative overflow-hidden">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-red-400 font-bold mb-3 uppercase tracking-wider text-sm">
              <AlertCircle size={18} className="animate-bounce" />
              Acil Durum Bildirimi
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Şu an kaç dakikada geliriz?
            </h2>
            <div className="flex items-center gap-3 text-lg text-slate-200 bg-black/40 p-4 rounded-xl border border-white/10 w-fit">
              <Timer className="text-amber-400" size={24} />
              Tahmini Varış Süresi: <span className="font-bold text-amber-400 text-xl">15 - 20 Dakika</span>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <a 
              href={PHONE_URL}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-xl transition-all shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:scale-105"
            >
              <PhoneCall size={24} className="animate-pulse" />
              {PHONE_DISPLAY}
            </a>
            <p className="text-center text-sm text-red-200/60 mt-3 font-medium">
              Konumunuzu bildirin, hemen yola çıkalım.
            </p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
