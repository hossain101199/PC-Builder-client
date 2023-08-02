import StarIcon from "@/assets/svgs/StarIcon";
import { useRouter } from "next/router";
import React from "react";

const ProductReviews = () => {
  const router = useRouter();

  return (
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
  );
};

export default ProductReviews;
