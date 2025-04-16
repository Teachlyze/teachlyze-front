"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex p-2 h-fit w-full bg-black">
      <nav className="flex flex-row w-full justify-between font-bold">
        <Link href={"/"} className="hover:text-mainBgButton transition-colors duration-300 ease-in-out text-2xl tracking-widest text-white">
          TEACH<span className="text-mainBgButton">L</span>YZE
        </Link>
        <ul className="max-sm:hidden flex items-center flex-row gap-8 text-mainText">
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
