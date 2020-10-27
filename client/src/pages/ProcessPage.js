import React from 'react';
import Arrows from '../components/Arrows';
import process from '../media/process.jpeg';

export default function ProcessPage() {
    return (
        <div>
            <div className="page-title"></div>
            <div className="page--content">
                <div className="page--subtitle">
                    <p>Ever wondered how research projects are incubated at LSE?</p>
                </div>          
                <div className="page--img" style={{width: "100%"}}>
                    <img src={process} alt="process" style={{maxHeight: 9999, maxWidth: "800px", width: "80vw"}}/>
                </div>
                <div className="page--img-desc">
                    Flowchart for starting a research project at LSE
                </div>
            </div>
            <Arrows from="/tasks" to="/q1" from_name="Daily tasks" to_name={<><span style={{color: "darkred"}}>Q1: </span>Trusting surveillance</>} />
        </div>
    )
}
