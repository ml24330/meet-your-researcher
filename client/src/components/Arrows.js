import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../media/arrow.svg';

export default function Arrows({ from, to, from_name, to_name }) {
    return (
        <div className="arrow-container">
            {from && <div className="arrow-from">
                <div className="arrow-name">{from_name}</div>
                <Link to={from}><img src={arrow} alt="arrow from"/></Link>
            </div>}
            {to && <div className="arrow-to">
                <div className="arrow-name">{to_name}</div>
                <Link to={to}><img src={arrow} alt="arrow to"/></Link>
            </div>}
        </div>
    )
}
