import { GET } from "../api/services/route";

export default async function Interface() {
  const res = await fetch("http://localhost:3000/api/services");
  const { alunos } = res.ok && (await res.json());
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
          {alunos.map((aluno: any) => (
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
