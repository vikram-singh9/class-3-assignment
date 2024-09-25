"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
useRouter;
const Home = () => {
  const router = useRouter();
  return (
    <>
      <h1>Home</h1>
      <Link href={"/navbar"}>this is navbar</Link>
      <br />
      <Link href={"/about"}>this is about</Link>
      <br />
      <Link href={"/contacts"}>this is contacts</Link>
      <br />
      <Link href={"/footer"}>this is footer</Link>
      <br />

      <button onClick={() => router.push("/navbar")}> navbar</button>
      <br />
      <button onClick={() => router.push("/about")}>about</button>
      <br />
      <button onClick={() => router.push("/contacts")}>contact</button>
      <br />
      <button onClick={() => router.push("/footer")}>footer</button>
    </>
  );
};

export default Home;
