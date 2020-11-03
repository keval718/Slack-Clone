 import React from 'react'
 import './Header.css';
 import {Avatar,Input} from "@material-ui/core";
 import AccessTimeIcon from '@material-ui/icons/AccessTime';
 import SearchIcon from '@material-ui/icons/Search';
 import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
 
 function Header() {
     return (
         <div className="header">
             <div className='header_left'>
               {/* avatar for loggen in user */}
             
               <Avatar
               className="header_avtar"
               alt='{user?.displayName}'
               src='{user?.photoUrl}'/>
                 {/* Time Icon */}
               <AccessTimeIcon/>

             </div>
             <div className="header_search">
                 {/* search icon */}
                 <SearchIcon/>
                 
                 {/* Input */}
                 <Input placeholder="Search"></Input>
             </div>
             <div className="header_right">
                 {/* help icon */}
                 <HelpOutlineIcon></HelpOutlineIcon>
             </div>
             
         </div>
     )
 }
 
 export default Header
 