import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductsPage = () => {
  const router = useRouter();
  console.log(router.query.search);
  return <>ProductsPage</>;
};

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsPage;
