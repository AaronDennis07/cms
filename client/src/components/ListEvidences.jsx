import React from 'react'
import { NavLink } from 'react-router-dom'

const ListApplications = ({evidences,handleDelete}) => {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Type of offense</th>
        <th>Case No</th>
        <th>Type of evidence</th>
        <th>Evidence no</th>
        <th>Document</th>
        <th >Actions</th>

      </tr>
    </thead>
    <tbody>
     
    {evidences.map((evidence,i)=>(
       <tr key={i}>
      
       <td>
       <div className="flex items-center ">
           <div>
             <div className="font-bold">{evidence.offense}</div>
           </div>
         </div>
       </td>
       <td>
       <div className="flex items-center ">
           <div>
             <div className="font-bold">{evidence.caseNo}</div>
           </div>
         </div>
       </td>
       <td>
       <div className="flex items-center ">
           <div>
             <div className="font-bold">{evidence.evidenceNo}</div>
           </div>
         </div>
       </td>
       <td>
       <div className="flex items-center ">
           <div>
             <div className="font-bold">{evidence.typeOfEvidence}</div>
           </div>
         </div>
       </td>
       <td>
       <div className="flex items-center ">
           <div>
             <div className="font-bold">{evidence.document}</div>
           </div>
         </div>
       </td>
       <th>
         <NavLink className="btn btn-info btn-sm  mr-2" to={`/editEvidence?id=${evidence.id}`}>Update</NavLink>
         <button  className="btn btn-error btn-sm " onClick={()=>handleDelete(evidence.id)}>Delete</button>
       </th>
      
     </tr>
    ))}
      
    </tbody>
    
    
  </table>
</div>
    </div>
  )
}

export default ListApplications