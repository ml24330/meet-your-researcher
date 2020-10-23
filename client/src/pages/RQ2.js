import React from 'react';
import Arrows from '../components/Arrows';
import Quiz from '../components/Quiz';
import QuizQuestion from '../components/QuizQuestion';
import img1 from '../media/img1.png';

export default function RQ2() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q2: </span>Can data be truly anonymised?</div>
            <Arrows from="/q1" to="/q3" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q1:</div>Are technologies at fault?</div>} to_name={<div><div style={{color: "darkred", display: "inline"}}>Q3:</div>Will data collection methods change?</div>} />
        </div>
    )
}
