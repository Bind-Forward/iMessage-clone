import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useState } from 'react'
import "./Chat.css"

function Chat() {

    const [input, setInput] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        setInput("");

    }

    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">Channel name</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat_messages">
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a message</h2>
                <h2>i am a messa</h2>
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
