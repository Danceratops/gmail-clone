import { Button } from '@material-ui/core';
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
        </div>
    )
}

export default Sidebar;