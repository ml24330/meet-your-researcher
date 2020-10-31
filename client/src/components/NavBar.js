import React from 'react';
import logo from '../media/LSE_logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav">
            <img src={logo} alt="LSE logo" style={{"position": "absolute", "height": "40px", "margin": "10px 0 0 10px", "left": "0"}}/>
            <div className="nav-flex">
                <div className="nav-class">
                    <p>Being a researcher</p>
                    <div className="nav-dropdown-content">
                        <Link to="/">About Dr Whitley</Link>
                        <Link to="/tasks">Researcher roles</Link>
                        <Link to="/process">Starting a research</Link>
                    </div>
                </div>
                <div className="nav-class">
                    <p>Research areas</p>
                    <div className="nav-dropdown-content">
                        <Link to="/q1">Trusting surveillance</Link>
                        <Link to="/q2">Anonymization and metadata</Link>
                        <Link to="/q3">Garbage In, Garbage Out</Link>
                        <Link to="/q4">Data protection laws</Link>
                        <Link to="/quiz">Summative quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
