'use client'
import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import photo from '@/assets/perfilteste-removebg-preview.png'

const Page = () => {

    function changeColor():void{
        imageCBg.current ? imageCBg.current.style.backgroundColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0') : ''     
    }

    const imagePBg = useRef(null)
    const imageCBg = useRef(null)

    return (
        <>
            <main className='container h-screen pt-[40px] w-screen mx-auto text-white grid md:grid-cols-2 max-[400px]:grid-rows-2 place-content-center max-[400px]:text-xs max-lg:text-sm lg:text-lg '>
                <div className='ps-2 pt-[2rem]' ref={imagePBg}>Meu nome é Lucas (o mesmo da Página Principal ), entusiasta de tecnologias e por soluções fora da caixa. <br />Estou cursando Engenharia da Computação e já realizei diversos cursos na área de desenvolvimento de software, e áreas afins.<br/>Já atuei como Analista de Suporte em TI, onde desenvolvi várias habilidades corporativas <br />Tenho diversos projetos em diversas linguagens <Link href={'/projetos'} target='blank'>[AQUI]</Link>. <br />Estou sempre em busca de desafios e oportunidades para aprender e compartilhar conhecimentos. <br /> Acredito que tenho muito a aprender, mas, com muita persistência, não existe nada que não consigo desenvolver.<br /> Esta página é onde eu compartilho minha jornada.<div className='w-full pt-3 text-center lg:text-xl'>Obrigado por visita-la!</div></div>
                <div className='grid grid-flow-row max-[400px]:auto-rows-max pt-5'>
                    <div  ref={imageCBg} onMouseEnter={changeColor} className={`relative max-[450px]:w-[50%] max-lg:w-[50%] lg:w-[42%] max-[450px]:my-5 max-lg:my-10 max-[450px]:ms-20 max-lg:ms-[150px] lg:mx-20 max-[450px]:h-[8rem] max-lg:h-[12rem] lg:h-[300px] rounded-[50%] border lg:max-h-screen overflow-hidden bg-[#303d9db0] ease-in-out`}>
                        <Image src={photo} alt='photo' className={`absolute max-[450px]:right-4 max-lg:right-3 lg:right-10 bottom-0 max-[450px]:w-[80%] max-lg:w-[70%] lg:w-full `}></Image>
                    </div>
                    <div className='text-center max-[450px]:pe-10 max-lg:pe-[100px] lg:pe-[10rem] lg:text-sm italic'>Esse sou eu</div>
                </div>
                
            </main>
        </>
    );
}

export default Page;
