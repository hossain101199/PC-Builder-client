import ProductCard from "@/components/atoms/ProductCard";
import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductsPage = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <h1 className="mb-5 text-5xl font-bold">
        {router.query.title ? `${router.query.title}` : "Products"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {products.data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;

  const productResponse = await fetch(
    ` https://pc-builder-service-hossain101199.vercel.app/api/v1/products?${
      query.category && `category=${query.category}`
    }`
  );
  const products = await productResponse.json();

  return { props: { products } };
};

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsPage;
