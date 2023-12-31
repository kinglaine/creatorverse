//page to show all content creators
import React, { useEffect, useState } from 'react'
import {supabase} from '../client'
import ContentCreator from '../components/ContentCreator'

export default function ShowCreators() {
  const [creatorsList, setCreatorslist] = useState([]);
  const fetchAllContentCreators = async () => { 
    let { data: creators, error } = await supabase.from('creators').select('*');
    setCreatorslist(creators);
    console.log("An error occured", error);
    console.log("This is the data returned", creators);
  }
  
  useEffect(() => {
    fetchAllContentCreators();
  }, [])
  return (
    <div className="bg-slate-800 border-t-2 border-gray-700 flex justify-center flex-row flex-wrap p-10 h-screen">
      {
        creatorsList.length > 0? 
        creatorsList.map((creator) => {
          return <ContentCreator key={creator?.id} id={creator?.id} name={creator?.name} description={creator?.description} URL={creator?.url} image={creator?.imageURL}></ContentCreator>
        }):
        <p style={{color: 'white'}}>There are no creators Yet!</p>
      }
    </div>
  )
}
