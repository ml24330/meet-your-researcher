import React from 'react';
import Arrows from '../components/Arrows';

export default function ProcessPage() {
    return (
        <div>
            <div className="page-title">The processes of research</div>
            <Arrows from="/tasks" to="/q1" from_name="Daily tasks" to_name={<div><div style={{color: "darkred", display: "inline"}}>Q1:</div> are technologies at fault?</div>} />
        </div>
    )
}
