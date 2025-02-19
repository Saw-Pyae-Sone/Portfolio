import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CopyButton from './Email';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Saw-Pyae-Sone'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pyae-sone-15a799302'
    },
    // {
    //   label: 'Twitter X',
    //   href: 'https://x.com/codewithsadee_'
    // },
    // {
    //   label: 'Instagram',
    //   href: 'https://www.instagram.com/codewithsadee'
    // },
    // {
    //   label: 'CodePen',
    //   href: 'https://codepen.io/codewithsadee'
    // }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container mt-10">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <CopyButton />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className='mb-2 reveal-up'>Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <Link href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up' rel="noopener noreferrer">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className='mb-2 reveal-up'>Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-8 mb-8">
                <Link href="/" className='logo reveal-up'>
                    <Image src="/logo.png" alt='Logo' width={40} height={40} loading='lazy' />
                </Link>

                <p className='text-zinc-500 text-sm reveal-up'>
                    &copy; {new Date().getFullYear()} <span className='text-zinc-200'>SawPyaeSone: This project is built by using Next.js and Tailwind CSS</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer