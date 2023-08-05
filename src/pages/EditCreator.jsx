//page to allow the user to update a content creator's information
import React, {useEffect, useState} from 'react'
import {supabase} from '../client'
import { useNavigate } from "react-router-dom";

export default function EditCreator() {
  const url = window.location.href; // Get the current URL
  const segments = url.split('/'); // Split the URL by '/'
  const creatorId = segments[segments.length - 1];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: null,
    description: null,
    url: null,
    imageURL: null
  });
  const fecthCreatorInfo = async () => {
    if(creatorId){
      let { data: creator, error } = await supabase.from('creators').select().eq('id', creatorId);
      setFormData(creator[0]);
      console.log("An error occured retrieving creator", error)
      console.log("This is creator", creator);
    }
  }
  useEffect(() => {
    fecthCreatorInfo();
  },[]);
  const editMatchingRowInCreatorTable = async () => {
    const { data, error } = await supabase
    .from('creators')
    .update({name: formData.name, url: formData.url, description: formData.description, imageURL: formData.imageURL})
    .eq('id', creatorId)
    .select()
    if(error){
      console.log("An Error occured while inserting")
    }else{
      console.log("Update was a success", data);
    }

  }

  const deleteMatchingRowInCreatorTable = async () => {
    const { error } = await supabase
    .from('creators')
    .delete()
    .eq('id', creatorId);
    if(error) {
      console.log(error);
    }else{
      navigate('/');
      console.log("Deletion was a success");
    }
  }

  const handleDeleteCreator = () => {
    deleteMatchingRowInCreatorTable();
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }
   // Handle form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    editMatchingRowInCreatorTable();
    console.log('name:', formData.name);
    console.log('url:', formData.url);
    console.log('description:', formData.description);
    console.log('imageURL:', formData.imageURL);
  };

  return (
    <div className="bg-slate-800 border-t-2 border-gray-700 flex flex-col p-10 h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-20">
        <label>
          <p style={{color:'white'}}>Name</p>
          <input className="w-96 h-14 p-1 rounded"  type='text' name='name' value={formData.name || ''} onChange={handleChange} required></input>
        </label>

        <label>
          <p style={{color:'white'}}>image url</p>
          <input className="w-96 h-14 p-1 rounded" type='text' name='imageURL' value={formData.imageURL || ''} onChange={handleChange} required></input>
        </label>
        
        <label>
          <p style={{color:'white'}}>Description</p>
          <input className="w-96 h-14 p-1 rounded" type= 'text' name='description' value={formData.description || ''} onChange={handleChange} required></input>
        </label>
        
        <label>
          <p style={{color:'white'}}>Youtube</p>
          <input className="w-96 h-14 p-1 rounded" type='text' name='url' value={formData.url || ''} onChange={handleChange} required></input>
        </label>
        
        <div className="flex justify-center space-x-4">
          <button type='SUBMIT' style={{color: 'white', borderRadius: '10px'}} className="bg-cyan-600 w-32 h-10">SUBMIT</button>
          <button style={{color: 'white', borderRadius: '10px'}} className="w-32 h-10 bg-red-600" onClick={handleDeleteCreator}>DELETE</button>
        </div>
      </form>
    </div>
  )
}
