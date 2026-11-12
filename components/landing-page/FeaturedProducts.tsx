import SectionHeader from "@/components/common/SectionHeader";
import { ArrowRightIcon, ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products/productsSelect";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "PartyKit",
//     description: "A toolkit for creating party products",
//     tags: ["SaaS", "pricing", "Global"],
//     vote: 661,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "NextJs Full-Stack Course",
//     description: "Learn to build beautifull production ready websites",
//     tags: ["Next.Js", "Full-Stack", "Course"],
//     vote: 550,
//     isFeatured: false,
//   },
// ];

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts()
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
