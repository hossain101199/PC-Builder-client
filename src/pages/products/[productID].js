import RootLayout from "@/layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import defaultImage from "../../assets/images/default-image.jpg";
import StarIcon from "@/assets/svgs/StarIcon";

const ProductDetailPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg w-full bg-base-100 shadow-xl overflow-hidden grid lg:grid-cols-2">
        <Image
          src={defaultImage}
          alt="Product image"
          className="w-full object-cover"
        />
        <div className="p-4 flex flex-col justify-center gap-2">
          <h2 className="card-title">Name: {router.query.productID}</h2>
          <p>Category: </p>
          <p>Description: </p>
          <p>Key Features: </p>

          <div className="flex items-center w-fit">
            {[...Array(Math.round(3.1))].map((_, index) => (
              <StarIcon key={index} />
            ))}{" "}
            4.5
          </div>
          <div className="flex items-center w-fit">
            <p>$ 85</p> <p>(Status)</p>
          </div>
        </div>
      </div>

      <h1 className="mb-5 text-5xl font-bold">Reviews & Ratings</h1>

      <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden">
        <div className="flex justify-between">
          <h2 className="card-title">Name: {router.query.productID}</h2>
          <div className="flex items-center w-fit">
            {[...Array(Math.round(3.1))].map((_, index) => (
              <StarIcon key={index} />
            ))}{" "}
            4.5
          </div>
        </div>
        <p>Description: </p>
      </div>
    </div>
  );
};

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetailPage;
