import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Container from './Container';
import { Link } from '@inertiajs/react';
import logo from "../../img/logodigitalviana_laranja.png"

function Footer() {

    const currentYear = new Date().getFullYear();

    const appName = import.meta.env.VITE_APP_NAME || "Seu Gerenciado Digital";

    return (
        <>
            <footer className="flex flex-col justify-between  text-white bg-[#1c0d3598] px-4">
                <Container >
                    <div className="w-[1140px] h-[230px] mx-auto mt-5 flex justify-between ">
                        <div className="flex flex-col items-center gap-5">
                            <Link to={"/"}>
                                <img className="w-[180px] mt-6" src={logo} alt="Digital Viana" />
                            </Link>
                            <p>slogan aqui e aqui</p>
                        </div>

                        <div className="flex flex-col  items-start gap-2">

                            <h2 className='text-[20px] font-bold'>Institucional</h2>
                            <ul className="flex flex-col items-left">
                                <li className="mr-4">
                                    <Link to={"/"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Home</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/sobre"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Sobre</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/PorteFolio"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Portfólio</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/produtos"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Produtos</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="flex flex-col items-start gap-2 font-poppins ">

                            <h2 className='text-[20px] font-bold'>Produtos</h2>
                            <ul className="flex flex-col items-left">
                                <li className="mr-4">
                                    <Link to={"/"} className=" text-[15px] no-underline hover:text-[#eb680b]">Home</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/sobre"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Sobre</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/PorteFolio"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Portfólio</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/produtos"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">Produtos</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="flex flex-col items-start gap-4">

                            <h2 className='text-[20px] font-bold'>Fale Conosco</h2>
                            <ul className="flex flex-col items-left gap-2">
                                <li className="flex items-center gap-2">
                                    <FaPhone className="text-[#fff]  hover:text-[#eb680b]" />
                                    <Link to={"/"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">(85) 99717-8791</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaWhatsapp className="text-[#fff]  hover:text-[#eb680b]" />
                                    <Link to={"/sobre"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">(85) 99717-8791</Link>
                                </li>
                                <li className=" flex items-center gap-2">
                                    <FaEnvelope className="text-[#fff] hover:text-[#eb680b]" />
                                    <Link to={"/PorteFolio"} className="font-poppins text-[15px] no-underline hover:text-[#eb680b]">vlabsonsviana@gmail.com</Link>
                                </li>

                            </ul>
                            <div className='flex list-none gap-6'>
                                <li className="hover:text-[#eb680b] cursor-pointer text-3xl"><FaInstagram /></li>
                                <li className="hover:text-[#eb680b] cursor-pointer text-3xl"><FaFacebook /></li>
                                <li className="hover:text-[#eb680b] cursor-pointer text-3xl"><FaLinkedin /></li>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>

            <div className=" p-2 text-xs text-white bg-[#1c0d35] ">
                <p className='w-[100%] mx-auto'>@ {currentYear} {appName}. Todos os direitos reservados. Todo o conteúdo deste site, como textos, imagens e logotipos, é propriedade da Digital Viana</p>
            </div>
        </>
    )
}

export default Footer;
