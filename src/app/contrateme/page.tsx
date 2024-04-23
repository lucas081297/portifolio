'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {

    const [option,setOption] = useState(0)

    function changePosition(element:HTMLElement){
        element.style.position = 'fixed'
        element.style.top = `${Math.round(Math.random() * 80)}%`
        element.style.left = `${Math.round(Math.random() * 80)}%`
    }

    return (
        <>
            <main className='container h-screen w-screen mx-auto pt-[60px] text-white'>
                <div className={option == 0 ? 'w-full text-center' : 'hidden'}>Escolha uma das opções</div>
                <div className='mt-5 grid grid-cols-3 gap-10 px-3'>
                    <div className={option !== 0 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] max-[450px]:text-[0.5rem]  px-2 bg-neutral-400 outline outline-white hover:cursor-pointer hover:outline-[7px] outlinet'} onClick={e => setOption(1)}>Quero ver as informações de contato</div>
                    <div className={option !== 0 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] max-[450px]:text-[0.5rem] px-2 bg-neutral-400 outline outline-white hover:cursor-pointer hover:outline-[7px] outlinet'} onClick={e => setOption(2)}>Quero entrar em contato por um canal específico (email, whatsapp, linkedin, etc.)</div>
                    <div className={option !== 0 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] max-[450px]:text-[0.5rem] px-2 bg-neutral-400 outline outline-white hover:cursor-pointer'} onMouseEnter={e => changePosition(e.target as HTMLElement)}>Não quero entrar em contato</div>
                </div>
                <div className={option==1? 'lg:mb-10 text-center lg:text-xl': 'hidden'}>Informações de Contato</div>
                <div className={option==1? 'grid grid-flow-col max-[450px]:grid-flow-row auto-cols-max place-content-evenly text-center': 'hidden'}>
                    <div className='grid grid-rows-3 justify-items-center'>
                        <div><Image src={'https://www.svgrepo.com/show/530587/mail.svg'} alt='email' width={50} height={50}></Image></div>
                        <div className='text-red-300'>Email</div>
                        <div className='text-xs'>lucas081297@hotmail.com</div>
                    </div>

                    <div className='grid grid-rows-3 justify-items-center'>
                        <div ><Image src={'https://www.svgrepo.com/show/513060/whatsapp-128.svg'} alt='email' width={50} height={50} className='p-1'></Image></div>
                        <div className='text-red-300'>Whatsapp</div>
                        <div className='text-xs'>27999145686</div>
                    </div>

                    <div className='grid grid-rows-3 justify-items-center'>
                        <div ><Image src={'https://www.svgrepo.com/show/494312/linkedin-rounded.svg'} alt='email' width={50} height={50} className='p-1'></Image></div>
                        <div className='text-red-300'>Linkedin</div>
                        <div className='text-xs'>lucas-dos-santos-rodrigues-70363b12a</div>
                    </div>
                    
                </div>
                <div className={option !== 2 ? 'hidden'  : 'text-center'} >Escolha uma das opções</div>
                <div className='mt-5 grid grid-cols-3 gap-10 px-3'>
                    <div className={option !== 2 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] border px-2 bg-neutral-400 hover:cursor-pointer hover:bg-[#3F87F6] [transition:background-color_500ms_ease_0s]'} onClick={e=> setOption(0)}><a href='mailto:lucas081297@hotmail.com' target='blank' className='w-full h-full flex justify-center items-center'>Email</a></div>
                    <div className={option !== 2 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] border px-2 bg-neutral-400 hover:cursor-pointer hover:bg-green-400 [transition:background-color_500ms_ease_0s]'} onClick={e=> setOption(0)}><a href={'https://wa.me/5527999145686'} target={'blank'} className='w-full h-full flex justify-center items-center'>Whatsapp</a></div>
                    <div className={option !== 2 ? 'hidden' : 'flex justify-center items-center text-center text-sm lg:h-[200px] border px-2 bg-neutral-400 hover:cursor-pointer hover:bg-[#0A66C2] [transition:background-color_500ms_ease_0s]'} onClick={e=> setOption(0)}><a href={'https://www.linkedin.com/in/lucas-dos-santos-rodrigues-70363b12a/'} target='blank' className='w-full h-full flex justify-center items-center'>Linkedin</a></div>
                </div>
                <div className={option!=0 ? 'absolute bottom-0 mb-2 rounded-xl bg-orange-50 hover:cursor-pointer' : 'hidden'} onClick={e => setOption(0)}><Image src={'https://www.svgrepo.com/show/521961/arrow-left-square.svg'} alt='Voltar' width={40} height={40}></Image></div>
            </main>
        </>
    );
}

export default Page;
