import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
       
            <header>
                <nav>
                    <ul>
                        {/* Customer */}
                        <li><Link to="/">Rent</Link></li>
                        <li><Link to="/">Buy</Link></li>
                        <li><Link to="/">Favorites</Link></li>
                        {/* Owner */}
                        <li><Link to="/">Oproperties</Link></li>
                        <li><Link to="/">App list</Link></li>
                        <li><Link to="/">Add Property</Link></li>
                        {/* Admin */}
                        <li><Link to="/">10 properties</Link></li>
                        <li><Link to="/">R Customers</Link></li>

                        <li><Link to="/"> Log In </Link></li>

                    </ul>
                </nav>
            </header>
       
    )
}
