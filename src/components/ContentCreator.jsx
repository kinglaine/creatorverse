import React from 'react'
import { useNavigate } from "react-router-dom";
import { faEdit, faInfo} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function contentCreator({name, URL, description, image, id}) {
  const navigate = useNavigate();
  const handleNavigateToSingleView = () => {
    navigate(`/view/${id}`);
  };
  const handleNavigateToEditCreator = () => {
    navigate(`/edit/${id}`);
  };
  
  return (
    <div className="bg-black w-64 p-3 ml-3 mt-3">
        <img src={image} alt='This is creator image' style={{color:'white'}} height="200px" width="300px"></img>
        <p style={{color: '#00a3c4'}}>{name}</p>
        <div className="flex justify-between">
          <a href={URL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ color: 'white' }} icon={faYoutube} />
          </a>
          <FontAwesomeIcon style={{ color: 'white', cursor: 'pointer'}} icon={faEdit} onClick={handleNavigateToEditCreator}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:'white', cursor: 'pointer'}} icon={faInfo} onClick={handleNavigateToSingleView}></FontAwesomeIcon>
        </div>
        <p style={{color: "white"}} className="break-words">{description}</p>
    </div>
  )
}