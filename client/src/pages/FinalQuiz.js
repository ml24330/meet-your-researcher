import React, { useState, useRef } from 'react';
import Arrows from '../components/Arrows';
import QuizQuestion from '../components/QuizQuestion';
import img1 from '../media/img1.png';

export default function FinalQuiz() {

    const summary = useRef({q1: "", q2: "", q3: ""});
    const [currentQ, setCurrentQ] = useState(0);
    const [summaryOpen, setSummaryOpen] = useState(false);

    function handleNext() {
        setCurrentQ(prevIdx => prevIdx+1);
    }

    return (
        <div>
            <div className="page-title">Final quiz</div>
            <div className="summary">
                <table>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>Q2</td>
                            <td>Q3</td>
                        </tr>
                        <tr>
                            <td style={{background: `${summary.current.q1 ? "rgba(0,255,0,0.5)" : !(summary.current.q1 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q1 ? "CORRECT" : !(summary.current.q1 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q2 ? "rgba(0,255,0,0.5)" : !(summary.current.q2 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q2 ? "CORRECT" : !(summary.current.q2 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q3 ? "rgba(0,255,0,0.5)" : !(summary.current.q3 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q3 ? "CORRECT" : !(summary.current.q3 === "") ? "INCORRECT" : "PENDING"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {currentQ === 0 && (
                <div className="summary-text">
                    Thank you for your interest in Dr Whitley's work! Attempt a summative quiz if you feel confident:
                    <button onClick={handleNext}>Start quiz</button>
                </div>
            )}
            {currentQ === 1 && <QuizQuestion title="Q1" choices={[{title: "1", img: img1}, {title: "2", img: img1}, {"title": 3, img: img1}]} answerIdx={1}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q1: true} : {...summary.current, q1: false};
                    return (
                    <>
                        {selected}
                        {correct ? (
                            <>
                                correctcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect
                                <button onClick={handleNext}>Next question</button>
                            </>
                        ) : (
                            <>
                                incorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect 
                                <button onClick={handleNext}>Next question</button>
                            </>
                        )}
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 2 && <QuizQuestion title="Q2" choices={[{title: "1", img: img1}, {title: "2", img: img1}, {"title": 3, img: img1}]} answerIdx={1}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q2: true} : {...summary.current, q2: false};
                    return (
                    <>
                        {selected}
                        {correct ? (
                            <>
                                correctcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect
                                <button onClick={handleNext}>Next question</button>
                            </>
                        ) : (
                            <>
                                incorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect 
                                <button onClick={handleNext}>Next question</button>
                            </>
                        )}
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 3 && <QuizQuestion title="Q3" choices={[{title: "1", img: img1}, {title: "2", img: img1}, {"title": 3, img: img1}]} answerIdx={1}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q3: true} : {...summary.current, q3: false};
                    return (
                    <>
                        {selected}
                        {correct ? (
                            <>
                                correctcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect
                                <button onClick={() => {handleNext();setSummaryOpen(true)}}>View summary</button>
                            </>
                        ) : (
                            <>
                                incorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect 
                                <button onClick={() => {handleNext();setSummaryOpen(true)}}>View summary</button>
                            </>
                        )}
                    </>
                )}}
            </QuizQuestion>}
            {summaryOpen && (
                <div className="summary-text">
                    Congratulations! You got {Object.keys(summary.current).reduce((accumulated, current) => summary.current[current] ? ++accumulated : accumulated, 0)} 
                </div>
            )}
            <Arrows from="q3" to="/" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q4:</div>Are data protection laws effective?</div>} to_name="Return to About Page" />
        </div>
    )
}
