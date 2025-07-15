import {React, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginPopup from '../LoginPopup/LoginPopup'


function Layout({ children }) {
    const [showLogin, setShowLogin] = useState(false)
    return (
        <>
            {
                showLogin ? <LoginPopup /> : <></>
            }
            <Header setShowLogin={setShowLogin} />
            <div className="">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;