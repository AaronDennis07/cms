import { ErrorMessage } from "@hookform/error-message"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import axios from "axios"

const EditEvidence = ({evidence,error,caseNo,typeOfEvidence,handleEdit,id}) => {
    const e = evidence
    console.log(e["offense"])
  const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } ,reset} = useForm({
    mode: 'onBlur' || 'onSubmit',
    
})

useEffect(() => {
    // you can do async server request and fill up form
    axios.get(`http://localhost:8080/api/v1/evidence/${id}`)
     
      .then(data => {
        // data is an object with the default values
        console.log(data)
        reset(data.data);
      });
  }, [reset]);

  return (
    <div>
       <h1 className="text-center  font-bold text-4xl my-5">Edit Evidence</h1>

<section className=" w-1/2 mx-auto" >
    {error&& (<div role="alert" className="alert alert-error mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
    </div>)}
    <form  className="w-full    min-h-screen " onSubmit={handleSubmit(handleEdit)}>
        <div className=" mb-4">
            <label htmlFor="offense" className=" text-lg block mr-7 mb-2 w-full">Type of offense</label>
            <input type="text" className={` input input-bordered 
            ${errors.offense && 'input-error'}  ${(touchedFields.offense && !errors.offense) && 'input-success'} w-full `} name="offense" id="offense"  {...register('offense', {
                required: 'Type of offense is required',
                value:e.offense,
                setValueAs: v => v
            })}

            />
            <ErrorMessage errors={errors} name="offense" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
        <div className="mb-4">
            <label htmlFor="caseNo" className="text-lg block mr-7 mb-2 w-full">Case no</label>
            <input type="text" className={` input input-bordered 
            ${errors.caseNo && 'input-error'}  ${(touchedFields.caseNo && !errors.caseNo) && 'input-success'} w-full `} name="caseNo" id="caseNo"  {...register('caseNo', {
                required: 'Case no is required',
            })}

            />
            <ErrorMessage errors={errors} name="caseNo" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
        <div className="mb-4">
            <label htmlFor="typeOfEvidence" className="text-lg block mr-7 mb-2 w-full">Type of evidence</label>
            <select type="text" className={` 
            ${errors.typeOfEvidence && 'select-error'}  ${(touchedFields.typeOfEvidence && !errors.typeOfEvidence) && 'select-success'}  select select-bordered w-full `} name="typeOfEvidence" id="typeOfEvidence"  {...register('typeOfEvidence', {
                required: 'Type of evidence is required',
            })}
            >
              
                <option value="physical">Physical</option>
                <option value="biological">Biological</option>
                <option value="drug">Drug</option>
                <option value="digital">Digital</option>
                <option value="others">Others</option>
            </select>
            <ErrorMessage errors={errors} name="typeOfEvidence" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
        <div className="mb-4">
            <label htmlFor="evidenceNo" className="text-lg block mr-7 mb-2 w-full">Evidence no</label>
            <input type="text" className={` input input-bordered 
            ${errors.evidenceNo && 'input-error'}  ${(touchedFields.evidenceNo && !errors.evidenceNo) && 'input-success'} w-full `} name="evidenceNo" id="evidenceNo"  {...register('evidenceNo', {
                required: 'Evidence no is required',
            })}

            />
            <ErrorMessage errors={errors} name="evidenceNo" render={({ message }) => <p className='text-red-600'>{message}</p>} />
        </div>
   

        <div className="w-full text-center my-6">
            <button className="btn text-lg bg-[#bb1a34]">Cancel</button>
            <button type="submit" className='bg-[#2c974b] btn text-lg mx-7'>{isSubmitting ? 'Submitting..' :'Submit'}</button>
        </div>
    </form>
</section>
    </div>
  )
}

export default EditEvidence