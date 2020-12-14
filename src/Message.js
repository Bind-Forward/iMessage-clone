import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Message.css";
import * as timeago from 'timeago.js';

const Message = forwardRef(({id , contents:{
    timestamp, displayName, email, message , photo, uid
}},ref) => {
    const user = useSelector(selectUser);

    return (
        <div ref={ref} className={`message ${user.email === email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo} />
            <p>{message}</p>
            {/* <h6 className="message_name">{displayName}</h6> */}
            <small>{timeago.format(new Date(timestamp?.toDate()))}</small>
        </div>
    )
})

export default Message;
