import React from 'react'
import { InputProps } from '../../interfaces'

const Input = ({ name, type, extraClasses, placeholder }: InputProps) => {
  return (
    <input
      autoComplete={'off'}
      className={`bg-stone-800 border rounded p-3 pe-20  ${extraClasses}`}
      placeholder={placeholder}
      name={name}
      type={type || 'text'} />
  )
}

export default Input