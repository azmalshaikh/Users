import React, { useEffect } from 'react'
import "./Navbar.css";

function Navbar({ setItems, setClicked }) {

    const apireq = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
                (res) => {
                    setItems(res);
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    const fn = () => {
        setClicked(true);

        setTimeout(apireq, 3000);
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h3 className="navbar__containerName">USERS</h3>
                {/* <img src="https://cutt.ly/0P9dOmo" alt="Logo" className="navbar__containerLogo" title="Users" /> */}
                <button className="navbar__containerButton" type="submit" onClick={fn}>Get Users</button>
            </div>
        </nav>
    )
}

export default Navbar