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
                        <Link to="/">About us</Link>
                        <Link to="/tasks">Daily tasks</Link>
                        <Link to="/process">Research and review processes</Link>
                    </div>
                </div>
                <div className="nav-class">
                    <p>Research areas</p>
                    <div className="nav-dropdown-content">
                        <Link to="/q1">Are technologies at fault?</Link>
                        <Link to="/q2">Can data be truly anonymised?</Link>
                        <Link to="/q3">Will data collection methods change with big data?</Link>
                        <Link to="/q4">Are data protection laws effective?</Link>
                        <Link to="/quiz">Take a quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
