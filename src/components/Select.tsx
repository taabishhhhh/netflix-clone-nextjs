import React from 'react'
import { languageData } from '../../data'
import TranslateIcon from '@mui/icons-material/Translate';

const Select = ({data}: {data: Array<any>}) => {
    if (!data.length){
        data = languageData
    }
  return (
    <div className='border border-slate-400	 flex items-center justify-start gap-1 px-2'>
      <TranslateIcon fontSize='small'/>
      <select className='bg-transparent inline-block'>
          {data.length ? data.map((item: any)=>(<option className='text-black' value={item}>{item}</option>)) : ''}
      </select>
    </div>
  )
}

export default Select