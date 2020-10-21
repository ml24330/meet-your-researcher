import React from 'react';
import Arrows from '../components/Arrows';

export default function RQ4() {
    return (
        <div>
            <div className="page-title">Are current data protection laws effective?</div>
            <Arrows from="q3" to="/" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q3:</div>Will data collection methods change?</div>} to_name="Return to About Page" />
        </div>
    )
}
