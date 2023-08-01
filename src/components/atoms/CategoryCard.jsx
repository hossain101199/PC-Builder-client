import Link from "next/link";
import defaultImage from "../../assets/images/default-image.jpg";

const CategoryCard = () => {
  return (
    <Link href="/products?category=category">
      <div
        style={{
          backgroundImage: `url(${defaultImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-base-100 shadow-xl border-2 rounded-lg w-full overflow-hidden"
      >
        <div className="bg-black opacity-50 p-4 min-h-[300px] flex justify-center items-center">
          <h2 className="text-primary">Category name</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
