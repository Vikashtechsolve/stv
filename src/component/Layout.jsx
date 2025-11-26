import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col bg-gray-50 min-h-screen">
            <Navbar />
            {/* Page content goes here */}
            <main className="grow bg-gray-50">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
