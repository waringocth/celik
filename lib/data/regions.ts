export const regions = [
  {
    slug: "esenyurt",
    name: "Esenyurt",
    title: "Esenyurt Çilingir",
    description: "Esenyurt'un her mahallesinde 7/24 çilingir hizmeti",
    neighborhoods: [
      "Ardıçlı", "Cumhuriyet", "Fatih", "Güzelyurt", "Mehterçeşme",
      "Mimarsinan", "Namık Kemal", "Pınar", "Talatpaşa", "Atatürk",
      "Yenikent", "Kıraç", "Sultanmurat", "Akevler"
    ]
  },
  {
    slug: "avcilar",
    name: "Avcılar", 
    title: "Avcılar Çilingir",
    description: "Avcılar'ın tüm mahallelerinde acil çilingir",
    neighborhoods: [
      "Ambarlı", "Cihangir", "Denizköşkler", "Firuzköy", "Gümüşpala",
      "Merkez", "Murat", "Tahtakale", "Üniversite"
    ]
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    title: "Beylikdüzü Çilingir",
    description: "Beylikdüzü'nde hızlı ve güvenilir çilingir hizmeti",
    neighborhoods: [
      "Adnan Kahveci", "Barış", "Büyükşehir", "Cumhuriyet", "Dereağzı",
      "Güzelyurt", "Kavaklar", "Marmara", "Sahil", "Yakuplu"
    ]
  },
  {
    slug: "buyukcekmecea",
    name: "Büyükçekmece",
    title: "Büyükçekmece Çilingir",
    description: "Büyükçekmece genelinde 7/24 çilingir",
    neighborhoods: [
      "Alkent", "Bahçelievler", "Fatih", "Gürpınar", "Kıraç",
      "Mimaroba", "Piri Mehmet Paşa", "Tepecik"
    ]
  },
  {
    slug: "bahcesehir",
    name: "Bahçeşehir",
    title: "Bahçeşehir Çilingir",
    description: "Bahçeşehir'de profesyonel çilingir hizmeti",
    neighborhoods: [
      "Bahçeşehir 1. Kısım", "Bahçeşehir 2. Kısım"
    ]
  }
];

// Helper function to slugify neighborhood names
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
