import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import EmergencyBanner from "@/components/ui/EmergencyBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://celikcilingir.com"), // Production domain
  title: {
    default: "Çelik Çilingir | 7/24 Profesyonel Çilingir Hizmeti İstanbul",
    template: "%s | Çelik Çilingir",
  },
  description:
    "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir'de 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Ortalama 20 dk'da kapınızdayız.",
  keywords: [
    "çilingir",
    "istanbul çilingir",
    "esenyurt çilingir",
    "avcılar çilingir",
    "beylikdüzü çilingir",
    "kapı açma",
    "kilit değişimi",
    "oto çilingir",
    "acil çilingir",
    "7/24 çilingir",
  ],
  authors: [{ name: "Çelik Çilingir" }],
  creator: "Çelik Çilingir",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Çelik Çilingir",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9WPP73X');`,
          }}
        />

        {/* Google Ads Conversion Tracking (gtag.js) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXX');
            `,
          }}
        /> */}
      </head>
      {/* pb-16 on mobile to clear the fixed bottom CTA bar; md:pb-0 on desktop */}
      <body className="antialiased pb-16 md:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9WPP73X"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <div className="sticky top-0 z-50 w-full flex flex-col">
          <EmergencyBanner />
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
