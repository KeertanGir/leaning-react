import React, { useState } from "react";
import "./Styles/Header.css"
// import "./Styles/HeaderMy.css"
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Header = () => {

    const [active, setActive] = useState(false)

    const showMenu =() => {
        setActive(!active);

    }

    return ( 
        <div className="header" >
            <div className="header__logo">
                <h1>Keertan Gir Goswami</h1>
            </div>
            <nav style={ showMenu ? { display : "flex" } : {} }>
                
                    <div className="closed" >
                        <Close className="close"  onClick={showMenu}/>
                    </div>
                <ul>
                    <li>
                        <Link to="/" ><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to="/" ><b>About</b></Link>
                    </li>
                    <li>
                        <Link to="/" ><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to="/" ><b>Blogs</b></Link>
                    </li>
                    <li>
                        <Link to="/" ><b>Contact</b></Link>
                    </li>

                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" onClick={showMenu} />
            </div>

        </div>
     );
}
 
export default Header;