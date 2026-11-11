import React from "react";
import SectionHeader from "../common/SectionHeader";
import { CalendarIcon, RocketIcon } from "lucide-react";
import ProductCard from "../products/ProductCard";
import EmptyState from "../common/EmptyState";

const recentlyLaunchedProducts = [
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
];

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState message="no products lanuched in this last week. come back soon for new launches" icon={CalendarIcon} />
        )}
      </div>
    </section>
  ); 
}
