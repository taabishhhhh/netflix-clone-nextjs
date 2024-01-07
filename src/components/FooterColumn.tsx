import Link from 'next/link'
import React from 'react'

const FooterColumn = ({columnArr}: {columnArr: Array<string>}) => {
  return (
    <div className='flex flex-col w-1/4'>
        {columnArr.map((column)=>(<Link className='mb-4 underline text-sm' href={'#'}>{column}</Link>))}
    </div>
  )
}

export default FooterColumn