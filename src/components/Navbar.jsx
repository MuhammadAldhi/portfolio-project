import { useState } from "react"
import { Link } from 'react-router-dom';
import NameOfLogo from "./NameOfLogo";

const nameList = [
    { title: 'HOME', url: '#' },
    { title: 'ABOUT', url: '#about' },
    { title: 'PROJECT', url: '#projects' },
    { title: 'CONTACT', url: '#contact' }
];

export default function Navbar({ }) {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <>
            {/* mobile */}
            <div>

                <div className={`md:hidden fixed bg-accent/20 backdrop-blur-lg border-r border-white/10 h-screen transition-all duration-500 z-50 ${isOpen ? 'w-full' : 'w-0'}`}>


                    {/* Perubahan utama: justify-between saat isOpen true */}
                    <div className={`flex h-screen items-center transition-all duration-1000 overflow-hidden ${isOpen ? 'justify-between px-10 w-full' : 'justify-end w-5'}`}>

                        {isOpen && (
                            <div className="flex flex-col text-text animate-in fade-in slide-in-from-left duration-500">
                                <h2 className="text-2xl font-bold">Menu Navigasi</h2>
                                <ul className="mt-4 gap-4 flex flex-col font-medium">
                                    {nameList.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.url} className="hover:text-white transition-colors">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <a className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                /* Tambahkan fill-white di sini */
                                className={`fill-white rounded-full transition-transform ${isOpen ? 'rotate-180 delay-700' : 'rotate-0'}`}
                            >
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                            </svg>
                        </a>

                    </div>
                </div>

                <nav className={`fixed md:hidden top-0 z-40 w-full min-h-14 bg-background flex font-inter justify-center items-center px-8 shadow-md shadow-primary `}>
                    <div className="w-24">
                        <NameOfLogo
                            // Shadow normal lalu lebih terang saat hover
                            styleM="text-text drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff]"
                            styleA="text-text rotate-6 drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff] hover:rotate-0"
                        />
                    </div>
                </nav >


            </div>

            {/* computer */}
            < nav className={`sticky top-0 z-50 hidden md:flex w-full min-h-14 items-center justify-between bg-background px-8 font-inter  shadow-lg shadow-primary/50`} >
                {/* Logo */}
                <div className="w-24">
                    <NameOfLogo
                        // Shadow normal lalu lebih terang saat hover
                        styleM="text-text drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff]"
                        styleA="text-text rotate-6 drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff] hover:rotate-0"
                    />
                </div>

                {/* Menu Navigasi */}
                <div>
                    <ul className="flex gap-6 text-text">
                        {nameList.map((name, index) => (
                            <li key={index} className="relative group font-semibold cursor-pointer">

                                <a
                                    href={name.url}
                                    className="scroll-smooth inline-block transition-all duration-300 ease-in-out 
                               group-hover:text-white 
                               group-hover:drop-shadow-[0_0_10px_#fff] 
                               group-hover:-translate-y-1"
                                >
                                    {name.title}
                                </a>


                                {/* Animasi Garis Bawah Neon */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white 
                                 shadow-[0_0_8px_#fff] transition-all duration-300 
                                 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tombol Aksi / Media Sosial */}
                <div className="relative group">
                    {/* Efek Aura Neon di belakang tombol (muncul saat hover) */}
                    <div className="absolute -inset-0.5 bg-white rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

                    {/* Tombol Utama */}
                    <Link to={"/contact"}>
                        <div className="relative bg-secondary text-text px-6 py-2 rounded-full text-md font-bold cursor-pointer 
                    border border-white/20 transition-all duration-300
                    hover:bg-white hover:text-secondary 
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] 
                    hover:scale-105 active:scale-95" >
                            Hire Me
                        </div>
                    </Link>
                </div>

            </nav >
        </>
    );
}
