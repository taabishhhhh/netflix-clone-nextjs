'use client';
import React, { useState } from 'react'
import { Button, Heading, Input } from '.'
import { FAQData } from '../../data'
import Accordion from './Accordion'

const FAQSection = () => {
    const [activeAccordian, setActiveAccordian] = useState<number | null>(null)

    const mySetActiveIndex = (index: number) => {
        console.log('index', index)
        activeAccordian == index ? setActiveAccordian(null) : setActiveAccordian(index)
    }

    return (
        <div className='w-full py-16 flex flex-col items-center my-container'>
            <Heading text='Frequently Asked Questions' />
            <div className='mt-6 w-full flex flex-col items-center justify-center gap-3 text-2xl'>
                {FAQData.map((faq, index) => (
                    <Accordion
                        question={faq.question}
                        answers={faq.answers}
                        index={index}
                        setActiveAccordian={mySetActiveIndex}
                        isOpen={index == activeAccordian} />
                ))}
            </div>
            <div className='mt-8'>
                <div className='text-xl text-center mt-4'>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='flex justify-center gap-4 mt-4'>
                    <Input placeholder='Email Address' name='email' />
                    <Button text='Get Started  >' variant='big' />
                </div>
            </div>
        </div>
    )
}

export default FAQSection