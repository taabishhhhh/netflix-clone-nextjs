import React from 'react'
import { Button, Heading, Input } from '.'

const Hero = ({className}: {className: string;}) => {
  return (
    <div className='py-48'>
      <Heading text='Unlimited movies, TV shows and more' />
      <div className='font-medium text-2xl text-center mt-4'>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </div>
      <div className='text-xl text-center mt-4'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className='flex items-center justify-center gap-3 mt-4'>
        <Input name='email' placeholder='Email address' />
        <Button text='Get Started  >' variant='big' />
      </div>
    </div>
  )
}

export default Hero