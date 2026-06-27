// lib/data/services.ts
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  price: string;
  responseTime: string;
  available247: boolean;
}

export const services: Service[] = [
  {
    id: "kapi-acma",
    slug: "kapi-acma",
    title: "Kapı Açma Hizmeti",
    shortTitle: "Kapı Açma",
    description:
      "Kilitli kalan kapılarınızı zarar vermeden açıyoruz. 7/24 hizmet.",
    longDescription:
      "Anahtarınızı evde unuttunuz ya da kilidiniz bozuldu mu? Profesyonel ekibimiz, kapınızı herhangi bir hasar vermeden hızla açar. Modern ekipmanlarımız sayesinde hem ahşap hem de çelik kapılar için güvenli açma hizmeti sunuyoruz.",
    icon: "DoorOpen",
    features: [
      "Hasar vermeden açma",
      "Tüm kapı tipleri",
      "15-30 dk varış",
      "7/24 hizmet",
      "Uygun fiyat garantisi",
    ],
    price: "250₺'den başlayan fiyatlarla",
    responseTime: "15-30 dakika",
    available247: true,
  },
  {
    id: "kilit-degisimi",
    slug: "kilit-degisimi",
    title: "Kilit Değişimi Hizmeti",
    shortTitle: "Kilit Değişimi",
    description:
      "Güvenliğinizi artırmak için kilidinizi modern ve güvenli modellerle değiştiriyoruz.",
    longDescription:
      "Eski ya da bozuk kilitler evinizin güvenliğini tehdit eder. Kaliteli marka kilitleri uygun fiyata temin ederek profesyonel montajını yapıyoruz. Çeşitli kilit tipleri: Yale, Abloy, silindir kilit ve daha fazlası.",
    icon: "Lock",
    features: [
      "Markalı kilit seçenekleri",
      "Profesyonel montaj",
      "Garanti belgeli ürünler",
      "Aynı gün kurulum",
      "Ücretsiz danışmanlık",
    ],
    price: "350₺'den başlayan fiyatlarla",
    responseTime: "20-45 dakika",
    available247: true,
  },
  {
    id: "oto-cilingir",
    slug: "oto-cilingir",
    title: "Oto Çilingir Hizmeti",
    shortTitle: "Oto Çilingir",
    description:
      "Araç kilitleme sorunları için uzman oto çilingir hizmeti. Tüm araç markaları.",
    longDescription:
      "Arabanızın içinde anahtarınız kaldı ya da oto kilitleme sisteminiz bozuldu mu? Tüm araç markaları ve modelleri için uzman oto çilingir hizmetimizle yardımınıza koşuyoruz. Elektronik anahtar programlama ve immobilizer çözümleri.",
    icon: "Car",
    features: [
      "Tüm araç markaları",
      "Elektronik anahtar",
      "Immobilizer çözümü",
      "Anahtar kopyalama",
      "Acil yol yardımı",
    ],
    price: "400₺'den başlayan fiyatlarla",
    responseTime: "20-40 dakika",
    available247: true,
  },
  {
    id: "kasa-acma",
    slug: "kasa-acma",
    title: "Kasa Açma Hizmeti",
    shortTitle: "Kasa Açma",
    description:
      "Şifreli ve mekanik kasaları güvenle açıyoruz. Uzman ekibimiz yanınızda.",
    longDescription:
      "Unuttuğunuz kasa şifresi ya da bozulan kasa mekanizması için uzman kasa çilingir hizmetimiz devrede. Ev, ofis ve banka kasaları dahil tüm kasa tiplerini açıyoruz. Gizlilik ilkemizle hassas değerleriniz güvende.",
    icon: "Vault",
    features: [
      "Tüm kasa tipleri",
      "Şifre sıfırlama",
      "Mekanik onarım",
      "Gizlilik garantisi",
      "Sigorta belgeli hizmet",
    ],
    price: "500₺'den başlayan fiyatlarla",
    responseTime: "30-60 dakika",
    available247: false,
  },
  {
    id: "acil-cilingir",
    slug: "acil-cilingir",
    title: "Acil Çilingir Hizmeti",
    shortTitle: "Acil Çilingir",
    description:
      "7/24 acil çilingir hizmeti. Nerede olursanız olun 20 dakikada yanınızdayız.",
    longDescription:
      "Gece gündüz, tatil demeden acil çilingir ihtiyacınızda yanınızdayız. İstanbul genelinde geniş ekibimiz sayesinde ortalama 20 dakika içinde kapınızdayız. Hızlı, güvenilir ve uygun fiyatlı acil çilingir hizmeti.",
    icon: "Zap",
    features: [
      "7/24 kesintisiz hizmet",
      "20 dk ortalama varış",
      "Tüm İstanbul bölgeleri",
      "Deneyimli ekip",
      "Şeffaf fiyatlandırma",
    ],
    price: "300₺'den başlayan fiyatlarla",
    responseTime: "15-25 dakika",
    available247: true,
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
