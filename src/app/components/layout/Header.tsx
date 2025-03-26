"use client";
import { useUrl } from "@/context/useUrl";
import Link from "next/link";
export default function Header() {
  const url = useUrl();
  return (
    <header className="flex p-4 h-fit w-full bg-black">
      <nav className="flex flex-row w-full justify-between font-bold">
        <Link href={"/"} className="text-2xl tracking-widest text-white">
          TEACH<span className="text-mainBgButton">L</span>YZE
        </Link>
        <ul className="hidden md:visible md:flex items-center flex-row gap-8">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Services</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <Link
          href={"/"}
          className="bg-black text-white p-2 rounded-3xl w-fit text-center h-fit"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
