import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  return (
    <>
      <section className="p-4 w-full max-w-[98%] mx-auto bg-purple-50">
        <section className="flex flex-col items-center h-full gap-12">
          <div className="bg-cyan-100/60 shadow-xl rounded-2xl p-4 flex max-md:flex-wrap items-center w-auto justify-center gap-4">
            <button
              type="button"
              className="flex flex-col bg-black text-white p-2 w-fit font-bold text-sm md:text-lg rounded-2xl"
            >
              <span>Menos tempo corrigindo,</span>
              <span>Mais tempo ensinando!</span>
            </button>
            <h4 className="text-sm md:text-lg mr-auto w-auto font-semibold max-w-[400px] mx-auto max-md:text-center text-start">
              Revolucione seu ensino com automação inteligente e insights
              avançados da Teachlyze.
            </h4>
          </div>
          <div className="grid grid-cols-2 p-2 lg:text-start">
            <div className="max-lg:col-span-2 col-span-1">
              <h1 className="text-black text-2xl lg:text-3xl font-bold w-full">
                Automação e inteligência para revolucionar a rotina dos
                professores.
              </h1>
              <p className="text-gray-600 font-bold text-lg lg:text-lg mx-auto mb-2 mt-4">
                A Teachlyze simplifica sua vida docente com correção automática
                de atividades, gestão de turmas e análise de desempenho baseada
                em IA. Concentre-se no que realmente importa:
              </p>
              <Link
                className="p-2 rounded-lg text-lg ml-auto uppercase font-bold bg-mainBgButton text-white"
                href={"/interface"}
              >
                ensinar!
              </Link>
            </div>
            <Image
              src="https://fast.image.delivery/tavvdre.jpg"
              className="hidden lg:block rounded-2xl ml-auto lg:col-span-1"
              alt="professora ministrando aula"
              width={500}
              height={300}
              sizes="100vw"
              style={{ objectFit: "cover", width: "80%", height: "auto" }}
            ></Image>
          </div>
          <section className="relative max-w-[600px] w-full bg-gray-800/80 backdrop-blur-md p-4 lg:text-xl text-mainBgButton rounded-xl border border-black shadow-lg">
            <div className="absolute top-8 left-0 w-20 h-20 bg-black rounded-br-full -z-10 opacity-40"></div>
            <p>1234 Professores online</p>
            <p>400 Alunos online</p>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-red-800 rounded-lg -z-10 opacity-40"></div>
          </section>
          <section className="bg-cyan-100/60 shadow-xl text-start p-2 rounded-xl space-y-4 w-full h-fit mx-auto">
            <h3 className="text-2xl">Lorem ipsum dolor sit.</h3>
            <div className="text-lg grid grid-cols-1">
              <p className="col-span-1 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque illo autem sit tempora ex nesciunt natus debitis
                voluptatibus possimus quam cupiditate quibusdam placeat quod qui
                obcaecati mollitia voluptate perspiciatis doloribus, minus
                sapiente. Ad rerum dolorem numquam. In excepturi suscipit, nemo
                iste unde quisquam dolor accusantium corporis modi eveniet
                recusandae provident!
              </p>
            </div>
          </section>
        </section>
      </section>
      {/* <section>
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
          <span className="w-20"></span>
        </section>
      </footer> */}
    </>
  );
}
