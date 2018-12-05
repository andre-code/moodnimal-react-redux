import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MainMenu.css'; 

const MainMenu = props => { 
   return (
    <nav role="menubar">
     <label htmlFor="icon-menu-hamburger">
       <input type="checkbox" id="icon-menu-hamburger"/>
       <div className="container icon-menu-hamburger">
         <div className="menu"></div>
       </div>
       <ul className="menu-ul">
           <li>
            <Link  key="list" to = {`/`}> List </Link>
           </li>
           <li>
           <Link  key="upload" to = {`/upload`}> Upload Photo </Link>
           </li>
         </ul>
     </label>    
   </nav>
   );
}

export default MainMenu;