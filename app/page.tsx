'use client';

import Image from 'next/image';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <>
      {/* 1. IMPORTING THE HOLLYWOOD STYLE SCRIPT FONT DIRECTLY FROM GOOGLE FONTS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
        rel="stylesheet"
      />

      <main className="relative flex h-screen w-screen select-none flex-col justify-between overflow-hidden bg-white pb-12">
          {/* 2. BACKGROUND PHOTO - SET TO EXACTLY 50% OPACITY */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-100">
            <Image
              src="/profile.png" 
              alt="Asvin Thakur"
              fill
              priority
              className="object-cover object-center pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_42%,rgba(251,191,36,0.14))]" />
          <div className="absolute inset-0 z-10 opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

          {/* 3. MODERN TRANSPARENT CAPSULE NAVIGATION BAR */}
          <div className="z-50 flex w-full justify-center px-4 pt-6">
            <NavBar active="home" />
          </div>

          {/* 4. BOTTOM POSITIONED STYLISH CURLY GOLD NAME */}
          <div className="relative w-full text-center z-20 px-4 flex flex-col items-center select-none">
            
            {/* Ambient lighting glow centered right behind your name */}
            <div className="absolute w-[500px] h-[150px] bg-amber-300/10 rounded-full blur-[120px] pointer-events-none -translate-y-6" />

            {/* Curly Script Name Typography with a true multi-stop 3D Gold Gradient */}
            <h1 
              className="relative text-7xl md:text-9xl lg:text-[11rem] font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#8A640F] via-[#D4AF37] to-[#FFF3D1] filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)] leading-none select-none"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              Asvin Thakur
            </h1>

            {/* Elegant Subtitle */}
            <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-slate-700 font-light uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,1)] mt-2">
              A Business Managing Student with passsion for Tech and Innovation. 👨🏻‍💼
            </p>
          </div>
      </main>
    </>
  );
}
