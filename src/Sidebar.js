import { Button } from '@material-ui/core';
import React from 'react';

import SidebarOption from './SidebarOption';

import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';

import './Sidebar.css';

function Sidebar(){
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar_compose">
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar;