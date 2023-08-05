//page to allow the user to update a content creator's information
import React, {useEffect, useState} from 'react'
import {supabase} from '../client'

export default function EditCreator() {
  const url = window.location.href; // Get the current URL
  const segments = url.split('/'); // Split the URL by '/'
  const creatorId = segments[segments.length - 1];

  const [formData, setFormData] = useState({
    name: null,
    description: null,
    url: null,
    imageUrl: null
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
    .update({name: formData.name, url: formData.url, description: formData.description, imageURL: formData.imageUrl})
    .eq('id', creatorId)
    .select()
    if(error){
      console.log("An Error occured while inserting")
    }else{
      console.log("Update was a success", data);
    }

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
    console.log('imageUrl:', formData.imageUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={formData.name || ''} onChange={handleChange} required></input>
        <label>Description: </label>
        <input type= 'text' name='description' value={formData.description || ''} onChange={handleChange} required></input>
        <label>Url</label>
        <input type='text' name='url' value={formData.url || ''} onChange={handleChange} required></input>
        <label>image url</label>
        <input type='text' name='imageUrl' value={formData.imageUrl || ''} onChange={handleChange} required></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
