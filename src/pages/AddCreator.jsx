//page to allow the user to add a new content creator
import React, {useState} from 'react'
import {supabase} from '../client'
export default function AddCreator() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    imageUrl: ''
  });

  const insertRowInCreatorTable = async () => {
    const { data, error } = await supabase
    .from('creators')
    .insert([
      {name: formData.name, url: formData.url, description: formData.description, imageURL: formData.imageUrl},
    ])
    .select();
    if(error){
      console.log("An Error occured while inserting")
    }else{
      console.log("Insertion was a success", data)
    }

  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }
   // Handle form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    insertRowInCreatorTable();
    console.log('name:', formData.name);
    console.log('url:', formData.url);
    console.log('description:', formData.description);
    console.log('imageUrl:', formData.imageUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required></input>
        <label>Description: </label>
        <input type= 'text' name='description' value={formData.description} onChange={handleChange} ></input>
        <label>Url</label>
        <input type='text' name='url' value={formData.url} onChange={handleChange} ></input>
        <label>image url</label>
        <input type='text' name='imageUrl' value={formData.imageUrl} onChange={handleChange} ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
