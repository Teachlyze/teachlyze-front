"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  const functionalites: { description: string; video: string }[] = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      video: "videoTest.mp4",
    },
    {
      description: "Lorem ipsum dolor sit amet",
      video: "videoTest.mp4",
    },
    {
      description: "Lorem ipsum dolor ",
      video: "videoTest.mp4",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod?",
      video: "videoTest.mp4",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod?",
      video: "videoTest.mp4",
    },
  ];
  return (
    <>
      <section className="grid p-4 grid-flow-row w-full gap-8">
        <section className="flex flex-col items-center h-full col-span-1 gap-8 ">
          <div className="bg-cyan-100/40 rounded-2xl p-2 flex items-center justify-center gap-4 max-w-[600px]">
            <button
              type="button"
              className="bg-black text-white  w-fit text-sm md:text-lg rounded-full"
            >
              Empowering Educators
            </button>
            <h4 className="text-sm md:text-lg w-full font-semibold text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quas,Lorem ipsum dolor sit amet. labore! Lorem, ipsum dolor sit
            </h4>
          </div>
          <div className="flex items-center md:items-center text-center md:text-start w-full gap-10">
            <div className="flex flex-col w-full gap-4 ">
              <h1 className="text-black text-4xl lg:text-5xl font-bold w-full">
                Streamline Your Yeaching Journey
              </h1>
              <p className="text-gray-600 font-bold text-lg lg:text-2xl mx-auto max-w-[500px] md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, facilis.
              </p>
              <Button
                type="button"
                className="mx-auto md:mx-0 w-fit bg-mainBgButton p-2 rounded-xl text-lg md:text-xl text-white"
              >
                Start a tutorial
              </Button>
            </div>
            <Image
              src="https://fast.image.delivery/tavvdre.jpg"
              className="hidden md:block rounded-2xl min-w-[300px] w-full max-w-[500px] "
              alt="professora ministrando aula"
              width={500}
              height={300}
              sizes="100vw"
              style={{ objectFit: "cover", width: "60%", height: "auto" }}
            ></Image>
          </div>
        </section>
      </section>
      <section className="bg-cyan-100/60 shadow-xl text-start p-2 rounded-xl space-y-4 w-[90%] max-w-[900px] mx-auto">
        <h3 className="text-2xl">Lorem ipsum dolor sit.</h3>
        <div className="text-lg grid grid-cols-1">
          <p className="col-span-1 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            illo autem sit tempora ex nesciunt natus debitis voluptatibus
            possimus quam cupiditate quibusdam placeat quod qui obcaecati
            mollitia voluptate perspiciatis doloribus, minus sapiente. Ad rerum
            dolorem numquam. In excepturi suscipit, nemo iste unde quisquam
            dolor accusantium corporis modi eveniet recusandae provident!
          </p>
        </div>
      </section>
      <section className="w-full space-y-4">
        <h2 className="font-semibold text-2xl mt-12 md:text-3xl tracking-wider">
          Funcionalidades
        </h2>
        <ul className="flex flex-wrap justify-center text-start font-bold gap-8 items-center w-full ">
          {functionalites.length > 0 &&
            functionalites.map((video, i) => (
              <li className="w-fit relative border-4 border-black" key={i}>
                <video
                  src={video.video}
                  className="max-h-80 w-full"
                  loop
                  autoPlay
                ></video>
                <p className="absolute bottom-0 left-0 p-2 w-full bg-black/40 text-white text-sm break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil maiores eveniet, ducimus fuga praesentium minima cum.
                </p>
              </li>
            ))}
        </ul>
      </section>
      <footer className="w-full flex-col p-4 bg-black text-white">
        <section className="flex flex-row w-full gap-40 mb-4">
          <ul className="space-y-2">
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Hostinger</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Github</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Contact Us</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Home</Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Hostinger</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Github</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Contact Us</Link>
            </li>
            <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-75 ease-in-out">
              <Link href="/#">Home</Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-row items-center justify-between w-full gap-4">
          <p className="text-sm tracking-widest">
            TEACH<span className="text-mainBgButton">L</span>YZE
          </p>
          <div className="flex text-sm items-center gap-4">
            <p className="">© 2021 TCC All rights reserved</p>
            <Link href={""} className="hover:text-mainBgButton">
              Terms
            </Link>
            <Link href={""} className="hover:text-mainBgButton">
              Privacy
            </Link>
            <Link href={""} className="hover:text-mainBgButton">
              Docs
            </Link>
          </div>
          <span className="w-20">{/* usado pra equilibrar o layout */}</span>
        </section>
      </footer>
    </>
  );
}
