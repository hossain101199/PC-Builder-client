import ProductCard from "@/components/atoms/ProductCard";
import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const Products = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="mb-5 text-5xl font-bold">
        {router.query.category ? `${router.query.category}` : "Products"}
      </h1>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <ProductCard key={product} isPcBuilder />
        ))}
      </div>
    </>
  );
};

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Products;
