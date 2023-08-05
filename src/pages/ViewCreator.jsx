// page to view a single content creator
import React, { useEffect, useState } from 'react'
import {supabase} from '../client'

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
  }, [])
  return (
    <div>
      <p>Hello i'm a creator</p>
      <p>My name is {creator?.name}</p>
      <p>Description {creator?.description}</p>
    </div>
  )
}
