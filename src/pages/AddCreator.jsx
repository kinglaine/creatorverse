//page to allow the user to add a new content creator
import React, {useState} from 'react'
import {supabase} from '../client'
export default function AddCreator() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    youtubeUrl: '',
    twitterUrl: '',
    instagram: '',
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
    <div className="bg-slate-800 border-t-2 border-gray-700 flex flex-col p-10 h-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-5">
          <label>
            <p style={{color:'white', fontSize:'20px'}}>Name</p>
            <p></p>
            <input className="w-96 h-14 p-1 rounded"  type='text' name='name' value={formData.name || ''} onChange={handleChange} required></input>
          </label>

          <label>
            <p style={{color:'white', fontSize:'20px'}}>Image</p>
            <p style={{color:'white'}} className="break-words w-96 mb-1"><i>Provide a link to an image of your creator. Be sure to include the http://</i></p>
            <input className="w-96 h-14 p-1 rounded" type='text' name='imageURL' value={formData.imageUrl || ''} onChange={handleChange} required></input>
          </label>
          
          <label>
            <p style={{color:'white', fontSize:'20px'}}>Description</p>
            <p style={{color:'white'}} className="break-words w-96 mb-1"><i>Provide a description of the creator. Who are they? What makes them interesting?</i></p>
            <input className="w-96 h-14 p-1 rounded" type= 'text' name='description' value={formData.description || ''} onChange={handleChange} required></input>
          </label>

          <label>
            <h1 style={{color:'#00a3c4'}}>SOCIAL MEDIA LINKS</h1>
            <p style={{color:'white'}} className="w-96"><i>Provide at least one of the creator's social media links.</i></p>
            <p style={{color:'white', fontSize:'20px'}}>Youtube</p>
            <input className="w-96 h-14 p-1 rounded" type='text' name='url' value={formData.youtubeUrl || ''} onChange={handleChange} required></input>
          </label>
          <label>
            <p style={{color:'white', fontSize:'20px'}}>Twitter</p>
            <input className="w-96 h-14 p-1 rounded" type='text' name='url' value={formData.twitterUrl || ''} onChange={handleChange} required></input>
          </label>
          <label>
            <p style={{color:'white', fontSize:'20px'}}>Instagram</p>
            <input className="w-96 h-14 p-1 rounded" type='text' name='url' value={formData.instagram || ''} onChange={handleChange} required></input>
          </label>
        </div>
          <button type='submit' style={{color: 'white', borderRadius: '10px'}} className="bg-cyan-600 w-96 h-10 mt-2">SUBMIT</button>
      </form>
    </div>
  )
}
