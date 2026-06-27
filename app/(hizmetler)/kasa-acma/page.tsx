import type { Metadata } from "next";
import { Vault } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Esenyurt Kasa Açma | Çelik Kasa Çilingir — Çelik Çilingir",
  description: "Şifresi unutulmuş veya anahtarı kaybolmuş çelik kasalarınızı uzman ekipmanlarla hasarsız açıyoruz. Esenyurt kasa çilingir hizmeti.",
};

export default function KasaAcmaPage() {
  return (
    <ServicePageTemplate
      title="Esenyurt Kasa Açma Hizmeti"
      description="Anahtarı kaybolan, şifresi unutulan veya elektronik mekanizması arızalanan ev ve ofis tipi çelik kasalarınızı, profesyonel aletlerle mekanizmaya zarar vermeden, büyük bir gizlilik ve güvenilirlik içinde açıyoruz."
      icon={<Vault size={32} />}
      features={[
        "Şifreli Kasa",
        "Anahtarlı Kasa",
        "Elektronik Kasa",
        "Kasa Kodu Sıfırlama",
      ]}
      faqs={[
        {
          q: "Kasa açma işlemi sonrası kasamı tekrar kullanabilir miyim?",
          a: "Çoğu durumda evet. Profesyonel maymuncuk tekniklerimiz sayesinde kasanın ana gövdesine zarar verilmez. Sadece arızalı veya kayıp olan şifre/kilit mekanizması değiştirilerek kasanız eski güvenliğiyle kullanılmaya devam edilebilir."
        },
        {
          q: "Dijital şifreli kasaların şifresini kırabiliyor musunuz?",
          a: "Dijital (elektronik) şifreli kasalarda master reset veya acil durum anahtarı ile müdahale edilerek kasa açılır. Eğer sistem tamamen çökmüşse teknik müdahale ile açılım sağlanır."
        },
        {
          q: "Kasa açma işlemi için belge talep ediyor musunuz?",
          a: "Evet. Güvenlik ve yasal prosedürler gereği, açılacak kasanın size veya firmanıza ait olduğunu gösteren kimlik, vergi levhası veya fatura gibi belgeleri ibraz etmeniz zorunludur."
        }
      ]}
      relatedServices={[
        { name: "Kilit Değişimi", href: "/kilit-degisimi" },
        { name: "Kapı Açma", href: "/kapi-acma" },
        { name: "Oto Çilingir", href: "/oto-cilingir" }
      ]}
      slug="kasa-acma"
    />
  );
}
