import React, { useEffect, useState } from 'react'
import EditEvidence from '../components/EditEvidence'
import Navbar from '../components/Navbar'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'


const EditEvidencePage = () => {
    const [params,setParams] = useSearchParams()
    const id = params.get("id")
    console.log(params.get("id")) 
     const [evidence,setEvidence] = useState({})
   
    const [subError,setSubError] = useState()
    const navigate = useNavigate()
    
    const getEvidence = async(id)=>{
        console.log(id)
       
            axios({
              method: 'get',
              url: `http://localhost:8080/api/v1/evidence/${id}`,
            
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }).then((data)=>{
                const fetched = data.data
                console.log(fetched)
                setEvidence(()=>fetched)
            })
    }

    useEffect(()=>{
        getEvidence(id)
        console.log(evidence)
    },[])


    const handleEdit = async(data,event)=>{

        console.log("data",data)
        console.log(data)
        try {
          const response = await axios({
            method: 'post',
            url: `http://localhost:8080/api/v1/evidence/${id}`,
            data: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
              
              console.log(response.data)
                navigate("/")
          } catch (error) {
            setSubError('Something went wrong')
          }
    }
  return (
    <div>
        <Navbar/>
        <EditEvidence evidence={evidence} caseNo={evidence.caseNo} typeOfEvidence={evidence.typeOfEvidence}  error={subError} handleEdit={handleEdit} id={id}/>
    </div>
  )
}

export default EditEvidencePage