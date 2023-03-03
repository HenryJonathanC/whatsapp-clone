import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import './Chat.css'


const Chat = () => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const roomID  = useParams()
    const [roomName, setRoomName] = useState("")
    const roomDocRef = doc(db, 'rooms', `rQtexKJRAVJWwrhY8Ipj`)

    useEffect(()=>{
        const getRoom = async () =>{
            console.log('first')
            if(roomID){
                console.log('second')
                const data = await getDoc(roomDocRef)
                console.log(data)                
            }
        }
        getRoom();
    }, [])

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
        // console.log(seed)
    },[])

    const sendMessage = e => {
        e.preventDefault()
        setInput('')
    }

  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://api.dicebear.com/5.x/micah/svg?seed=${seed}`}/>
            <div className ='chat_headerInfo'>
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
            <p className={`chat_message ${true && 'chat_receiver'}`}>
                <span className='chat_name'>TWD</span>
                Hope you are doing fine
                <span className='chat_timestamp'>{new Date().toLocaleTimeString()} </span>
            </p>
            <p className='chat_message'>
                <span className='chat_name'>Henry</span>
                Hey Guys
                <span className='chat_timestamp'>{new Date().toLocaleTimeString()} </span>
            </p>
        </div>
        <div className='chat_footer'>
            <InsertEmoticon />
            <form>
                <input 
                    type='text' 
                    placeholder='Type a message' 
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                />
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <Mic />
        </div>
    </div>
  )
}

export default Chat