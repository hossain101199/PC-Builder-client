import ProductCard from "@/components/atoms/ProductCard";
import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductsPage = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="mb-5 text-5xl font-bold">
        {router.query.title ? `${router.query.title}` : "Products"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <ProductCard key={product} />
        ))}
      </div>
    </>
  );
};

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsPage;
