import React from 'react';
import { useHistory } from 'react-router-dom';
import { Checkbox, IconButton } from '@material-ui/core';

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelIcon from '@material-ui/icons/Label';

import './EmailRow.css';

function EmailRow({ id, title, subject, time }){
    const history = useHistory();

    return (
        <div onClick={() => history.push("mail")} className="emailRow">
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelIcon />
                </IconButton>
            </div>
            <h3 className="emailRow_title">
                {title}
            </h3>
            <div className="emailRow_subject">
                <h4>{subject}</h4>
            </div>
            <p className="emailRow_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow;