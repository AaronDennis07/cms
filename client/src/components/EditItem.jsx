import { ErrorMessage } from "@hookform/error-message"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"

const EditItem = ({handleEditItem,error,id}) => {
  const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } ,reset} = useForm({
    mode: 'onBlur' || 'onSubmit'
})
  const navigate = useNavigate()


useEffect(() => {
  
    axios.get(`http://localhost:8080/api/v1/products/${id}`)
     
      .then(data => {
        console.log(data)
        reset(data.data);
      });
  }, [reset]);
  return (
    <div>
     <h1 className="text-center  font-bold text-4xl my-5">Edit Item</h1>

    <section className=" w-1/2 mx-auto" >
        {error&& (<div role="alert" className="alert alert-error mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
        </div>)}
        <form  className="w-full    min-h-screen " onSubmit={handleSubmit(handleEditItem)}>
            <div className=" mb-4">
                <label htmlFor="name" className=" text-lg block mr-7 mb-2 w-full">Name</label>
                <input type="text" className={` input input-bordered 
                ${errors.name && 'input-error'}  ${(touchedFields.name && !errors.name) && 'input-success'} w-full `} name="name" id="name"  {...register('name', {
                    required: 'name is required',
                })}
    
                />
                <ErrorMessage errors={errors} name="name" render={({ message }) => <p className='text-red-600'>{message}</p>} />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="text-lg block mr-7 mb-2 w-full">Price</label>
                <input type="number" className={` input input-bordered 
                ${errors.price && 'input-error'}  ${(touchedFields.price && !errors.price) && 'input-success'} w-full `} name="price" id="price"  {...register('price', {
                    required: 'price is required',
                })}
    
                />
                <ErrorMessage errors={errors} name="price" render={({ message }) => <p className='text-red-600'>{message}</p>} />
            </div>
        
        
    
            <div className="w-full text-center my-6">
                <button className="btn text-lg bg-[#bb1a34]" onClick={()=>navigate('/admin/dashboard')}  >Cancel</button>
                <button type="submit" className='bg-[#2c974b] btn text-lg mx-7'>{isSubmitting ? 'Updating..' :'Update'}</button>
            </div>
        </form>
    </section>
        </div>
  )
}

export default EditItem