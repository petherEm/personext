import React from 'react'
import Navbar from './Navbar'
import App from '../pages/_app'

const Layout = ({ children }) =>  (
        <>
            <Navbar />
            {children}
        </>
    )

export default Layout;
