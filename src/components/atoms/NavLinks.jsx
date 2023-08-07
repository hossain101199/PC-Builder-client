import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const { categoryList } = useSelector((state) => state.categories);
  const { data: session } = useSession();
  return (
    <>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Categories </summary>
          <ul className="p-2 z-[1]">
            {categoryList?.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products?category=${category.id}&title=${category.title}`}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      {session?.user && (
        <li>
          <Link href="/pc-builder">
            <button className="btn"> PC Builder</button>
          </Link>
        </li>
      )}
    </>
  );
};

export default NavLinks;
