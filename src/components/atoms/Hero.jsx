import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Custom Build. Power Unleashed.
          </h1>
          <p className="mb-5">
            Welcome to our PC Builder website, where you have the power to
            create your dream PC! Whether you&apos;re a hardcore gamer, a
            content creator, or a tech enthusiast, our PC Builder tool empowers
            you to handpick the best components and build a high-performance
            machine tailored to your needs.
          </p>
          <Link href="pc-builder">
            <button className="btn btn-primary">
              Build Your Dream PC with Our PC Builder!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
