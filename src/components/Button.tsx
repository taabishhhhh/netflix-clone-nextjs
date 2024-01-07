import React from 'react'
import { ButtonProps } from '../../interfaces'

const variantStyles = {
  'big': 'py-3 px-5 font-semibold text-2xl',
  'small': 'py-1.5 px-3 text-sm font-semibold',
}

const Button = ({text, extraclasses, variant='small'}: ButtonProps) => {
  return (
    <button className={`bg-rose-600 rounded-md ${variantStyles[variant]} ${extraclasses}`}>{text}</button>
  )
}

export default Button