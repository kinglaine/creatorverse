import React from 'react'
import { useNavigate } from "react-router-dom";

export default function contentCreator({name, URL, description, image, id}) {
  const navigate = useNavigate();
  const handleNavigateToSingleView = () => {
    navigate(`/view/${id}`);
  };
  const handleNavigateToEditCreator = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div>
        <p>This is the creator name: {name}</p>
        <p>This is URL: {URL}</p>
        <p>This is description: {description}</p>
        <img src={image} alt='This is creator image'></img>
        <button onClick={handleNavigateToEditCreator}>Edit this creator</button>
        <br></br>
        <button onClick={handleNavigateToSingleView}>go to creator button</button>
    </div>
  )
}