import React from 'react';
import Arrows from '../components/Arrows';

export default function RQ3() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q3: </span>How will data collection change in the context of big data?</div>
            <Arrows from="/q2" to="/q4" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q2:</div>Can data be truly anonymised?</div>} to_name={<div><div style={{color: "darkred", display: "inline"}}>Q4:</div>Are data protection laws effective?</div>} />
        </div>
    )
}
