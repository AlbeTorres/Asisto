import React from 'react'
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {FaRegTimesCircle} from 'react-icons/fa'

const ScannerComponent = () => {

    const [data, setData] = useState('No result');
    
  return (
    <div className='h-96   w-60 '>
     <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p className='text-center my-2 '>{data}</p>

      <label htmlFor="my-modal" className=' mx-auto w-full btn'>Agregar</label>

      <label htmlFor="my-modal" className='absolute top-2 right-2'>
      <FaRegTimesCircle className='text-xl '/>
      </label>
    </div>
  )
}

export default ScannerComponent