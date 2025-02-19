import React from 'react';
import Image from "next/image";
import { ButtonPrimary, ButtonOutline } from './Button';
import { Cover } from "@/ui/cover";
import Link from 'next/link';

const Hero = () => {
  return (
    <>
        <section id="home" className='pt-28 lg:pt-36 '>
            <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
                <div>
                    <div className='flex items-center gap-3'>
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <Image src="/Go.png" width={40} height={40} alt='Profile Image' className='img-cover' loading='lazy'/>
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">

                                </span>
                            </span>

                            Available for work
                        </div>
                    </div>
                    <h2 className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15] max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites and Web apps at <Cover>Warp Speed</Cover>
                    </h2>
                    <div className="flex items-center gap-3">
                        <Link href="/Saw-Pyae-Sone-Resume.pdf" download="Saw-Pyae-Sone-Resume.pdf">
                            <ButtonPrimary 
                                label='Download CV'
                                icon='download'
                            />
                        </Link>

                        <ButtonOutline 
                            href="#about"
                            label="Scoll Down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <Image src="/profile-removed.png" width={656} height={800} alt='Profile Image' className='w-full' loading='lazy'/>
                    </figure>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero