import React from 'react';
import './Error.css';

export default function Error({message}) {
  return (
    <div className='error_block'>
        <span>{message}</span>
    </div>
  )
}
