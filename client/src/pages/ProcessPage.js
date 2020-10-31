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
                <div className="page--paragraph">
                    <p>There are two most important aspects when starting a research project: an appropriate topic, and sufficient funding.</p>
                    <p>As shown in the diagram below, funding can either be internal or external, and research topics must be promising in terms of their timeliness, cost-efficiency, and quality.</p>
                </div>          
                <div className="page--img" style={{width: "100%"}}>
                    <img src={process} alt="process" style={{maxHeight: 9999, maxWidth: "800px", width: "80vw"}}/>
                </div>
                <div className="page--img-desc">
                    Flowchart for starting a research project at LSE
                </div>
                <div className="page--subtitle">
                    <p>That's it for the life of a researcher! Let's continue and look at topics researched by Dr Whitley now...</p>
                </div>
            </div>
            <Arrows from="/tasks" to="/q1" from_name="Researcher roles" to_name={<><span style={{color: "darkred"}}>Q1: </span>Trusting surveillance</>} />
        </div>
    )
}
