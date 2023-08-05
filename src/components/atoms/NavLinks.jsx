import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Categories </summary>
          <ul className="p-2 z-[1]">
            {[1, 2, 3, 4, 5, 6].map((category) => (
              <li key={category}>
                <Link href={`/products?category=${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <Link href="/pc-builder">
          <button className="btn"> PC Builder</button>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
