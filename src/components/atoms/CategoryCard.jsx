import Link from "next/link";
import defaultImage from "../../assets/images/default-image.jpg";
import Image from "next/image";

const CategoryCard = ({ isPcBuilder = false }) => {
  return isPcBuilder ? (
    <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={defaultImage}
          alt="Product image"
          className="h-[80px] w-[80px] object-cover"
        />
        <h2 className="card-title">Name: </h2>
      </div>
      <Link href="/pc-builder/products?category=hello">
        <button className="btn btn-outline btn-secondary">Choose</button>
      </Link>
    </div>
  ) : (
    <Link href="/products?category=category">
      <div
        style={{
          backgroundImage: `url(${defaultImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-base-100 shadow-xl rounded-lg w-full overflow-hidden"
      >
        <div className="bg-black opacity-50 p-4 min-h-[300px] flex justify-center items-center">
          <h2 className="text-primary">Category name</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
