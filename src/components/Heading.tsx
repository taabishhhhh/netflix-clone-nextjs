import React from 'react'

const Heading = ({text}: {text:string;}) => {
  return (
    <div className='text-5xl font-extrabold	 text-center'>
        <h1>{text}</h1>
      </div>
  )
}

export default Heading