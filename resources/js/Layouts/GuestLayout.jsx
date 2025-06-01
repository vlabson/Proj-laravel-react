import ApplicationIcon from '@/Components/ApplicationIcon';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="bg-[#2e1556] min-h-screen flex items-center justify-center">
            
            {/* Container central com tamanho controlado */}
            <div className="flex h-[40vh] w-full max-w-4xl flex-row items-stretch rounded-md shadow-lg dark:bg-gray-900">
                
                {/* Lado esquerdo com o ícone */}
                <div className="bg-[#643ca3] flex items-center justify-center w-1/2 rounded-s-md">
                    <Link href="/">
                        <ApplicationIcon className="h-40 w-40 fill-current text-gray-500" />
                    </Link>
                </div>

                {/* Lado direito com conteúdo */}
                <div className="w-1/2 overflow-hidden bg-white px-6 py-5 rounded-e-md dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
