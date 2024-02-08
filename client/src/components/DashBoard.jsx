import React from 'react'

const DashBoard = ({ usn, semester, name, department, email,section}) => {
  return (
    <div className=' ml-24 '>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Type of offence</p>
        
        <p className='text-xl'><span className='pr-5'> :</span> {name}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Case no. </p>
        <p className='text-xl'><span className='pr-5'> :</span> {email}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Type of evidence </p>
        <p className='text-xl'><span className='pr-5'> :</span> {usn}</p>
       </div>
       <div className='flex my-9 '>
        <p className='text-xl font-bold w-40'>Evidence no.  </p>
        <p className='text-xl'> <span className='pr-5'> :</span> {department}</p>
       </div>
      
    </div>
  )
}

export default DashBoard