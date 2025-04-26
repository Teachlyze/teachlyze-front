import HomePageTemplate from "@/templates/pages/home/page";
import { CopyX, ClipboardList, Bot } from "lucide-react";

export type TFunctionalities = {
  id: number;
  description: string;
  icon: JSX.Element;
  details: {
    text: string;
  };
}[];

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

export default function Home() { 
  return (<HomePageTemplate functionalites={functionalites}/>);
}