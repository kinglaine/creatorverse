/*
 This component should contain the content creator's information (name, url, description, and imageURL (optional)) 
 so it can be displayed on the main page. 
*/
import React from 'react'

export default function contentCreator({name, url, description, imageURL}) {
  return (
    <div>
        <p>This is creator name:  {name}</p>
        <a href={url}>This is url: {url}</a>
        <p>This is creator description: {description}</p>
        <img src={imageURL} alt='This is creator image'></img>
    </div>
  )
}
