import Hero from "@/components/atoms/Hero";
import RootLayout from "@/layout/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div>6 random PC components</div>
      <div>Categories </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
