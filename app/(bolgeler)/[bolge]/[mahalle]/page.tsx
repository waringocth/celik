import { redirect } from "next/navigation";
import { regions, slugify } from "@/lib/data/regions";

export function generateStaticParams() {
  const params: { bolge: string; mahalle: string }[] = [];
  regions.forEach((region) => {
    region.neighborhoods.forEach((mahalle) => {
      params.push({
        bolge: region.slug,
        mahalle: slugify(mahalle),
      });
    });
  });
  return params;
}

export default function MahalleRedirectPage({ params }: { params: { bolge: string; mahalle: string } }) {
  // Use a 301 redirect to the new cilingir page to preserve SEO.
  redirect(`/${params.bolge}/${params.mahalle}/cilingir`);
}
