import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import { collection, getDocs } from "firebase/firestore"

const Sidebar = () => {
    const [rooms, setRooms]= useState([])
    const roomCollectionRef = collection(db, 'rooms' )
    useEffect(()=>{
        const getName = async () => {
            const data = await getDocs(roomCollectionRef)
            // console.log(data)
            setRooms(data.docs.map((doc)=> (
                {
                    data: doc.data(), 
                    id: doc.id
                }
            )))
            // console.log(rooms)
        }
        getName();
    }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar/>
            <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start a new chat' type='text' />
            </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat addNewChat />
            {rooms.map(room => <SidebarChat key={room.id} id={room.id} name={room.data.name} />)}
        </div>
    </div>
  )
}

export default Sidebar