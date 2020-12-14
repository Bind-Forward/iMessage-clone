import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./Chat.css"
import { selectchatId, selectchatName } from './features/chatSlice';
import db from './firebase';
import Message from "./Message";
import firebase from "firebase";
import { selectUser } from './features/userSlice';

function Chat() {

    const [input, setInput] = useState("");
    const chatName = useSelector(selectchatName);
    const chatId = useSelector(selectchatId);
    const [messages, setMessages] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        if(chatId){
            db.collection("chats").doc(chatId).collection("messages")
            .orderBy("timestamp","desc").onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(), 
                }
                )))
            ));
        }
    },[chatId]);

    const sendMessage = e => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid: user.uid,
            photo: user.photo,
            email:user.email,
            displayName : user.displayName,

        });

        setInput("");

    }

    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat_messages">
                {messages.map(({id, data}) => (
                    <Message 
                        key= {id} contents={data}
                    />
                ))}
                
            </div>

            <div className="chat_input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type message" type="text"/>
                    <button onClick={sendMessage}>Send message</button>
                </form>
                <IconButton >
                    <MicNoneIcon className="chat_mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
