'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface languages {
    id: number
    data: {
        l:string
        val: number
    }
}

const Page = () => {

    const languages = require('./languages.json')
    const repos = require('./repos.json')

    const [arrayL,setArrayL] = useState<Array<any>>([])

    return (
        <>
        <main className='container h-screen w-screen mx-auto pt-[60px] text-white'>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]} 
            slidesPerView={1} 
            effect={'cards'} 
            navigation={true} 
            className='w-1/2 h-2/3'>
                {repos ? repos.map((repo:any) => {
                    return(
                        <SwiperSlide className='border-[5px] rounded-lg bg-zinc-800' key={repo.id}>
                            <div className='flex justify-center items-center w-full h-[10%] text-center lg:text-xs' >{repo.name}</div>
                            <div className=' w-full h-[60%] bg-white'>
                                <div className={`relative h-full w-full icon ${repo.name} `}>
                                    <div className='relative z-2 w-full h-full max-sm:px-2 sm:px-8 text-transparent text-justify font-semibold pt-4 hover:text-black hover:backdrop-blur-[12px] ease-in-out duration-300 sm:text-sm max-sm:text-[0.6rem]'>{repo.description}</div>
                                </div>
                            </div>
                            <div className='ps-2 bg-indigo-400 h-[30%] space-x-0 flex'>
                                <div className='grid grid-flow-col auto-cols-max gap-1 w-[80%] h-[full] content-center'>
                                    {languages.map((l:languages) => {
                                        const divs = []
                                        if(l.id == repo.id){
                                            for(const [key,value] of Object.entries(l.data)){
                                                if(key.toLowerCase()=='blade'){
                                                    continue
                                                }
                                                divs.push(<div className={`icon ${key.toLowerCase()}bw min-w-10 min-h-10`}></div>)
                                            }
                                            return(divs)
                                
                                        }
                                
                                    }
                                    )}
                                </div>
                                <div className='w-[21%] h-full p-5 hover:p-[0.5rem] ease-in-out duration-300 self-center test bg-blue-300'>
                                    <Link href={repo.html_url} target='blank'>
                                        <div className='icon rightarrow w-full h-full'></div>
                                    </Link>
                                </div>
                            </div>    
                                                    
                        </SwiperSlide>
                        
                    )
                }) : ''}
            </Swiper>
        </main>
        </>
    );
}

export default Page;
