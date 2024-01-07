import React from 'react'
import { languageData } from '../../data'
// import TranslateIcon from '@mui/icons-material/Translate';

const Select = ({data}: {data: Array<any>}) => {
    if (!data.length){
        data = languageData
    }
  return (
    // <div>
      /* <TranslateIcon/> */
      <select className='bg-transparent border-white px-4'>
          {data.length ? data.map((item: any)=>(<option className='text-black	' value={item}>{item}</option>)) : ''}
      </select>
    // </div>
  )
}

export default Select