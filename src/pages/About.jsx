import { Link } from 'react-router-dom';

import profilPict from '../assets/action.png'
import { listTools } from '../assets/data'

const About = () => {
  return (
    // PERBAIKAN: Gunakan scroll-mt (positif) agar tidak tertutup navbar
    <div id="about" className='-scroll-mt-16 sm:-scroll-mt-7'>
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">

        {/* Dekorasi Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center md:text-left relative">
            <h2 className="text-4xl md:text-6xl font-extrabold text-text mb-4 tracking-tight">
              About Me<span className="text-[#0E0610] inline-block animate-pulse">.</span>
            </h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-[#0E0610] to-transparent mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Main Card */}
          <div className="grid grid-cols-1 p-8 lg:grid-cols-12 gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 md:p-16 rounded-4xl shadow-2xl relative">

            <div className="flex justify-center lg:hidden relative">
              {/* Glow Effect tetap di belakang (z-0) */}
              <div className="absolute -inset-6 bg-linear-to-tr from-blue-600/40 to-purple-600/40 rounded-full blur-3xl opacity-60"></div>

              {/* Foto dipastikan di depan dengan z-10 dan shadow yang lebih bold */}
              <div className='flex justify-center items-center overflow-visible'>
                <div className='w-48 h-48 sm:w-70 sm:h-70 flex justify-center overflow-hidden rounded-3xl transition-all duration-1000 shadow-[0_0_40px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8)] group'>
                  <img
                    src={profilPict}
                    alt="profilPict"
                    className='object-cover object-top scale-100 h-50 pt-2 transition-transform duration-1000 group-hover:scale-[1.40]'
                  />
                </div>
              </div>

            </div>


            {/* Content Text & Images (Bagian Anda sudah oke, saya ringkas untuk fokus ke Marquee) */}
            <div className="lg:col-span-7 space-y-8">
              {/* ... (Konten teks Anda tetap sama) ... */}
              <h3 className="text-3xl font-bold text-text leading-tight">
                Saya <span className="text-text">Muhammad Aldhi</span>, <span className='text-[#0E0610] font-black'>Product Designer</span>
              </h3>
              <p className="text-text/80 leading-relaxed text-lg font-light">
                Berbasis di Jakarta, mendedikasikan 3 tahun terakhir untuk pengalaman digital inklusif.
              </p>
              <div className="flex flex-wrap gap-3">
                {['UI/UX Design', 'React Dev', 'Visual Branding', 'Prototyping'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-text/90 hover:border-text transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>

              <div className='w-full'>
                <Link to={"contact"}>
                  <button class="w-full lg:w-52 text-white bg-accent/20 font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    Bekerja Sama?
                  </button>
                </Link>
              </div>



            </div>

            {/* Image Section Laptop */}
            <div className='hidden lg:flex px-8 justify-center items-center overflow-visible lg:col-span-5 relative'>
              <div className='w-full h-full flex justify-center overflow-hidden rounded-3xl transition-all duration-1000 shadow-[0_0_40px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8)] group'>
                <img
                  src={profilPict}
                  alt="profilPict"
                  className='object-cover object-top scale-100 h-50 pt-2 transition-transform duration-1000 group-hover:scale-[1.40]'
                />
              </div>
            </div>

            {/* <div className="lg:col-span-5 hidden lg:flex justify-center relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-2xl opacity-50"></div>
              <img src={profilPict} className="relative w-80 h-80 rounded-2xl object-cover border-2 border-white/20" alt="Profile" />
            </div> */}


            {/* --- BAGIAN MARQUEE TOOLS --- */}
            <div className="lg:col-span-12 min-h-fit bg-white/5 rounded-2xl border border-white/10 p-6 relative overflow-hidden"> {/* Tambahkan overflow-hidden di sini */}
              <p className="text-text/50 text-sm border-b-2 w-fit text-center font-bold uppercase tracking-widest">
                Menguasai
              </p>

              <div className="flex w-full overflow-hidden"> {/* Container pembungkus utama */}
                {/* Div inilah yang akan bergerak secara horizontal */}
                <div className="flex gap-16 animate-marquee-custom hover:[animation-play-state:paused] py-10">

                  {/* Render duplikat agar seamless */}
                  {[...listTools, ...listTools].map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 min-w-max relative group cursor-pointer">
                      {/* ... Isi Konten Tool (Popup & Image) Tetap Sama ... */}
                      <img className="w-8 h-8 object-contain" src={tool.gambar} alt={tool.nama} />
                      <div className="text-white">
                        <h4 className="font-bold text-sm">{tool.nama}</h4>
                        <p className="text-[10px] opacity-60 uppercase tracking-widest">{tool.ket}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
