import React from 'react'
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ScannerComponent = () => {

    const [data, setData] = useState('No result');
    
  return (
    <div className=''>
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
      <p>{data}</p>
    </div>
  )
}

export default ScannerComponent