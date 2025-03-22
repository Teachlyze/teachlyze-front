import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-row p-6 h-fit w-full">
      <nav className="flex flex-row w-full justify-between font-bold">
        <Link href={"/"} className="text-2xl tracking-widest p-0 m-0">
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
          className="bg-black text-white p-2 rounded-3xl w-20 text-center h-fit"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
