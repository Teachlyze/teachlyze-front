"use client";
import { UrlContext } from "@/context/useUrl";
import { use, useContext, useEffect, useState } from "react";

export default function Interface() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/services");
      const { alunos } = res.ok && (await res.json());
      setData(alunos);
    };
    fetchData();
  }, []);
  return (
    <section className="grid grid-cols-1">
      <h1></h1>
      <aside className="max-sm:hidden">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="col-span-1 p-4 h-screen bg-cyan-500">
        <h2 className="uppercase text-white font-bold font-sans">Alunos</h2>
        <ul className="flex flex-wrap mt-6 justify-between p-2 bg-gray-200">
          {data &&
            data.map((aluno: any) => (
              <li
                className="p-2 bg-gray-700 text-white w-28 rounded-lg font-bold cursor-pointer"
                key={aluno.id}
              >
                {aluno.nome}
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
}
