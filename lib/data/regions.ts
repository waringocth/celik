export const regions = [
  {
    slug: "esenyurt",
    name: "Esenyurt",
    neighborhoods: [
      "Ardıçlı", "Cumhuriyet", "Fatih", "Güzelyurt", 
      "Mehterçeşme", "Mimarsinan", "Namık Kemal", "Pınar",
      "Talatpaşa", "Atatürk", "Yenikent", "Kıraç",
      "Sultanmurat", "Akevler"
    ]
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    neighborhoods: [
      "Ambarlı", "Cihangir", "Denizköşkler", "Firuzköy",
      "Gümüşpala", "Merkez", "Murat", "Tahtakale", "Üniversite"
    ]
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    neighborhoods: [
      "Adnan Kahveci", "Barış", "Büyükşehir", "Cumhuriyet",
      "Dereağzı", "Güzelyurt", "Kavaklar", "Marmara",
      "Sahil", "Yakuplu"
    ]
  },
  {
    slug: "buyukcekmecea",
    name: "Büyükçekmece",
    neighborhoods: [
      "Alkent", "Bahçelievler", "Fatih", "Gürpınar",
      "Kıraç", "Mimaroba", "Piri Mehmet Paşa", "Tepecik"
    ]
  },
  {
    slug: "bahcesehir",
    name: "Bahçeşehir",
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
