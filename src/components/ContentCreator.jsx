import React from 'react'

export default function contentCreator({name, URL, description, image}) {
  return (
    <div>
        <p>This is the creator name: {name}</p>
        <p>This is URL: {URL}</p>
        <p>This is description: {description}</p>
        <img src={image} alt='This is creator image'></img>
    </div>
  )
}