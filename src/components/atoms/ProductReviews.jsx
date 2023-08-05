import StarIcon from "@/assets/svgs/StarIcon";
import { useRouter } from "next/router";
import React from "react";

const ProductReviews = ({ data }) => {
  return (
    <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden">
      <div className="flex justify-between">
        <h2 className="card-title">{data.user}</h2>
        <div className="flex items-center w-fit">
          {[...Array(Math.round(data.rating))].map((_, index) => (
            <StarIcon key={index} />
          ))}{" "}
          {data.rating}
        </div>
      </div>
      <p>{data.comment} </p>
    </div>
  );
};

export default ProductReviews;
