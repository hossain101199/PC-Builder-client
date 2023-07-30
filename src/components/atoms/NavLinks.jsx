import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="products">Products</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Categories </summary>
          <ul className="p-2 z-[1]">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="pc-builder">
          <button className="btn"> PC Builder</button>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
