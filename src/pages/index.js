import CategoryCard from "@/components/atoms/CategoryCard";
import Container from "@/components/atoms/Container";
import Hero from "@/components/atoms/Hero";
import ProductCard from "@/components/atoms/ProductCard";
import Spinner from "@/components/atoms/Spinner";

import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Spinner />
      <h1 className="mb-5 text-5xl font-bold">Featured Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <ProductCard key={product} />
        ))}
      </div>

      <h1 className="mb-5 text-5xl font-bold">Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <CategoryCard key={product} />
        ))}
      </div>
    </>
  );
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
