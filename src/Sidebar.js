import { Button, IconButton } from '@material-ui/core';
import React from 'react';

import SidebarOption from './SidebarOption';

import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhoneIcon from '@material-ui/icons/Phone';

import './Sidebar.css';

function Sidebar(){
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar_compose">
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={3} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={1} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={7} />
            <SidebarOption Icon={SendIcon} title="Sent" number={19} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={4} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={""} />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;