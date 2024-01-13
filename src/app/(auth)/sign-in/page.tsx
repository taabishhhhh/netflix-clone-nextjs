import React, { useState } from 'react'
import bg from '../../../../public/hero-image.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Input } from '@/components'
import { Checkbox } from '@mui/material'

const SignIn = () => {
  // const [rememberMeChecked, setRememberMeChecked] = useState<boolean>(true)
  return (
    <div className='pb-20' style={{
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${bg.src})`,
      width: '100%',
    }}>
      <div className='pt-6 px-14'>
        <div>
          <Link href='/'>
            <Image src='/Netflix-Logo.wine-cropped.svg' alt='logo' width={165} height={20} />
          </Link>
        </div>
        <div className='my-6 bg-black/80 w-3/12 h-3/4 mx-auto p-16'>
          <h3 className='text-3xl font-semibold mb-4'>Sign In</h3>
          <Input name='email' placeholder='Email or Phone number' extraClasses='my-2'/>
          <Input name='password' extraClasses='my-2' placeholder='Password' type='password'/>
          <Button text='Sign in' extraclasses={'mt-8 w-full py-4 font-medium'}/>
          <div className='flex items-center justify-between mt-4 text-gray-500'>
            <div className='flex items-center gap-1'>
              <Checkbox size='small' className='p-0 m-0' sx={{color: 'gray'}} defaultChecked/>
              <p className='text-xs '>Remember me</p>
            </div>
            <Link href={'#'} className='text-xs'>Need Help?</Link>
          </div>
          <div className='mt-24 mb-20 text-gray-500'>
            <p>
              New to Netflix? <Link href={'#'} className='text-white'>Sign up now.</Link>
            </p>
            <p className='text-xs mt-3'>This page is protected by Google reCAPTCHA to<br/> ensure you're not a bot. <Link href={'#'} className='text-blue-700'>Learn more.</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignIn