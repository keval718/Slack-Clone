import React from 'react';
import "./SideBarOption.css";


function SidebarOption({Icon,title}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebarOption_icon"></Icon>}
            {Icon ?(
             <h3>{title}</h3>
            ):(
                <h3 className="sidebarOption_channel">
                   <span className="sidebarOption_hash"> #{title}</span>
                    </h3> 
            )}
            
        </div>
    )
}

export default SidebarOption
