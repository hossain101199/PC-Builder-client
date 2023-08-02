import RootLayout from "@/layout/RootLayout";
import React from "react";
import CategoryCard from "@/components/atoms/CategoryCard";
import ProductCard from "@/components/atoms/ProductCard";

const PcBuilderPage = () => {
  return (
    <>
      <CategoryCard isPcBuilder />
      <ProductCard isSelected />
    </>
  );
};

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderPage;
