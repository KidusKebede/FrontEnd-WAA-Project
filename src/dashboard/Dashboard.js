
import React, { createContext, useState } from 'react';
import Header from '../container/Header/Header';
// import '../container/Headers/Header.css'
//  import Header from "../container/Headers/Header";
import PageRoutes from './PageRoutes';


export default function Dashboard() {


    return (
        <React.Fragment>
          
                <div className='header'>
                    <Header /> 
            
                </div>
                <div className="Product">
                    <PageRoutes />
            
                </div>
           
        </React.Fragment>

    )

}