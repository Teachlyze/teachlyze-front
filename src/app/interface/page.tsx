export default function Interface() {
  return (
    <section className="grid grid-cols-[auto_1fr] grid-flow-col-dense min-h-screen">
      <aside className="max-sm:hidden p-4 bg-red-50">
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
      <section className="col-span-3 p-4 bg-cyan-500">
        <h2 className="uppercase text-white font-bold font-sans">Alunos</h2>
        <ul className="flex flex-wrap mt-6 justify-between p-2 bg-gray-200">
          <p>EXEMPLO</p>
        </ul>
      </section>
    </section>
  );
}
