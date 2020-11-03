import React from 'react';
import './Sidebar.css';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                <h2>Practice Slack</h2>
                <h3>
            <FiberManualRecordIcon className="online"></FiberManualRecordIcon>
            Keval Shah
                </h3>
                </div>
            
                <CreateIcon/>
                

            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption title="Youtube" />
        </div>
    )
}

export default Sidebar
