import React from 'react'
import { DescriptionWithHeadingCardProps } from '../../interfaces'
import { Heading } from '.'

const DescriptionWithHeadingCard = ({headingLines, descriptionLines}:DescriptionWithHeadingCardProps ) => {
    return (
        <div>
            {headingLines.length && headingLines.map(head=>(<Heading text={head}/>))}
            {descriptionLines.length ? <div className='mt-6'>{descriptionLines.map((line:string)=>(
                <p className='font-medium text-2xl'>{line}</p>
            ))}</div>: ''}
        </div>
    )
}

export default DescriptionWithHeadingCard