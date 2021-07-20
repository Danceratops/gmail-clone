import React from 'react';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelIcon from '@material-ui/icons/Label';
import PrintIcon from '@material-ui/icons/Print';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Mail.css';

function Mail(){
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MarkunreadIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon />            
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Mail;