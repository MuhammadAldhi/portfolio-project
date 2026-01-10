import { useState, useEffect } from "react"; // Tambahkan useEffect
import { Link } from 'react-router-dom';
import NameOfLogo from "./NameOfLogo";

const nameList = [
    { title: 'HOME', url: '#' },
    { title: 'ABOUT', url: '#about' },
    { title: 'PROJECT', url: '#projects' },
    { title: 'CONTACT', url: '#contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // State untuk kontrol visibility

    useEffect(() => {
        const handleScroll = () => {
            // Navbar muncul jika scroll lebih dari 50px
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed w-full z-100 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}>

            {/* Mobile Nav */}

            <div className={`fixed md:hidden bg-accent/20 backdrop-blur-lg border-r border-white/10 h-screen transition-all duration-500 z-50 ${isOpen ? 'w-full' : 'w-0'}`}>

                <div className={`flex h-screen transition-all duration-1000 overflow-hidden ${isOpen ? 'justify-between px-10 w-full' : 'justify-end w-5'}`}>
                    {isOpen && (
                        <div className="flex flex-col text-text animate-in fade-in slide-in-from-left duration-500">

                            <h2 className="text-2xl text-center font-bold mt-10">Menu Navigasi</h2>

                            <ul className="flex gap-6 mt-10 -ml-2 q text-text">
                                {nameList.map((name, index) => (
                                    <li key={index} className="relative group font-semibold cursor-pointer">
                                        <a href={name.url} className="scroll-smooth inline-block transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#fff] group-hover:-translate-y-1">
                                            {name.title}
                                        </a>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white shadow-[0_0_8px_#fff] transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                ))}
                            </ul>

                            <Link to={"/contact"} className=" pt-10">
                                <div className="bg-secondary text-text px-6 py-2 rounded-full font-bold cursor-pointer border border-white/20 transition-all text-center duration-300 hover:bg-white hover:text-secondary hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95">
                                    Hire Me
                                </div>
                            </Link>
                        </div>
                    )}
                    <div className="items-center flex">
                        <a className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`fill-white rounded-full transition-transform ${isOpen ? 'rotate-180 delay-700' : 'rotate-0'}`}>
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <nav className={`relative md:hidden w-full min-h-14 bg-background flex font-inter justify-center items-center px-8 shadow-md shadow-primary `}>
                <div className="w-24">
                    <NameOfLogo
                        // Shadow normal lalu lebih terang saat hover
                        styleM="text-text drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff]"
                        styleA="text-text rotate-6 drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff] hover:rotate-0"
                    />
                </div>
            </nav >

            {/* Desktop Nav */}
            <nav className="hidden md:flex w-full min-h-14 items-center justify-between bg-background/80 backdrop-blur-md px-8 font-inter shadow-lg shadow-primary/50">
                <div className="w-24">
                    <NameOfLogo
                        styleM="text-text drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff]"
                        styleA="text-text rotate-6 drop-shadow-[0_0_5px_#fff] hover:drop-shadow-[0_0_15px_#fff] hover:rotate-0"
                    />
                </div>

                <div>
                    <ul className="flex gap-6 text-text">
                        {nameList.map((name, index) => (
                            <li key={index} className="relative group font-semibold cursor-pointer">
                                <a href={name.url} className="scroll-smooth inline-block transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#fff] group-hover:-translate-y-1">
                                    {name.title}
                                </a>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white shadow-[0_0_8px_#fff] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-white rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                    <Link to={"/contact"}>
                        <div className="relative bg-secondary text-text px-6 py-2 rounded-full text-md font-bold cursor-pointer border border-white/20 transition-all duration-300 hover:bg-white hover:text-secondary hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95">
                            Hire Me
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
