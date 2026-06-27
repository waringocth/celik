import type { Metadata } from "next";
import { DoorOpen } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Kapı Açma Hizmeti | Çelik Çilingir",
  description: "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'de 7/24 kapı açma hizmeti. Kilitli kalan kapılarınızı hasarsız ve garantili şekilde 15 dakikada açıyoruz.",
};

export default function KapiAcmaPage() {
  return (
    <ServicePageTemplate
      title="Kapı Açma Hizmeti — 7/24 Acil Çilingir"
      description="Anahtarınızı mı unuttunuz veya kapınız mı kilitli kaldı? Profesyonel ekibimizle kapınıza ve kilidinize hiçbir zarar vermeden, özel maymuncuk sistemleriyle kapı açma hizmeti sunuyoruz. 7/24 gezici servis araçlarımızla ortalama 15-20 dakika içinde adresinizdeyiz."
      icon={<DoorOpen size={32} />}
      features={[
        "Kapı Açma",
        "Kilidi Zorlamadan Açma",
        "Çift Kilitli Kapı Açma",
        "Bina Kapısı Açma",
      ]}
      faqs={[
        {
          q: "Kapı açılırken kilit zarar görür mü?",
          a: "Hayır. Çekili kapılarda (kilitli olmayan) sadece kapı dili düşürülerek açılır ve hiçbir zarar görmez. Çift kilitli kapılarda ise göbek (barel) kırılarak açılır ve sadece göbeğin değişmesi gerekir, kapınız kesinlikle zarar görmez."
        },
        {
          q: "Ne kadar sürede gelirsiniz?",
          a: "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'e ortalama varış süremiz trafik durumuna bağlı olarak 15 ile 20 dakika arasındadır."
        },
        {
          q: "Gece yarısı hizmet veriyor musunuz?",
          a: "Evet, 7 gün 24 saat kesintisiz nöbetçi çilingir hizmetimiz bulunmaktadır."
        }
      ]}
      relatedServices={[
        { name: "Kilit Değişimi", href: "/kilit-degisimi" },
        { name: "Acil Çilingir", href: "/acil-cilingir" },
        { name: "Oto Çilingir", href: "/oto-cilingir" }
      ]}
      slug="kapi-acma"
    />
  );
}
