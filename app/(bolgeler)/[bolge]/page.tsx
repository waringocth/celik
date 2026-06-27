import { redirect } from "next/navigation";
import { regions } from "@/lib/data/regions";

export function generateStaticParams() {
  return regions.map((region) => ({
    bolge: region.slug,
  }));
}

export default function BolgeRedirectPage({ params }: { params: { bolge: string } }) {
  // Use a 301 redirect to the new cilingir page to preserve SEO.
  redirect(`/${params.bolge}/cilingir`);
}
