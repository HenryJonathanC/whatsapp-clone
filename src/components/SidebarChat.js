import { Avatar } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './SidebarChat.css'


const SidebarChat = ({ id, name, addNewChat }) => {
    const [seed, setSeed] = useState("")
    const roomCollectionRef = collection(db, 'rooms' )
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
        // console.log(seed)
    },[])

    const createChat = async() => {
        const roomName=prompt("Please enter name for chat")
        if(roomName){
            await addDoc(roomCollectionRef, {
                name: roomName
            })
        }
    }
  return !addNewChat ? (
    <Link to={ `/rooms/${id}`}>
      <div className='sidebarChat'>
          <Avatar src={`https://api.dicebear.com/5.x/micah/svg?seed=${seed}`}/>
          <div className='sidebarChat_info'>
              <h2>{name}</h2>
              <p>Last message....</p>
          </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat