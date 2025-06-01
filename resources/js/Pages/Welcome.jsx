import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome({ auth }) {
    const currentYear = new Date().getFullYear();
    const appName = import.meta.env.VITE_APP_NAME || "Seu Gerenciado Digital";

    return (
        <>
            <Head title="Login" />

            {/* estrutura total com altura da tela e colunas */}
            <div className="bg-[#2e1556] min-h-screen flex flex-col text-white">

                {/*conteúdo principal */}
                <main className="flex-grow flex flex-col justify-center items-center px-4">

                    <div >
                        <Link href="/">
                            <ApplicationLogo className="h-auto w-80 my-10 fill-current text-gray-500" />
                        </Link>
                    </div>

                    {/* Cabeçalho */}
                    <header className="text-center">
                        <h1 className="text-3xl font-bold mb-6">Digital Viana Gerenciando Seu Negócio</h1>
                        <p className="text-lg mb-10">Gestão de Pecuária, Gestão Operacional da sua fazenda!</p>
                    </header>

                    <div className="flex justify-center space-x-4 mb-10">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="bg-purple-900 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                Painel de Controle
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Acessar
                                </Link>

                                <Link href={route('register')} className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Cadastrar
                                </Link>
                            </>
                        )}
                    </div>

                    <section className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                            <h3 className="font-bold text-xl mb-4">Gestão de Despesas</h3>
                            <p>Monitore todas as despesas do condomínio, garantindo transparência e controle.</p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                            <h3 className="font-bold text-xl mb-4">Comunicação Eficiente</h3>
                            <p>Mantenha os moradores informados com comunicados e convocações de assembleias.</p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                            <h3 className="font-bold text-xl mb-4">Relatórios e Documentos</h3>
                            <p>Acesse relatórios financeiros e documentos do condomínio com facilidade.</p>
                        </div>
                    </section>
                </main>

                {/* Rodapé na base da tela */}
                <div className=" p-2 text-xs text-white bg-[#1c0d35] ">
                    <p className='w-[100%] mx-auto'>@ {currentYear} {appName}. Todos os direitos reservados. Todo o conteúdo deste site, como textos, imagens e logotipos, é propriedade da Digital Viana</p>
                </div>
            </div>
        </>
    );
}
