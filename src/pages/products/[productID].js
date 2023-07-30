import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  return <div>id: {router.query.productID}</div>;
};

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetailPage;
