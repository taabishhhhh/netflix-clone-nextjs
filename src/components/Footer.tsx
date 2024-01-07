import React from 'react'
import {navbarItems} from '../../data'
import { FooterColumn, Select } from '.'

const Footer = () => {
  return (
    <footer className='py-16 text-gray-500'>
      <p className='mb-6'>Questions? Call <a href='tel:000-800-919-1694' className='underline'>000-800-919-1694</a></p>
      <div className='flex mb-6'>
        {navbarItems.length ? navbarItems.map(item=>(<FooterColumn columnArr={item}/>)): ''}
      </div>
      {/* <Select data={[]}/> */}
      <p>Netflix India</p>
    </footer>
  )
}

export default Footer