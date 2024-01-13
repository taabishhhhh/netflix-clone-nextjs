'use client';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Select, Button } from '.'
import { languageData } from '../../data'
import {usePathname} from 'next/navigation'
const Navbar = () => {

  const pathname = usePathname()
  console.log('pathname', pathname)
  return (
    <nav className='flex items-center justify-between py-6'>
        <Link href='/'>
            <Image src='/Netflix-Logo.wine-cropped.svg' alt='logo' width={150} height={20}/>
        </Link>
        <div className='flex space-x-6'>
            <Select data={languageData}/>
            <Link href='/sign-in'>
              <Button text='Sign In'/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar

