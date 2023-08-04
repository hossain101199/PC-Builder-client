import CategoryCard from "@/components/atoms/CategoryCard";
import Container from "@/components/atoms/Container";
import Hero from "@/components/atoms/Hero";
import ProductCard from "@/components/atoms/ProductCard";
import Spinner from "@/components/atoms/Spinner";

import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React from "react";

const HomePage = ({ products, categories }) => {
  return (
    <>
      <h1 className="mb-5 text-5xl font-bold">Featured Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        {products.data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <h1 className="mb-5 text-5xl font-bold">Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        {categories.data.map((category) => (
          <CategoryCard key={category.id} data={category} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const productResponse = await fetch(
    "https://pc-builder-service-hossain101199.vercel.app/api/v1/products?isFeatured=true"
  );
  const products = await productResponse.json();

  const categoryResponse = await fetch(
    "https://pc-builder-service-hossain101199.vercel.app/api/v1/categories"
  );
  const categories = await categoryResponse.json();
  return { props: { products, categories } };
};

HomePage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>{page}</Container>
      <Footer />
    </>
  );
};

export default HomePage;
