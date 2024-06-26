import React, { useState } from 'react';

import {
    // FaTh,
    FaBars,
    // FaUserAlt,
    // FaRegChartBar,
    FaCommentAlt,
    // FaShoppingBag,
    // FaThList,
    FaHome,
    FaSearch,
    // FaChair,
    // FaTextHeight,
    FaLink,
    FaMicrophone,
    FaBell
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"search",
            icon:<FaSearch/>
        },
        {
            path:"/analytics",
            name:"chat",
            icon:<FaCommentAlt/>
        },
        {
            path:"/comment",
            name:"link",
            icon:<FaLink/>
        },
        {
            path:"/product",
            name:"mic",
            icon:<FaMicrophone/>
        },
        {
            path:"/productList",
            name:"Bell",
            icon:<FaBell/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "150px" : "50px"}} className="sidebar">
               <div className="top_section">
                    

                        {/* <img src= './images/logo2.png' alt="logo" /> */}
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                        <div className="logowd">
                            <img src= './images/logo2.png' alt="logo" />
                        </div>
                    </h1>
                        <div style={{marginLeft: isOpen ? "10px" : "0px"}} className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    
               </div>
               <div className="mid_section">

               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"} } className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
