import GoogleIcon from "@/assets/svgs/GoogleIcon";
import Container from "@/components/atoms/Container";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <Container className="min-h-[70vh] flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign In</h2>
          {/* <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="Enter email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="password"
              type="Password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
            />
            <Link href="#">Forgot password?</Link>
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </form> */}
          <button
            className="btn btn-outline btn-primary w-full"
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builder-client-three.vercel.app",
              })
            }
          >
            <GoogleIcon /> Sign in with Google
          </button>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="sign-up" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

SignInPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};

export default SignInPage;
