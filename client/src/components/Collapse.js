import React, { useState } from 'react';
import boomerang from '../media/boomerang.svg';

export default function Collapse({title, color, children}) {

    const [open, setOpen] = useState(true);

    return (
        <div className="collapse-container">
            <div className="collapse-title" style={{background: color || "coral"}}>
                <svg height="18" width="18" style={{position: "absolute", top: "calc(50% - 9px)"}}>
                    <circle cx="9" cy="9" r="7" stroke="black" strokeWidth="1" fill="black" />
                </svg>
                <div className="collapse-title-text">{title}</div>
                <img src={boomerang} alt="expand" onClick={() => setOpen(prevState => !prevState)} style={{height: "40px", transform: `rotateZ(${open ? "0" : "180" }deg)`, position: "absolute", right: "10px", bottom: "calc(50% - 20px)", cursor: "pointer"}}/>            
            </div>
            {open && <div className="collapse-content">
                {children}
            </div>}
        </div>
    )
}
