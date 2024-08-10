import Image from "next/image";

export default function Home() {
  return (
    

    <div className="relative z-[-1] flex flex-col items-center justify-center w-full h-screen bg-black">
    <div className="absolute h-[500px] w-full max-w-screen-xl -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl animate-pulse sm:w-[480px] lg:h-[360px]" />
    <div className="absolute z-[-20] h-[180px] w-full max-w-screen-xl translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl animate-spin sm:w-[740px]" />
    
    <span className="text-white text-4xl animate-bounce">HELLO WORLD</span>
    
    <div className="text-white text-2xl animate-pulse mt-4">CREATED BY RAMAL JAWAID</div>
  </div>

      
  );
}
