import React from 'react';
import './Sidebar.css';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

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
            <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {/* Connect to DB and list all the Channel */}
            {/* SlideBar Option */}

        
        </div>
    )
}

export default Sidebar
