import React, { useState } from 'react';
import Arrows from '../components/Arrows';
import Q2Act from '../components/Q2Act';

export default function RQ2() {

    const [open, setOpen] = useState(false);

    return (
        <>
            
            <div className="page-title"><span style={{color: "darkred"}}>Q2: </span>Can data be truly anonymised?</div>
            <button onClick={() => setOpen(true)}>Open modal</button>
            <Q2Act isOpen={open} close={setOpen}/>
            <Arrows from="/q1" to="/q3" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q1:</div>Are technologies at fault?</div>} to_name={<div><div style={{color: "darkred", display: "inline"}}>Q3:</div>Will data collection methods change?</div>} />
        </>
    )
}
