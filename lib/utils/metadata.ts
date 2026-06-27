// lib/utils/metadata.ts
import type { Metadata } from "next";

const SITE_NAME = "Çelik Çilingir";
const SITE_URL = "https://celikcilingir.com";

const DEFAULT_DESCRIPTION =
  "Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece ve Bahçeşehir bölgelerinde 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir ve daha fazlası.";

export function generateSiteMetadata(
  title?: string,
  description?: string,
  path?: string
): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | 7/24 Profesyonel Çilingir Hizmeti`;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = `${SITE_URL}${path || ""}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateServiceMetadata(
  serviceTitle: string,
  serviceDescription: string,
  slug: string
): Metadata {
  return generateSiteMetadata(
    serviceTitle,
    serviceDescription,
    `/hizmetler/${slug}`
  );
}

export function generateDistrictMeta(district: string, neighborhood?: string, bolgeSlug?: string, mahalleSlug?: string): Metadata {
  const title = neighborhood
    ? `${neighborhood} Çilingir | 7/24 ${district} Çilingir Hizmeti`
    : `${district} Çilingir | 7/24 Acil Çilingir Hizmeti`;

  const description = neighborhood
    ? `${district} ${neighborhood} mahallesinde 7/24 acil çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Hemen arayın!`
    : `${district} ve çevre mahallelerde 7/24 kesintisiz çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Hemen arayın!`;

  const pageUrl = neighborhood
    ? `${SITE_URL}/${bolgeSlug}/${mahalleSlug}`
    : `${SITE_URL}/${bolgeSlug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export const PHONE_NUMBER = "05321234567";
export const PHONE_DISPLAY = "0532 123 45 67";
export const WHATSAPP_NUMBER = "905321234567";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba,%20çilingir%20hizmetiniz%20hakkında%20bilgi%20almak%20istiyorum.`;
export const PHONE_URL = `tel:${PHONE_NUMBER}`;
