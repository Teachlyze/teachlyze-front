'use client';

import  {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {  
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !senha) {
            alert('Preencha todos os campos.')
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Email inválido.');
            return;
        }

        //simula sucesso no login
        //router.push('/home'); 
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
            <form 
                onSubmit={handleLogin}
                className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md'>
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                {/*Campo de email*/}
                <div className='mb-4'>
                    <label htmlFor='email' className='block font-medium mb-1'>Email</label>
                    <input
                        type='email'
                        placeholder='E-mail'
                        id='email'
                        className='w-full border rounded-md p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/*Campo da senha*/}
                <div className='mb-8'>
                    <label htmlFor='senha' className='block font-medium mb-1'>Senha</label>
                    <input
                        type='password'
                        placeholder='Senha'
                        id='senha'
                        className='w-full border rounded-md p-2'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>

                <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition'>Entrar</button>
            </form>
        </div>
    )
}