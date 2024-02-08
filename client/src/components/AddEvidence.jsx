import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
import { useForm } from 'react-hook-form'





const AddEvidence = ({handleNewApplication,error,uploadFile}) => {
  const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } } = useForm({
    mode: 'onBlur' || 'onSubmit'
})
const [subError, setSubError] = useState({ error: null })

const handleImageChange = (e)=>{
    console.log("hi")
   uploadFile( e.target.files[0])
}

  return (
    <div>
       <h1 className="text-center  font-bold text-4xl my-5">Add Evidence</h1>

<section className=" w-1/2 mx-auto" >
    {error&& (<div role="alert" className="alert alert-error mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
    </div>)}
    <form  className="w-full    min-h-screen " onSubmit={handleSubmit(handleNewApplication)}>
        <div className=" mb-4">
            <label htmlFor="offense" className=" text-lg block mr-7 mb-2 w-full">Type of offense</label>
            <input type="text" className={` input input-bordered 
            ${errors.offense && 'input-error'}  ${(touchedFields.offense && !errors.offense) && 'input-success'} w-full `} name="offense" id="offense"  {...register('offense', {
                required: 'Type of offense is required',
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
            ${errors.typeOfEvidence && 'select-error'}  ${(touchedFields.typeOfEvidence && !errors.typeOfEvidence) && 'select-success'} w-full  select select-bordered w-full `} name="typeOfEvidence" id="typeOfEvidence"  {...register('typeOfEvidence', {
                required: 'Type of evidence is required',
            })}
            >
                <option disabled selected value=""></option>
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
        <div className="mb-4">
            <label htmlFor="document" className="text-lg block mr-7 mb-2 w-full">Document </label>
            <input type="file" onChange={handleImageChange} className={` file-input file-input-bordered 
            ${errors.document && 'file-input-error'}  ${(touchedFields.document && !errors.document) && 'file-input-success'} w-full `} name="document" id="document"  {...register('document', {
                required: 'document is required',
                onChange:handleImageChange
            },

            )}

            />
            <ErrorMessage errors={errors} name="document" render={({ message }) => <p className='text-red-600'>{message}</p>} />          </div>
   

        <div className="w-full text-center my-6">
            <button className="btn text-lg bg-[#bb1a34]">Cancel</button>
            <button type="submit" className='bg-[#2c974b] btn text-lg mx-7'>{isSubmitting ? 'Submitting..' :'Submit'}</button>
        </div>
    </form>
</section>
    </div>
  )
}

export default AddEvidence