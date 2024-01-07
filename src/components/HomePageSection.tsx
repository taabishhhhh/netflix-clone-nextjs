import React from 'react'
import { HomePageSectionProps } from '../../interfaces'

const HomePageSection = ({ children }: HomePageSectionProps) => {
  return (
    <div className='flex items-center justify-between h-600 py-16 w-full'>
      {children}
    </div>
  )
}

export default HomePageSection