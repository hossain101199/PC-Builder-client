import RootLayout from "@/layout/RootLayout";
import React from "react";

const ProductsPage = () => {
  return <>ProductsPage</>;
};

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsPage;
