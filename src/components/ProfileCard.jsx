import React from "react";
import './css/ProfileCard.css'

export default function ProfileCard() {
    return(

        <div className="ProfileCard-Container" aria-label="Antonio Traversa profile">
            <div className="ProfileCard-Transparent" aria-hidden="true" />

            <div className="ProfileCard-Info">
                <h2 className="ProfileCard-Name">Antonio Traversa</h2>
                <p className="ProfileCard-Title">Freelance Developer</p>
                <a className="btn btn-ghost" href="/#about" aria-label="Go to the About section on the Home page">
                    About
                </a>
            </div>
            
        </div>

    )
}