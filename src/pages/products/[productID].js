import RootLayout from "@/layout/RootLayout";
import Image from "next/image";
import React from "react";
import defaultImage from "../../assets/images/default-image.jpg";
import StarIcon from "@/assets/svgs/StarIcon";
import ProductReviews from "@/components/atoms/ProductReviews";

const ProductDetailPage = ({ product, reviews }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg w-full bg-base-100 shadow-xl overflow-hidden grid lg:grid-cols-2">
        <Image
          src={defaultImage}
          alt="Product image"
          className="w-full object-cover"
        />
        <div className="p-4 flex flex-col justify-center gap-2">
          <h2 className="card-title">{product?.title}</h2>
          <p>Category: {product?.category.title}</p>
          <p>Description: {product?.description}</p>
          {product?.keyFeatures?.map((feature) => (
            <p key={feature.id}>
              <span>{feature.key}</span>: <span>{feature.value}</span>
            </p>
          ))}
          <div className="flex items-center w-fit">
            {[...Array(Math.round(product?.rating))].map((_, index) => (
              <StarIcon key={index} />
            ))}{" "}
            {product?.rating}
          </div>
          <div className="flex items-center gap-2 w-fit">
            <p>$ {product?.price} </p> <p>({product?.status})</p>
          </div>
        </div>
      </div>

      <h1 className="mb-5 text-5xl font-bold">Reviews & Ratings</h1>
      {reviews?.map((review) => (
        <ProductReviews key={review.id} data={review} />
      ))}
    </div>
  );
};

export const getStaticPaths = async () => {
  const productResponse = await fetch(
    "https://pc-builder-service-hossain101199.vercel.app/api/v1/products"
  );

  const products = await productResponse.json();

  const paths = await products?.data?.map((product) => ({
    params: { productID: product.id },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productResponse = await fetch(
    `https://pc-builder-service-hossain101199.vercel.app/api/v1/products/${params?.productID}`
  );
  const product = (await productResponse.json())?.data;

  const reviewsResponse = await fetch(
    `https://pc-builder-service-hossain101199.vercel.app/api/v1/reviews/${params?.productID}`
  );
  const reviews = (await reviewsResponse.json())?.data;

  return { props: { product, reviews }, revalidate: 10 };
};

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetailPage;
