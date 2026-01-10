import About from './About';
import Contact from './Contact';

export default function Home() {
    return (
        <>
            <div className="font-inter text-text w-full h-screen flex items-center justify-center relative overflow-hidden">
                
                <div className='max-w-5xl w-full flex flex-col items-center justify-center text-center'>

                    <div className='w-full'>
                        <h1 className='text-3xl sm:text-5xl font-semibold block'>
                            Muhammad Aldhi Surya Pamungkas
                        </h1>
                        <p className='mt-4 sm:mt-6 font-light text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto'>
                            Di mana imajinasi bertemu dengan kode untuk menciptakan pengalaman digital masa depan.
                        </p>

                        <div className="flex justify-center mt-10">
                            <div className="relative group">
                                <a
                                    href="/path/to/your/cv.pdf"
                                    download
                                    className="inline-block bg-transparent text-white px-10 py-3 rounded-full text-md font-bold cursor-pointer 
                                    border-2 border-white/20 transition-all duration-300
                                    hover:border-white hover:bg-white hover:text-black
                                    hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Arrow di bagian bawah (tetap absolute) */}
                <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                    <a href='#about' className="opacity-70 hover:opacity-100 transition-opacity">
                        <svg
                            className="w-8 h-8 text-white animate-bounce"
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
