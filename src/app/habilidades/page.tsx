import React from 'react';
import Image from 'next/image';


const Page = () => {
    return (
        <main className='container justify-center h-screen w-screen mx-auto pt-[60px]'>
            <div className='h-full flex justify-center items-center'>
                <section className='pb-10 h-full text-white grid grid-flow-row auto-cols-min min-[500px]:justify-center text-center lg:text-lg '>
                    <div className='self-end'>Ferramentas</div>
                    <div className='grid grid-flow-col gap-4 auto-cols-min justify-center'>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='appium icon row-span-5'></div>
                            <div className='text-sm'>Appium</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='postman icon row-span-5'></div>
                            <div className='text-sm'>Postman</div>
                        </div>
                        <div className='grid grid-flow-row justify-center'>
                            <div className='docker icon row-span-5'></div>
                            <div className='text-sm'>Docker</div>
                        </div>
                    </div>
                    <div className='self-end'>Front-end</div>
                    <div className='px-2 max-[500px]:grid-cols-4 grid grid-cols-5 gap-4 auto-cols-min justify-center'>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='js icon row-span-5'></div>
                            <div className='text-sm'>JavaScript</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='html icon row-span-5'></div>
                            <div className='text-sm'>HTML</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='css icon row-span-5'></div>
                            <div className='text-sm'>CSS</div>
                        </div>
                        <div className='grid grid-flow-row'>
                            <div className='c icon row-span-5'></div>
                            <div className='text-sm'>C</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='csharp icon row-span-5'></div>
                            <div className='text-sm'>CSharp</div>
                        </div>
                    </div>
                    <div className='self-end'>SGBD's</div>
                    <div className='grid grid-flow-col gap-4 auto-cols-min justify-center'>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                                <div className='mysql icon row-span-5'></div>
                                <div className='text-sm'>MySql</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                                <div className='mongo icon row-span-5'></div>
                                <div className='text-sm'>Mongo</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                                <div className='postgre icon row-span-5'></div>
                                <div className='text-sm'>Postgre</div>
                        </div>
                    </div>
                    <div className='self-end'>Frameworks</div>
                    <div className='max-[500px]:grid-rows-4 grid grid-flow-col gap-4 auto-cols-min justify-center'>
                        <div className='grid grid-flow-row'>
                            <div className='node icon row-span-5'></div>
                            <div className='text-sm'>NodeJs</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='next icon row-span-5'></div>
                            <div className='text-sm'>NextJs</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='react icon row-span-5'></div>
                            <div className='text-sm'>React</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='angular icon row-span-5'></div>
                            <div className='text-sm'>Angular</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='net icon row-span-5'></div>
                            <div className='text-sm'>.Net</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='laravel icon row-span-5'></div>
                            <div className='text-sm'>Laravel</div>
                        </div>
                        <div className='grid grid-flow-row auto-cols-min justify-center'>
                            <div className='tailwind icon row-span-5'></div>
                            <div className='text-sm'>Tailwind</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Page;
