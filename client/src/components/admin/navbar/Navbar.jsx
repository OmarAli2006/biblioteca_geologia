import { Menu } from '@material-ui/core'
import { BarChartSharp, Close, CloseSharp, Home, MenuSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './navbar.css'

function Navbar() {
    const [ sidebar, setSidebar ] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars" >
                <MenuSharp onClick={showSidebar} />
            </Link>
        </div>
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    <CloseSharp />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                             {item.icon}
                             <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
            <li className="nav-text">
                <Close />
                <span><a>Salir</a></span>
            </li>
        </nav>
    </>
    )
}

export default Navbar
