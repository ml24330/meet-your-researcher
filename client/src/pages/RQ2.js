import React from 'react';
import Arrows from '../components/Arrows';

export default function RQ2() {
    return (
        <div>
            <div className="page-title">Can data be truly anonymised?</div>
    <Arrows from="/q1" to="/q3" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q1:</div>Are technologies at fault?</div>} to_name={<div><div style={{color: "darkred", display: "inline"}}>Q3:</div>Will data collection methods change?</div>} />
        </div>
    )
}
