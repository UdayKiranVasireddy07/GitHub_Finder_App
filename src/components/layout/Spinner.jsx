import React from 'react'
import loading2 from './assests/loading1.gif';
export default function Spinner() {
  return (
    <div   className="w-100 mt-20">
      <img width={180} 
      className="text-center mx-auto"
      src={loading2} 
      alt="Loading..." />
    </div>
  )
}


