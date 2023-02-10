import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
            <div>
                <header>
                <nav>
                    <ul>
                        {/* Customer */}
                        <li><Link to="/rent">Rent</Link></li>
                        <li><Link to="/buy">Buy</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        {/* Owner */}
                        <li><Link to="/myproperties">My Properties</Link></li>
                        <li><Link to="/applications">Applications</Link></li>
                        <li><Link to="/addproperty">Add Property</Link></li>
                        {/* Admin */}
                        <li><Link to="/rentedproperties">Last Rented Properties</Link></li>
                        <li><Link to="/recentcustomers">Recent Customers</Link></li>
                        <li><Link to="/">Customers</Link></li>
                        <li><Link to="/">Owners</Link></li>

                        <li><Link to="/login"> Log In </Link></li>

                    </ul>
                </nav>
            </header>
            </div>
    )
}
