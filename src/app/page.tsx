import Image from "next/image";
import photo from '@/assets/perfil.jpeg'

export default function Home() {
  return (
    <>
      <main className="container mx-auto w-screen h-screen lg:pt-[40px] text-white">
        <section className="pt-2 h-full grid grid-cols-2 place-content-center justify-center">
          <div className="flex items-center flex-col max-[400px]:ps-2">
            <div className="max-[400px]:text-lg lg:text-7xl fadefw">Olá! Meu nome é <span className=" font-bold">Lucas</span></div> 
            <div className="pt-5 max-[400px]:text-xs lg:text-xl text-transparent fadefwd">Sou um desenvolvedor <span className="font-bold">Full Stack</span> criativo que atua com diversas tecnologias. Atulmente resido em Vitória/ES</div>
          </div>

          <div>
            <div className="w-1/2 max-[400px]:ms-4 lg:pt-4 lg:pb-1 lg:ps-4 lg:pe-1 bg-zinc-600 bg-opacity-15 faderg">
              <Image src={photo} alt="Foto de perfil" className=" shadow-2xl shadow-gray-600 "></Image>
            </div>
            </div>   

        </section>
      </main>
    </>    
  );
}
