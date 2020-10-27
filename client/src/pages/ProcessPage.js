import React from 'react';
import Arrows from '../components/Arrows';
import process from '../media/process.jpeg';

export default function ProcessPage() {
    return (
        <div>
            <div className="page-title">Starting a research</div>
            <div className="page--content">
                <div className="page--img">
                    <img src={process} alt="process" />
                </div>
                <div className="page--img-desc">
                    This is what it looks like to start a research project at LSE!
                </div>
            </div>
            <Arrows from="/tasks" to="/q1" from_name="Daily tasks" to_name={<><span style={{color: "darkred"}}>Q1: </span>Trusting surveillance</>} />
        </div>
    )
}
