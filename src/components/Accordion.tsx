'use client';
import React from 'react'
import { AccordionProps } from '../../interfaces'
import {Add, Close} from '@mui/icons-material';

const Accordion = ({question, answers, isOpen, index, setActiveAccordian}:AccordionProps ) => {
  return (
    <>
        <div 
          className='w-full p-6 bg-neutral-700 flex justify-between hover:bg-zinc-800' 
          onClick={()=>{setActiveAccordian(index)}}>
            <p>{question}</p>
            {isOpen? <Close fontSize='large'/> : <Add fontSize='large'/>}
        </div>
        {isOpen ? 
          <div className='max-w-full p-6 bg-neutral-700'>
            {answers.map((ans:string, index)=>(
            <>
              <p className='text-wrap	'>{ans}</p>{index != answers.length-1 ? <br/>: ''}
            </>))}
          </div> :
         ''}
    </>
  )
}

export default Accordion