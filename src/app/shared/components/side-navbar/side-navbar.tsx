import React from 'react';
import { FaHome, FaTasks } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export class SideNavbar extends React.Component {

    render() {
        return <div className="side-navbar">
            <NavLink activeClassName='navbar-item active' className="navbar-item" to="/home"
            > <FaHome id="icon" /> Home</NavLink>

            <NavLink activeClassName='navbar-item active' className="navbar-item" to="/tasks"
            > <FaTasks id="icon" />Tasks</NavLink>
        </div>

    }
}