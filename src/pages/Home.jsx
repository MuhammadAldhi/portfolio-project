import { Link } from 'react-router-dom';

import profilPict from '../assets/action.png'
import About from './About';
import Contact from './Contact';

export default function Home() {

    return (
        <>
            <div className="font-inter text-text w-full min-h-screen flex items-center justify-center px-5 py-10 relative sm:pb-48">
                <div className='grid grid-cols-1 sm:grid-cols-2 h-auto gap-10 w-full max-w-5xl mx-auto items-center'>

                    {/* Kolom Gambar */}
                    <div className='flex justify-center items-center overflow-visible'>
                        <div className='w-48 h-48 sm:w-70 sm:h-70 flex justify-center overflow-hidden rounded-full transition-all duration-1000 shadow-[0_0_40px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8)] group'>
                            <img
                                src={profilPict}
                                alt="profilPict"
                                className='object-cover object-top pt-2 scale-125 transition-transform duration-1000 group-hover:scale-[1.40]'
                            />
                        </div>
                    </div>

                    {/* Kolom Kanan: Teks */}
                    <div className='flex flex-col justify-center items-center sm:items-start text-center sm:text-left'>
                        <div className='sm:pl-10 h-auto w-full font-inter'>
                            <span className='text-3xl sm:text-4xl font-semibold block'>Muhammad Aldhi</span>
                            <p className='mt-4 sm:mt-6 font-light text-sm sm:text-base leading-relaxed'>
                                Di mana imajinasi bertemu dengan kode untuk menciptakan pengalaman digital masa depan.
                            </p>

                            <div className="flex flex-col gap-4 mt-8 w-full justify-center sm:justify-start lg:flex-row">
                                <div className="relative group">
                                    <a
                                        href="/path/to/your/cv.pdf"
                                        download
                                        className="w-full sm:w-auto inline-block bg-transparent text-white px-8 py-3 rounded-full text-md font-bold cursor-pointer 
                            border-2 border-white/20 transition-colors duration-300
                            hover:border-white hover:bg-white hover:text-secondary
                            hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                    >
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ELEMEN DI BAGIAN BAWAH */}
                <div className='absolute bottom-3 sm:bottom-20 left-1/2 -translate-x-1/2 items-center'>
                    <a href='#about'>
                        {/* SVG Arrow dengan Animasi Pantulan Bola */}
                        <svg
                            className="w-8 h-8 text-white animate-bounce opacity-70"
                            xmlns="www.w3.org"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <About />

            <Contact />

        </>
    );
}