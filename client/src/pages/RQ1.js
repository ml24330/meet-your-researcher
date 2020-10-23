import React from 'react';
import Arrows from '../components/Arrows';

export default function RQ1() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q1: </span>Are surveillance and contact tracing technologies at fault?</div>
            <Arrows from="/process" to="/q2" from_name="Research and review processes" to_name={<div><div style={{color: "darkred", display: "inline"}}>Q2:</div>Can data be truly anonymised?</div>} />
        </div>
    )
}
