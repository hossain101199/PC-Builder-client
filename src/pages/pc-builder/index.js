import RootLayout from "@/layout/RootLayout";
import React from "react";
import CategoryCard from "@/components/atoms/CategoryCard";
import ProductCard from "@/components/atoms/ProductCard";

const PcBuilderPage = ({ categories }) => {
  return (
    <>
      {categories.data.map((category) => (
        <CategoryCard isPcBuilder key={category.id} data={category} />
      ))}

      <ProductCard isSelected />
    </>
  );
};

export const getStaticProps = async () => {
  const categoryResponse = await fetch(
    "https://pc-builder-service-hossain101199.vercel.app/api/v1/categories"
  );
  const categories = await categoryResponse.json();

  return { props: { categories } };
};

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderPage;
