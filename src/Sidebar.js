import React from 'react'
import "./Sidebar.css"
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { IconButton } from '@material-ui/core';
import SidebarChat from "./SidebarChat";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar_avatar" />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search"></input>
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton">
                    <RateReviewIcon />
                </IconButton>
                
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
