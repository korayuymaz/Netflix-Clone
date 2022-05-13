import React, {useState, useEffect} from 'react'
import './header.css'

function Header() {
    const[show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
    <div className={`navbar ${show && "navbar_black"}`}>
        <img className='logo' src='netflix-logo.png' alt='Netflix'/>
    </div>
    )
}

export default Header