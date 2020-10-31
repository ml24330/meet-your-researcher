import React, { useState, useRef, useEffect } from 'react';
import Arrows from '../components/Arrows';
import QuizQuestion from '../components/QuizQuestion';
import Leaderboard from '../components/Leaderboard';
import { v4 as uuid } from 'uuid';
import q1_0 from '../media/quiz1_0.jpeg';
import q1_1 from '../media/quiz1_1.jpeg';
import q1_2 from '../media/quiz1_2.jpeg';
import q1_3 from '../media/quiz1_3.jpeg';
import q2_0 from '../media/quiz2_0.png';
import q2_1 from '../media/quiz2_1.png';
import q2_2 from '../media/quiz2_2.png';
import q2_3 from '../media/quiz2_3.png';
import q3 from '../media/quiz3.png';
import q4_0 from '../media/quiz4_0.png';
import q4_1 from '../media/quiz4_1.png';
import q4_2 from '../media/quiz4_2.png';
import q4_3 from '../media/quiz4_3.png';
import q5_0 from '../media/quiz5_0.png';
import q5_1 from '../media/quiz5_1.png';
import q5_2 from '../media/quiz5_2.svg';

export default function FinalQuiz() {

    const summary = useRef({q1: "", q2: "", q3: "", q4: "", q5: ""});
    const id = useRef(uuid());
    const interval = useRef();

    const [currentQ, setCurrentQ] = useState(0);
    const [summaryOpen, setSummaryOpen] = useState(false);
    const [username, setUsername] = useState("Anonymous user");
    const [timeTaken, setTimeTaken] = useState(0);
    const [published, setPublished] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);
    const [alertMessage, setAlertMessage] = useState();

    useEffect(() => {
        [q1_0, q1_1, q1_2, q1_3, q2_0, q2_1, q2_2, q2_3, q3, q4_0, q4_1, q4_2, q4_3, q5_0, q5_1, q5_2].forEach((img) => {
            let image = new Image();
            image.src = img;
        });
    }, []);

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
            <div className="page-title">Summative Quiz</div>
            {currentQ > 0 && (<div className="summary">
                <table>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>Q2</td>
                            <td>Q3</td>
                            <td>Q4</td>
                            <td>Q5</td>
                        </tr>
                        <tr>
                            <td style={{background: `${summary.current.q1 ? "rgba(0,255,0,0.5)" : !(summary.current.q1 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q1 ? "CORRECT" : !(summary.current.q1 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q2 ? "rgba(0,255,0,0.5)" : !(summary.current.q2 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q2 ? "CORRECT" : !(summary.current.q2 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q3 ? "rgba(0,255,0,0.5)" : !(summary.current.q3 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q3 ? "CORRECT" : !(summary.current.q3 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q4 ? "rgba(0,255,0,0.5)" : !(summary.current.q4 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q4 ? "CORRECT" : !(summary.current.q4 === "") ? "INCORRECT" : "PENDING"}</td>
                            <td style={{background: `${summary.current.q5 ? "rgba(0,255,0,0.5)" : !(summary.current.q5 === "") ? "rgba(255,0,0,0.5)" : "rgba(255,255,0,0.5)"}`}}>{summary.current.q5 ? "CORRECT" : !(summary.current.q5 === "") ? "INCORRECT" : "PENDING"}</td>
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
                    Thank you for your interest in Dr Whitley's work! You can attempt a summative quiz below:
                    <div className="page--img-desc" style={{fontSize: "0.8rem"}}>
                        <p>If you answer all questions correctly, you get to publish your completion time to a shared leaderboard!</p>
                    </div>
                    <div style={{marginTop: "28vh"}}>
                        <button onClick={handleStart} style={{color: "darkred", height: "60px", width: "220px", fontSize: "1.8rem", margin: "20px auto", background: "lime", border: "2px solid black", borderRadius: "5px", cursor: "pointer"}}>Start quiz</button>
                    </div>
                </div>
            )}
            {currentQ === 1 && <QuizQuestion 
                title="Dr Whitley has an undergraduate degree in?" 
                choices={[
                    {title: "Computer Science", img: q1_0},
                    {title: "Economics", img: q1_1}, 
                    {title: "Mathematics", img: q1_2},
                    {title: "Sociology", img: q1_3}]} 
                    answerIdx={1}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q1: true} : {...summary.current, q1: false};
                    return (
                    <>
                        {correct ? (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkgreen"}}>correct</span>!</p>         
                            </>
                        ) : (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkred"}}>incorrect</span>.</p>
                            </>
                        )}
                        <button onClick={handleNext}>Next question</button>
                        <span className="solutions">
                            <div>Solutions</div>
                            <div>
                                <p>Dr Whitley has a Bachelor of Science in Economics at the LSE.</p>
                            </div>
                        </span>
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 2 && <QuizQuestion 
                title="In order not to be identifiable online, which of these methods would serve you the best?" 
                choices={[
                    {title: "Behaving erratically online, for example browsing for several items you do not want to buy before buying anything.", img: q2_0},
                    {title: "Only allowing a website to collect the functionally necessary cookies.", img: q2_1}, 
                    {title: "Using a VPN service or proxies to obfuscate your web traffic.", img: q2_2}, 
                    {title: "Using public WiFi, such as at Starbucks, since their IP address is used by many different people.", img: q2_3}]} 
                    answerIdx={2} >

                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q2: true} : {...summary.current, q2: false};
                    return (
                    <>
                        {correct ? (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkgreen"}}>correct</span>!</p>         
                            </>
                        ) : (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkred"}}>incorrect</span>.</p>
                            </>
                        )}
                        <button onClick={handleNext}>Next question</button>
                        <span className="solutions">
                            <div>Solutions</div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Behaving erratically online, for example browsing for several items you do not want to buy before buying anything: </span>
                                <p><strong>False</strong>. This will most likely not be effective as Perez, Musolesi and Stringhini (2018) showed, that even when 60% of the metadata was altered, individuals could still be identified with an accuracy of over 95%.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Only allowing a website to collect the functionally necessary cookies: </span>
                                <p><strong>False</strong>. This can be good practice, but you will most likely still be identifiable as there is a lot of tracking done outside of any specific website (i.e. your browser or search engine as well as plugins you have installed).</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Using a VPN service or proxies to obfuscate your web traffic: </span>
                                <p><strong>Correct</strong>. Using a reputable VPN service can provide you with ample anonymity by giving you an entirely new IP address and encrypting your traffic.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Using public WiFi, such as at Starbucks, since their IP address is used by many different people: </span>
                                <p><strong>False</strong>. Public WiFi can have worse privacy than private since your traffic is not encrypted and potential attackers can access your private data.</p>
                            </div>
                        </span>
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 3 && <QuizQuestion 
                title="In a 2012 scandal dubbed “Burger King Foot Lettuce” a Burger King employee was photographed standing in two plastic tubs of lettuce with shoes on. The incident ultimately ended in the termination of the employee. What do you think gave the person away?" 
                choices={[
                    {title: "The shoes and pants were recognized by other employees of the Burger King branch in question.", img: q3},
                    {title: "Metadata that, unbeknown to the person who took it, was contained in the photograph.", img: q3}, 
                    {title: "The person who took the photo came forward when corporate officials at Burger King investigated the incident.", img: q3},
                    {title: "The person in the picture posted it on their personal social media account.", img: q3}]}
                    answerIdx={1} >
                
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q3: true} : {...summary.current, q3: false};
                    return (
                    <>
                        {correct ? (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkgreen"}}>correct</span>!</p>         
                            </>
                        ) : (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkred"}}>incorrect</span>.</p>
                            </>
                        )}
                        <button onClick={handleNext}>Next question</button>
                        <span className="solutions">
                            <div>Solutions</div>
                            <div>
                                <span style={{fontStyle: "italic"}}>The shoes and pants were recognized by other employees of the Burger King branch in question: </span>
                                <p><strong>(Partially) False</strong>. While this was the reason the shift manager was ultimately able to identify the specific person, there would have been no way to know at which branch the person worked.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Metadata that, unbeknown to the person who took it, was contained in the photograph: </span>
                                <p><strong>Correct</strong>. Shortly after its initial appearance on 4chan, the location of the Burger King restaurant was subsequently identified by the location data contained in the photograph in question, which was then sent to local and national news outlets, ultimately resulting in the termination of the employee.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>The person who took the photo came forward when corporate officials at Burger King investigated the incident: </span>
                                <p><strong>False</strong>. The photo only gained as much traction as it did, because it was sent to local news stations close to the Burger King branch in question.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>The person in the picture posted it on their personal social media account: </span>
                                <p><strong>False</strong>. The photo was meant to be posted anonymously on 4chan, but the location of the Burger King branch was identified by other users based on location metadata contained in the photo.</p>
                            </div>
                        </span>
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 4 && <QuizQuestion 
                title="What information about users is essential for contact tracing softwares to work?" 
                choices={[
                    {title: "Name", img: q4_0},
                    {title: "Location", img: q4_1}, 
                    {title: "NHS Number", img: q4_2},
                    {title: "Occupation", img: q4_3}]} 
                    answerIdx={1}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q4: true} : {...summary.current, q4: false};
                    return (
                    <>
                        {correct ? (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkgreen"}}>correct</span>!</p>         
                            </>
                        ) : (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkred"}}>incorrect</span>.</p>
                            </>
                        )}
                        <button onClick={handleNext}>Next question</button>
                        <span className="solutions">
                            <div>Solutions</div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Name: </span>
                                <p><strong>False</strong>. The purpose of contact tracing applications is to inform the users when they are in contact with infected individuals. To do this, only a consistent identifier for each user is required, which is not necessarily their real name.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Location: </span>
                                <p><strong>Correct</strong>. The sole purpose of contact tracing applications is to track the locations and contacts of people. This requires location data, captured by the devices where these applications are installed, so users in the proximity of a confirmed case can be informed.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>NHS Number: </span>
                                <p><strong>False</strong>. Authorities can easily find a person's identity given their NHS number. Using NHS numbers in contact tracing applications can provide useful information to the government, but it is not necessary as it is the device that should be located rather than the owner of the device.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Occupation: </span>
                                <p><strong>False</strong>. While the occupation of an individual may affect their chances of getting infected, it is not related to the concept of contact tracing.</p>
                            </div>
                        </span>
                    </>
                )}}
            </QuizQuestion>}
            {currentQ === 5 && <QuizQuestion 
                title="What conclusions can be drawn about AI, knowing the risk of GIGO failure?" 
                choices={[
                    {title: "AI performance is helpful for the decision-making process, but the results should be interpreted with caution.", img: q5_0},
                    {title: "Organizations should rely only on AI for making critical decisions, as this always enables them to make neutral decisions.", img: q5_1}, 
                    {title: "AI does not help organizations at all. Instead, it makes them do bad decisions as we’ve seen with the example of the Apple Credit card. ", img: q5_2}]} 
                    answerIdx={0}>
                {(selected, correct) => {
                    summary.current = correct ? {...summary.current, q5: true} : {...summary.current, q5: false};
                    return (
                    <>
                        {correct ? (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkgreen"}}>correct</span>!</p>         
                            </>
                        ) : (
                            <>
                                <p>Your answer <span style={{fontStyle: "italic"}}>{selected}</span> was <span style={{color: "darkred"}}>incorrect</span>.</p>
                            </>
                        )}
                        <button onClick={handleEnd}>View summary</button>
                        <span className="solutions">
                            <div>Solutions</div>
                            <div>
                                <span style={{fontStyle: "italic"}}>AI performance is helpful for the decision-making process, but the results should be interpreted with caution: </span>
                                <p><strong>Correct</strong>. AI extends and facilitates the decision-making process by analysing data, making predictions, and so on. But it is important not to see AI as an absolute answer because the results can sometimes be “off-target”.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>Organizations should rely only on AI for making critical decisions, as this always enables them to make neutral decisions: </span>
                                <p><strong>False</strong>. While AI is useful for organizations it should not be seen as perfect. There can be many inaccuracies.</p>
                            </div>
                            <div>
                                <span style={{fontStyle: "italic"}}>AI does not help organizations at all. Instead, it makes them do bad decisions as we’ve seen with the example of the Apple Credit card: </span>
                                <p><strong>False</strong>. AI is a big help for organizations. They can analyse huge amounts of data and give important information in a short time!</p>
                            </div>
                        </span>
                    </>
                )}}
            </QuizQuestion>}
            {summaryOpen && (
                <div className="page--content">
                <div className="summary-text">
                    <div className="summary-time">
                        {numCorrect === 5 ? `Congratulations! You got 5/5 in ${timeTaken} milliseconds` : `Game over! You got ${numCorrect}/5 correct in ${timeTaken} seconds`}
                    </div>
                    {!published && numCorrect === 5 && (
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
