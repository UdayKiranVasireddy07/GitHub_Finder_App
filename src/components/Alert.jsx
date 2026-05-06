import React from 'react'
import {useContext} from 'react';
import AlertContext from '../context/alert/AlertContext';
function Alert() {
    const {alert} = useContext(AlertContext);
  return (
    alert !== null && (
        <p className={`flex items-start mb-4 space-x-2 ${alert.type === 'error' ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'} p-3 rounded-lg`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>{alert.msg}</span>
        </p>
    )
  )
}

export default Alert
