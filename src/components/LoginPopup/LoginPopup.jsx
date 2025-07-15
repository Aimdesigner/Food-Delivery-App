import {React, useState} from 'react'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up");

    return (
        <div>
            <form action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <button onClick={()=> setShowLogin(false)}><i class="bi bi-x-lg fs-5"></i></button>
                </div>
            </form>
        </div>
    )
}

export default LoginPopup