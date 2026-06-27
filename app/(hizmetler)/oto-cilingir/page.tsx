import type { Metadata } from "next";
import { Car } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Esenyurt Oto Çilingir | Araç Kapısı Açma — Çelik Çilingir",
  description: "Arabanızın kapısı mı kilitli kaldı? Esenyurt oto çilingir, kayıp oto anahtar, çipli anahtar kopyalama. Aracınıza zarar vermeden açıyoruz.",
};

export default function OtoCilingirPage() {
  return (
    <ServicePageTemplate
      title="Esenyurt Oto Çilingir — Araç Kapısı Açma"
      description="Anahtarı içinde unutulan veya tamamen kaybolan tüm marka ve model araçların kapılarını, özel oto çilingir maymuncukları (Lishi) kullanarak, çiziksiz ve hasarsız bir şekilde profesyonelce açıyoruz."
      icon={<Car size={32} />}
      features={[
        "Araba Kapısı Açma",
        "Kontak Kopyalama",
        "Çip Anahtar",
        "Oto Kilit Sistemi",
      ]}
      faqs={[
        {
          q: "Aracın kapısı açılırken boya çizilir mi veya kapı zarar görür mü?",
          a: "Kesinlikle hayır. Hava yastığı ve özel oto maymuncuk aletleri kullanarak arabanızın ne kaportasına ne de fitillerine hiçbir zarar vermeden işlemi gerçekleştiriyoruz."
        },
        {
          q: "Hangi marka araçları açabiliyorsunuz?",
          a: "Avrupa, Asya veya Amerikan üretimi olması fark etmeksizin; BMW, Mercedes, Audi, Volkswagen, Ford, Fiat, Renault dahil piyasadaki tüm marka ve model araçları açabilmekteyiz."
        },
        {
          q: "Araç anahtarını tamamen kaybettim, yenisini yapabilir misiniz?",
          a: "Evet. Aracınızın beynine (immobilizer) bağlanarak kaybolan anahtarları sistemden silip, sıfırdan çipli yeni bir anahtar kodlayıp teslim edebiliyoruz."
        }
      ]}
      relatedServices={[
        { name: "Acil Çilingir", href: "/acil-cilingir" },
        { name: "Kapı Açma", href: "/kapi-acma" },
        { name: "Kasa Açma", href: "/kasa-acma" }
      ]}
      slug="oto-cilingir"
    />
  );
}
