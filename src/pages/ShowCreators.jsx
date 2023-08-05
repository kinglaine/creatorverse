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
    <div>
      {
        creatorsList.length > 0? 
        creatorsList.map((creator) => {
          return <ContentCreator key={creator?.id} name={creator?.name} description={creator?.description} URL={creator?.url} image={creator?.image}></ContentCreator>
        }):
        <p>There are no creators Yet!</p>
      }
    </div>
  )
}
