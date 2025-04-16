"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpenCheck,
  Bot,
  ClipboardList,
  CopyX,
  MessagesSquare,
  Radio,
  TvMinimal,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFunctionalites } from "@/context/useUrl";
import { TFunctionalities } from "@/app/page";
import { Carousel } from "@/app/components/ui/Carousel";


type THomePageTemplateProps = {
    functionalites: TFunctionalities;
}
export default function HomePageTemplate(props: THomePageTemplateProps) {
  const opnions = useFunctionalites()
  const [showFunct, setshowFunct] = useState(1);
  const functionalites: TFunctionalities = [
    {
      description: "Gestão de atividades",
      icon: <CopyX size={32} />,
      id: 1,
      details: {
        text: "Criação e gerenciamento de atividades",
      },
    },
    {
      description: "Gestão de turmas",
      icon: <ClipboardList size={32} />,
      id: 2,
      details: {
        text: "Criação e administração de turmas e alunos",
      },
    },
    {
      description: "Upload de arquivos",
      icon: <Bot size={32} />,
      id: 3,
      details: {
        text: "Enviar ou baixar arquivos de atividades",
      },
    },
    {
      description: "Ant-cópia",
      icon: <Bot size={32} />,
      id: 4,
      details: {
        text: "Evita cópia de atividades",
      },
    },
  ];

  return (
    <>
    <section className="w-full mx-auto">
      <section className="flex flex-col items-center h-full gap-12 mt-4 p-4">
        <div className="max-md:hidden bg-cyan-100/60 border-2 border-gray-600 shadow-xl rounded-2xl p-4 flex max-md:flex-wrap items-center w-auto justify-center gap-4">
          <button
            type="button"
            className="flex flex-col bg-black text-white p-2 w-fit font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-2xl"
          >
            <span>Menos tempo corrigindo</span>
            <span>Mais tempo ensinando!</span>
          </button>
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-auto font-semibold max-w-[400px] mx-auto max-md:text-center text-start">
            Revolucione seu ensino com automação inteligente e insights
            avançados da Teachlyze.
          </h4>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 text-start">
          <div className="flex flex-col items-center justify-center max-lg:col-span-2 p-4 col-span-1 bg-white rounded-xl border-2 border-gray-600">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold w-full">
              Automação e inteligência para revolucionar a rotina dos
              professores.
            </h1>
            <p className="flex flex-col max-sm:items-start gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bold mx-auto mb-2 mt-4">
              A Teachlyze simplifica sua vida docente com correção automática de
              atividades, gestão de turmas e análise de desempenho baseada em
              IA. Concentre-se no que realmente importa:
              <Link
                className="flex animate-textShadow border-2 border-black relative gap-2 items-center p-2 w-fit overflow-hidden rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-mainBgButton text-white"
                href={"/interface"}
              >
                <BookOpenCheck strokeWidth={2} />
                ENSINAR
                <span className="absolute animate-glow inset-0 bg-white opacity-30 w-4 blur-xs rounded-sm"></span>
              </Link>
            </p>
          </div>
          <Image
            src="https://fast.image.delivery/tavvdre.jpg"
            className="hidden lg:block rounded-2xl ml-auto lg:col-span-1 border-gray-600"
            alt="professora ministrando aula"
            width={500}
            height={300}
            sizes="100vw"
            style={{ objectFit: "contain", width: "90%", height: "330px" }}
          ></Image>
        </div>
        <section
          className="relative
          flex items-center justify-center max-sm:flex-col min-w-[300px] text-sm sm:text-sm md:text-base 
          lg:text-xl text-white font-bold
          "
        >
          <div className="absolute bg-gradient-to-r from-purple-600 to-cyan-300 w-[102%] h-[105%] p-2 -z-10 rounded-xl"></div>
          <div className="bg-gray-600/40 flex flex-wrap items-center justify-center w-full rounded-xl p-2">  
            <div className="flex flex-col text-start p-4 w-fit">
              <p>1234 Professores online</p>
              <p>400 Alunos online</p>
            </div>
            <div className="flex flex-col p-4 text-black w-fit">
              <p>1000 Atividades corrigidas</p>
              <p>5000 Atividades entregues</p>
            </div>
          </div>
        </section>
        <section className="bg-green-600/80 border-2 border-gray-600 shadow-xl text-start p-2 rounded-xl w-[80%] space-y-2 h-fit mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl text-black lg:text-3xl">
            Lorem ipsum dolor sit.
          </h3>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg grid grid-cols-1 ">
            <p className="col-span-1 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
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
        <div className="max-sm:hidden space-y-8 w-full">
        <section>
            <ol className="flex flex-wrap justify-center mx-auto w-fit gap-8">
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
                      p-4 h-28 text-lg flex-col text-start
                      w-56 max-sm:w-full rounded-xl border-mainBgButton hover:border-mbg-mainBgButton border-2 bg-mainBgButton bg-opacity-[0%]
                      transition-all ease duration-500 hover:text-white hover:scale-[1.05] hover:bg-opacity-[100%]
                      items-center justify-center font-bold
                    `}
                  >
                    {functi.icon}
                    {functi.description}
                  </button>
                );
              })}
            </ol>
          </section>
          <section
            className="flex flex-col items-end justify-center
          bg-gray-950 mx-auto max-w-[80%] max-h-[500px] p-2 rounded-2xl z-10"
          >
            <div className="flex items-center mx-auto w-[98%] mb-0.5">
              <span className="flex gap-2">
                <p className="bg-red-500 rounded-full w-2 h-2"></p>
                <p className="bg-green-500 rounded-full w-2 h-2"></p>
                <p className="bg-yellow-500 rounded-full w-2 h-2"></p>
              </span>
              <Radio size={22} className="icone ml-auto" />
            </div>
            <div
              className="relative w-full h-full bg-white rounded-2xl"
            >
            {functionalites
              .filter((item) => item.id === showFunct)
              .map((item, i) => (
                  <div key={i} className="absolute flex flex-col justify-center bg-white/80 top-0 left-0 w-fit p-4 h-20 border-b border-r rounded-tl-xl rounded-br-2xl text-lg border-gray-800 ">
                    <p className="font-semibold">
                      Lorem ipsum dolor sit amet consectetur poulr.
                    </p>
                    <span className="flex items-center gap-2 text-lg">
                      <MessagesSquare size={20} strokeWidth={2} />
                      {item.details.text}
                    </span>
                  </div>
              ))}
              <Image
                src="https://fast.image.delivery/tavvdre.jpg"
                className="lg:block rounded-2xl mx-auto lg:col-span-1 border-gray-600"
                alt="professora ministrando aula"
                width={500}
                height={300}
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "440px" }}
              />
              </div>
          </section>
        </div>
      </section>
      <section className="w-screen h-full mt-6">
        <h2 className="text-2xl">Opniões de Usuários</h2>
        <Carousel opnions={opnions}/>
      </section>
    </section>
      <footer className="w-full flex-col p-4 bg-black text-white/60">
        <section className="flex flex-wrap justify-start gap-8 w-full mb-4">
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <p className="text-lg font-bold text-white">Links rápidos</p>
            <ul className="space-y-2 mx-2">
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Github</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Contact Us</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Home</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-fit text-secondary">
            <p className="text-lg font-bold text-white">Links rápidos</p>
            <ul className="space-y-2">
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Github</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Contact Us</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Home</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <p className="text-lg font-bold text-white">Links rápidos</p>
            <ul className="space-y-2">
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Github</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Contact Us</Link>
              </li>
              <li className="text-start text-lg w-fit cursor-pointer hover:text-mainBgButton transition-all duration-300 ease-in-out">
                <Link href="/#">Home</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-wrap border-t p-4 border-gray-800/80 items-center gap-4 justify-center sm:justify-between w-full">
          <p className="text-base tracking-widest">
            TEACH<span className="text-mainBgButton">L</span>YZE
          </p>
          <div className="flex text-sm items-center gap-4 sm:ml-auto">
            <p className="">© 2025 TCC All rights reserved</p>
            <Link href={""} className="hover:text-mainBgButton transition-all duration-300 ease-in-out">
              Terms
            </Link>
            <Link href={""} className="hover:text-mainBgButton transition-all duration-300 ease-in-out">
              Privacy
            </Link>
            <Link href={""} className="hover:text-mainBgButton transition-all duration-300 ease-in-out">
              Docs
            </Link>
          </div>
        </section>
      </footer>
      </>
  );
}
