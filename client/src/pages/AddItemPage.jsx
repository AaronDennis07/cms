import React, { useState } from 'react'
import AddItem from '../components/AddItem'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cloudName = 'aaron07';

const unsignedUploadPreset = 'wzko6o6z';


const AddItemPage = () => {

  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  const [file,setFile] = useState()

  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('file', file);
  
    fetch(url, {
      method: 'POST',
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        // File uploaded successfully
        const url = data.url;
        console.log(url)
        setFile(url)
      })
      .catch((error) => {
        console.error('Error uploading the file:', error);
      });
  }

  const handleNewItem = async (data, event) => {
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/products',
        data: JSON.stringify({
          name:data.name,
          price:parseFloat(data.price),
          image:file,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        console.log(response.data)
        navigate("/admin/dashboard")    
    } catch (error) {
      console.log(error)
      setSubError('Something went wrong')
    }
  }

  return <AddItem handleNewItem={handleNewItem} uploadFile={uploadFile} error={subError}/>
}

export default AddItemPage