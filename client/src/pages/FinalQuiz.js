import React, { useState, useRef } from 'react';
import Arrows from '../components/Arrows';
import QuizQuestion from '../components/QuizQuestion';
import img1 from '../media/img1.png';
import Leaderboard from '../components/Leaderboard';
import { v4 as uuid } from 'uuid';

export default function FinalQuiz() {

    const summary = useRef({q1: "", q2: "", q3: ""});
    const id = useRef(uuid());
    const interval = useRef();

    const [currentQ, setCurrentQ] = useState(0);
    const [summaryOpen, setSummaryOpen] = useState(false);
    const [username, setUsername] = useState("Anonymous user");
    const [timeTaken, setTimeTaken] = useState(0);
    const [published, setPublished] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);
    const [alertMessage, setAlertMessage] = useState();

    async function handleStart() {
        await fetch("/api/start", {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
              uuid: id.current,
              startTime: Date.now()  
            })
        });
        setCurrentQ(1);
        interval.current = setInterval(() => {
            setTimeTaken(prevTime => prevTime+1);
        }, 1000)
    }

    async function handleEnd() {
        setNumCorrect(Object.keys(summary.current).reduce((accumulated, current) => summary.current[current] ? ++accumulated : accumulated, 0));
        const data = await fetch("/api/end", {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                uuid: id.current,
                endTime: Date.now()
            })
        });
        clearInterval(interval.current);
        const { timeTaken } = await data.json();
        setTimeTaken(timeTaken.toString());
        setCurrentQ(prevIdx => prevIdx+1);
        setSummaryOpen(true);
    }

    async function handlePublish() {
        if(username.length > 20 || username.length < 1){
            setAlertMessage("Your name must contain 1-20 characters!");
            return;
        }
        setPublished(true);
        await fetch("api/publish", {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                uuid: id.current,
                name: username
            })
        });
        setAlertMessage("Successfully published!");
    }

    function handleNext() {
        setCurrentQ(prevIdx => prevIdx+1);
    }

    return (
        <div>
            <div className="page-title">Final quiz</div>
            {currentQ > 0 && (<div className="summary">
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
            </div>)}
            {currentQ > 0 && (
                <div className="timer">
                    {timeTaken}
                </div>
            )}
            {currentQ === 0 && (
                <div className="summary-text">
                    Thank you for your interest in Dr Whitley's work! Here's a summative quiz for you to attempt:
                    <button onClick={handleStart}>Start quiz</button>
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
                                <button onClick={handleEnd}>View summary</button>
                            </>
                        ) : (
                            <>
                                incorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrectcorrect 
                                <button onClick={handleEnd}>View summary</button>
                            </>
                        )}
                    </>
                )}}
            </QuizQuestion>}
            {summaryOpen && (
                <div className="page--content">
                <div className="summary-text">
                    <div className="summary-time">
                        Game over! You got {numCorrect} correct taking {timeTaken} seconds
                    </div>
                    {!published && numCorrect === 3 && (
                        <div className="summary-publish">
                            <div>Publish your result?</div>
                            <label htmlFor="username">Your name: </label>
                            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                            <button type="submit" onClick={handlePublish}>Publish</button>
                        </div>
                    )}
                    <div className="summary-alert">
                        {alertMessage}
                    </div>
                    <Leaderboard />
                </div>
                </div>
            )}
            <Arrows from="q4" to="/" from_name={<div><div style={{color: "darkred", display: "inline"}}>Q4: </div>Data protection laws</div>} to_name="Return to About Page" />
        </div>
    )
}
