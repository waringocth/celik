import type { Metadata } from "next";
import { Lock } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Kilit Değişimi Hizmeti | Çelik Çilingir",
  description: "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'de çelik kapı kilit değişimi, barel ve göbek değişimi. Yüksek güvenlikli tuzaklı ve alarmlı yeni nesil kilit montajı.",
};

export default function KilitDegisimiPage() {
  return (
    <ServicePageTemplate
      title="Kilit Değişimi Hizmeti — Güvenli & Hızlı"
      description="Eski, yıpranmış veya güvenliğinden şüphe duyduğunuz kilitlerinizi, yüksek güvenlikli, tuzaklı ve maymuncukla açılmayan yeni nesil kilitlerle değiştiriyoruz. Taşındığınız yeni evin veya ofisin kilitlerini değiştirmek, güvenliğiniz için atacağınız en önemli adımdır."
      icon={<Lock size={32} />}
      features={[
        "Yale Kilit",
        "Çelik Kapı Kilidi",
        "Kapı Göbeği",
        "Barel Değişimi",
      ]}
      faqs={[
        {
          q: "Hangi marka kilitleri kullanıyorsunuz?",
          a: "Kale Kilit, Yale, İto, Yuma ve Hok gibi sektörün en güvenilir, garantili ve TSE belgeli kilit markalarını kullanıyoruz."
        },
        {
          q: "Tuzaklı kilit nedir?",
          a: "Tuzaklı kilitler (bareller), hırsızların kilidi kırmaya çalışması durumunda sadece ön kısmının kırılarak ana mekanizmanın içeride kalmasını ve kapının açılmasını engelleyen yüksek güvenlikli sistemlerdir."
        },
        {
          q: "Kilit değiştirme işlemi ne kadar sürer?",
          a: "Standart çelik kapı göbek (barel) değişimi işlemi uzman ekiplerimiz tarafından ortalama 10-15 dakika içerisinde tamamlanmaktadır."
        }
      ]}
      relatedServices={[
        { name: "Kapı Açma", href: "/kapi-acma" },
        { name: "Kasa Açma", href: "/kasa-acma" },
        { name: "Acil Çilingir", href: "/acil-cilingir" }
      ]}
      slug="kilit-degisimi"
    />
  );
}
