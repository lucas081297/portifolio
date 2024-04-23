import Link from "next/link"

export default function Header() {


    return (
        <>
            <main className="h-[40px] w-screen fixed text-white flex items-center bg-zinc-800">
                <section className="h-full w-2/3 px-4 grid grid-flow-col auto-cols-max justify-items-center items-center max-[450px]:text-[0.6rem] sm:text-2xl lg:text-xl max-[450px]:gap-2 max-sm:gap-3 sm:gap-5 lg:gap-10">
                    <div className="hover:overline"><Link href={'/'}>Home</Link></div>
                    <div className="hover:overline"><Link href={'/sobre'}>Sobre</Link></div>
                    <div className="hover:overline"><Link href={'/habilidades'}>Habilidades</Link></div>
                    <div className="hover:overline"><Link href={'/projetos'}>Projetos</Link></div>
                </section>   
                <div className="w-1/3 text-end justify-end pe-5"><Link href={'/contrateme'} className="border p-1 rounded bg-orange-500 max-[450px]:text-xs sm:text-xl lg:text-xl hover:bg-amber-500">Contrate-me</Link></div>
            </main>
        </>
    )
}