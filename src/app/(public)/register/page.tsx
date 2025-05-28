'use client';

import {useState} from 'react';
import { useRouter } from 'next/navigation';
//import { cp } from 'fs';

export default function Cadastro() {
    //definição dos estados para armazenamento dos dados dos campos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [senha, setSenha] = useState('');
    const [conf, setConf] = useState(''); //confirmação da senha

    const router = useRouter(); //redirecionar após cadastro

    //função para enviar o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const idadeNum = parseInt(idade, 10);
        const cpfLimpo = cpf.replace(/\D/g, ''); //remove qualquer ponto ou traço

        //validar os campos
        if (!nome || !email || !idade || !cpf|| !instituicao || !senha || !conf) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (isNaN(idadeNum) || idadeNum < 18) {
            alert('Idade inválida. É necessário ter pelo menos 18 anos.');
            return;
        }

        if (!/^\d{11}$/.test(cpfLimpo)) {
            alert('CPF inválido. Digite exatamente 11 números.');
            return;
        }

        if (senha.length < 6) {
            alert('A senha precisa ter pelo menos 6 caracteres.');
            return;
        }

        if (senha !== conf) {
            alert ('As senhas não coincidem');
            return;
        }

        //objeto com os dados do formulário
        const dadosCadastro = {
          nome, 
          email, 
          idade: idadeNum, 
          cpf: cpfLimpo, 
          senha,
        };

        //simulando o envio para uma api
        console.log('Cadastro enviado:', dadosCadastro);

        //redirecionando para a página de login
        router.push('/login');
    }

    return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-3xl"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Criar conta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campo de nome */}
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
              required
            />

            {/* Campo de email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
              required
            />

            {/* Campo da Idade */}
            <input
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
              required
              min={1}
            />

            {/* Campo do CPF */}
            <input
              type="text"
              placeholder="CPF (somente números)"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
              required
              maxLength={14} //pode usar até 14 se quiser aceitar com pontuação futuramente
            />

            {/* Campo da instituição de ensino */}
            <input
              type="text"
              placeholder="Nome da Instituição de Ensino"
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
              required
            />

            {/* Campo de senha */}
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 mb-6 border rounded-lg"
              required
            />

            {/*Campo de confirmação de senha*/}
            <input
              type="password"
              placeholder='Confirmar senha'
              value={conf}
              onChange={(e) => setConf(e.target.value)}
              className="w-full p-3 mb-6 border rounded-lg"
            />
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}


