import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "fakeApi.json");
// 🔵 Método GET - Retorna o conteúdo do JSON
export async function GET() {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = NextResponse.json(JSON.parse(fileContent));
  if (data.ok) {
    return data;
  }
}

// 🟢 Método POST - Atualiza o JSON com novos dados
export async function POST(req: Request) {
  try {
    const newData = await req.json(); // Dados enviados na requisição
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf-8"); // Salva no arquivo JSON
    return NextResponse.json({ message: "Dados atualizados com sucesso!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao salvar os dados" },
      { status: 500 }
    );
  }
}
