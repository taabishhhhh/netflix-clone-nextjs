import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Select, Button } from '.'
import { languageData } from '../../data'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <Link href='/'>
            <Image src='/Netflix-Logo.wine-cropped.svg' alt='logo' width={145} height={20}/>
        </Link>
        <div className='flex space-x-6'>
            <Select data={languageData}/>
            <Button text='Sign In' extraclasses=''/>
        </div>
    </nav>
  )
}

export default Navbar