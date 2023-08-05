// page to view a single content creator
import React, { useEffect, useState } from 'react'
import {supabase} from '../client'
import { useNavigate } from "react-router-dom";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ViewCreator() {
  const url = window.location.href; // Get the current URL
  const segments = url.split('/'); // Split the URL by '/'
  const creatorId = segments[segments.length - 1];

  console.log("id is", creatorId);
  const [creator, setCreator] = useState(null);

  const fecthCreatorInfo = async () => {
    if(creatorId){
      let { data: creator, error } = await supabase.from('creators').select().eq('id', creatorId);
      setCreator(creator[0]);
      console.log("An error occured retrieving creator", error)
      console.log("This is creator", creator);
    }
  }

  useEffect(() => {
    fecthCreatorInfo();
  }, []);

  const navigate = useNavigate();
  const handleNavigateToEdit = () => {
    navigate(`/edit/${creatorId}`);
  };
  
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

  return (
    <div className="bg-slate-800 border-t-2 border-gray-700 flex flex-col p-10 h-screen">
      <div className="flex">
        <img src={creator?.imageURL} alt='This is the creator photo' width="300px"></img>
        <div className="w-64 ml-5">
          <p style={{color:'#00a3c4'}}>{creator?.name}</p>
          <a href={URL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ color: 'white' }} icon={faYoutube} />
          </a>
          <p style={{color: "white"}} className="break-words">Description {creator?.description}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button style={{color: 'white', borderRadius: '10px'}} className="bg-cyan-600 w-32 h-10" onClick={handleNavigateToEdit}>EDIT</button>
        <button style={{color: 'white', borderRadius: '10px'}} className="w-32 h-10 bg-red-600" onClick={handleDeleteCreator}>DELETE</button>
      </div>
    </div>
  )
}
