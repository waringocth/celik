export interface Review {
  id: string;
  name: string;
  district: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { 
    id: "r1",
    name: "Mehmet Y.", 
    district: "Esenyurt", 
    rating: 5, 
    text: "Gece 23:00'de kapım kilitli kaldı, 12 dakikada geldiler. Çok hızlı ve profesyonel bir ekip." 
  },
  { 
    id: "r2",
    name: "Fatma K.", 
    district: "Avcılar", 
    rating: 5, 
    text: "Kilit değişimi için aradım, aynı gün geldiler ve çok uygun fiyata yaptılar. Kesinlikle tavsiye ederim." 
  },
  { 
    id: "r3",
    name: "Ali R.", 
    district: "Beylikdüzü", 
    rating: 5, 
    text: "Arabamın anahtarı kırıldı içinde kaldı, oto çilingir servisleri çok başarılıydı." 
  },
  { 
    id: "r4",
    name: "Ayşe B.", 
    district: "Büyükçekmece", 
    rating: 5, 
    text: "7/24 hizmet verdikleri için çok memnunum. Kapı açma işlemini 5 dakikada hallettiler." 
  },
  { 
    id: "r5",
    name: "Hasan T.", 
    district: "Bahçeşehir", 
    rating: 5, 
    text: "Kasa kilidi bozulmuştu, çok titiz ve dikkatli bir şekilde açtılar. Hasar vermeden." 
  },
  { 
    id: "r6",
    name: "Elif S.", 
    district: "Esenyurt", 
    rating: 5, 
    text: "İkinci kez kullandım bu servisi. Her seferinde aynı kalite, güvenilir çilingirler." 
  }
];
