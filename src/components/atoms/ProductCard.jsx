import Image from "next/image";
import React from "react";
import defaultImage from "../../assets/images/default-image.jpg";
import StarIcon from "@/assets/svgs/StarIcon";
import Link from "next/link";

const ProductCard = ({ isPcBuilder = false, isSelected = false }) => {
  return isPcBuilder ? (
    <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={defaultImage}
          alt="Product image"
          className="h-[80px] w-[80px] object-cover"
        />
        <div>
          <h2 className="font-semibold text-xl">Name: </h2>
          <p>Key Features: </p>
          <div className="flex items-center w-fit">
            <StarIcon /> 4.5
          </div>
          <div className="flex items-center w-fit">
            <p>$ 85 (Status)</p>
          </div>
        </div>
      </div>

      <button className="btn btn-outline btn-secondary">Add</button>
    </div>
  ) : isSelected ? (
    <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={defaultImage}
          alt="Product image"
          className="h-[80px] w-[80px] object-cover"
        />
        <div>
          <h2 className="font-semibold text-xl">Name: </h2>
          <p>Key Features: </p>
          <div className="flex items-center w-fit">
            <p>$ 85 </p>
          </div>
        </div>
      </div>

      <button className="btn btn-outline btn-secondary">X</button>
    </div>
  ) : (
    <Link href="/products/id">
      <div className="rounded-lg w-full bg-base-100 shadow-xl overflow-hidden">
        <Image
          src={defaultImage}
          alt="Product image"
          className="h-[250px] w-full object-cover"
        />
        <div className="card-body">
          <h2 className="card-title">Name</h2>
          <p>Category: </p>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center w-fit">
              <StarIcon /> <p>4.5</p>
            </div>
            <div className="flex items-center w-fit">
              <p>$ 85</p> <p>(Status)</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
