"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Bot,
  ClipboardList,
  CopyX,
  MessagesSquare,
  Radio,
  TvMinimal,
} from "lucide-react";

type TFunctionalities = {
  id: number;
  description: string;
  icon: JSX.Element;
  details: {
    text: string;
  };
}[];

export default function Home() {
  const [showFunct, setshowFunct] = useState<Number>(1);
  const functionalites: TFunctionalities = [
    {
      id: 1,
      description: "Verification",
      icon: <TvMinimal size={24} strokeWidth={2.25} />,
      details: {
        text: "Lorem ipsum dolor sit.",
      },
    },
    {
      id: 2,
      description: "Activities",
      icon: <ClipboardList size={24} strokeWidth={2.25} />,
      details: {
        text: "Lorem ipsum dolor sit.",
      },
    },
    {
      id: 3,
      description: "Bot",
      icon: <Bot size={24} strokeWidth={2.25} />,
      details: {
        text: "Lorem ipsum dolor sit.",
      },
    },
    {
      id: 4,
      description: "Ant-Copy",
      icon: <CopyX size={24} strokeWidth={2.25} />,
      details: {
        text: "Lorem ipsum dolor sit.",
      },
    },
  ];
  return (
    <>
      <section className="grid p-4 grid-flow-row w-full gap-8">
        <section className="flex flex-col items-center h-full col-span-1 gap-8 ">
          <div className="bg-cyan-100/60 shadow-xl rounded-2xl p-4 flex items-center justify-center gap-4 max-w-[900px]">
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
              <Link
                className="mx-auto md:mx-0 w-fit bg-mainBgButton p-2 rounded-xl text-lg md:text-xl text-white"
                href={"/interface"}
              >
                Start a tutorial
              </Link>
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
      <section>
        <ol className="flex mx-auto w-fit gap-10">
          {functionalites.map((functi, i) => {
            return (
              <button
                key={i}
                onClick={() => setshowFunct(functi.id)}
                className={`${
                  functi.id === showFunct
                    ? "border-mainBgButton bg-mainBgButton bg-opacity-[100%] text-white"
                    : ""
                }
                  p-4 h-24 text-xl flex flex-col 
                  gap-2 w-48 rounded-xl border-mainBgButton hover:border-mbg-mainBgButton border-2 bg-mainBgButton bg-opacity-[0%]
                  transition-all ease duration-500 hover:text-white hover:bg-opacity-[100%]
                  items-start justify-center font-bold
                `}
              >
                {functi.icon}
                {functi.description}
              </button>
            );
          })}
        </ol>
      </section>
      <section className="flex flex-col items-end justify-center bg-gray-950 mx-auto max-w-[900px] h-[500px] p-2 rounded-2xl">
        <div className="flex items-center mx-auto w-[98%] mb-0.5">
          <span className="flex gap-2">
            <p className="bg-red-500 rounded-full w-2 h-2"></p>
            <p className="bg-green-500 rounded-full w-2 h-2"></p>
            <p className="bg-yellow-500 rounded-full w-2 h-2"></p>
          </span>
          <Radio size={22} className="icone ml-auto" />
        </div>
        {functionalites
          .filter((item) => item.id === showFunct)
          .map((item, i) => (
            <div
              key={i}
              className="relative p-2 w-full h-full bg-white rounded-2xl"
            >
              <div className="absolute flex flex-col justify-center top-0 left-0 w-fit p-4 h-20 border-b border-r rounded-br-2xl text-lg border-gray-800 ">
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur poulr.
                </p>
                <span className="flex items-center gap-2 text-lg">
                  <MessagesSquare size={20} strokeWidth={2} />
                  {item.details.text}
                </span>
              </div>
            </div>
          ))}
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
