import React from 'react'
import { InputProps } from '../../interfaces'

const Input = ({ name, type, extraClasses, placeholder }: InputProps) => {
  return (
    <input
      className={`bg-stone-800 border border-gray-800 p-3 px-10 ${extraClasses}`}
      placeholder={placeholder}
      name={name}
      type={type || 'text'} />
  )
}

export default Input