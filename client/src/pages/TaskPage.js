import React, { useState, useEffect } from 'react';
import placeholder from '../media/task_placeholder.png';
import sleep from '../media/task_sleep.png';
import review from '../media/task_review.png';
import read from '../media/task_read.png';
import interview from '../media/task_interview.png';
import teach from '../media/task_teach.png';
import write from '../media/task_write.png';
import wait from '../media/task_wait.png';
import Arrows from '../components/Arrows';
import Collapse from '../components/Collapse';
import roll from '../media/roll.svg';

const taskList = [
    {name: "Sleeping", desc: "Even the best researchers would need some sleep at night!", img: sleep}, 
    {name: "Reading research proposals", desc: "Many researchers have PhD students to supervise, and parts of this task include reading proposals of their writing or thesis. In the process of peer review, the researcher would also read other researchers’ research proposals and decide whether or not relevant research titles are worthwhile.", img: review}, 
    {name: "Reviewing academic articles", desc: "Reading academic articles produced by peers in the field helps a researcher to be up-to-date with research and events taking place. In addition to broadening the researcher’s knowledge in the field, peer review is also necessary for researchers to confirm the validity and thoroughness of their publications.", img: read},
    {name: "Attending interviews", desc: "Many research areas, especially in the field of social sciences, require the behaviours and thoughts of people to be studied. Hence, researchers must interview people relevant to their study - for instance, Dr. Whitley is planning to interview organisations for his upcoming paper. Researchers also get interviewed about their work, as sometimes they would like the general public to be aware and understand their research. ", img: interview},
    {name: "Teaching a class", desc: "Researchers also teach classes related to their field of research at LSE. Dr. Whitley is currently not teaching any classes due to the pandemic, while some others still do. Dr. Whitley has teached information science related management courses, for example.", img: teach},
    {name: "Researching and writing your paper", desc: "Researchers spend a large portion of their time, well, researching! Materials produced from these research could include blog posts, podcasts, opinion articles, academic journals, or even books. ", img: write},
    {name: "Waiting for your proposal to go through", desc: "It can take up to months for a researcher’s proposal to get validated! With many research papers in the pipeline during the pandemic, this process could become even longer. For a research proposal to go through, many academics must assess the appropriateness and quality of research questions, expertise held by the researcher, as well as the sources of funding.", img: wait}
];


export default function TaskPage() {

    const [task, setTask] = useState({name: "", desc: ""});
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        [placeholder, sleep, review, read, interview, teach, write, wait].forEach(src => {
            const img = new Image();
            img.src = src;
        });
        const interval = setInterval(() => {
            [placeholder, sleep, review, read, interview, teach, write, wait].forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }, 1000*60*10);
        return () => clearInterval(interval);
    }, []);

    function handleRoll() {
        const interval = setInterval(() => {
            let randIndex = Math.floor(Math.random()*(taskList.length));
            let randColor = Math.floor(Math.random()*16777215).toString(16);
            setTask({...taskList[randIndex], desc: "", color: `#${randColor}`});
            setRotate(prevDeg => prevDeg + 70);
        }, 100);
        setTimeout(() => {
            clearInterval(interval);
            if(new Date().getHours() < 5 || new Date().getHours() > 21){
                setTask(taskList[0]);
            }else{
                let randIndex = Math.floor(Math.random()*(taskList.length-1) + 1);
                setTask(taskList[randIndex]);
            }
            setOpen(true);
        }, 3000);
    }

    return (
        <div>
            <div className="page-title">
                Roles of a researcher
            </div>
            <div className="task-interactive">
                <div className="task-title">
                    It's {new Date().toLocaleTimeString().slice(0,-3)}! As a researcher at LSE, you could be...
                </div>
                <div className="task-btn">
                    <img style={{cursor: "pointer", transform: `rotateZ(${rotate}deg)`}} src={roll} width="70px" alt="roll" onClick={handleRoll} />
                </div>
                <div className="task-task" style={{"color": task.color}}>
                    <div className="task-name">{task.name || "Click on the icon above to roll a task!"}</div>
                    <div className="task-img"><img src={task.img || placeholder} alt={task.name}/></div>
                    <div className="task-desc">{task.desc}</div>
                </div>  
            </div>
            {open && (
                <div className="page--content">
                    <div className="page--paragraph" style={{fontSize: "1.4rem"}}>Researchers at LSE have many roles. Some of these roles are entirely research-oriented, while others are not. Below are some of the tasks a researcher would most likely perform, as highlighted by Dr. Whitley:</div>
                    <Collapse title="Reading research proposals" color="coral" >
                        {taskList[1].desc}
                    </Collapse>
                    <Collapse title="Reviewing academic articles" color="orange" >
                        {taskList[2].desc}
                    </Collapse>
                    <Collapse title="Attending interviews" color="yellow" >
                        {taskList[3].desc}
                    </Collapse>
                    <Collapse title="Teaching classes" color="lime" >
                        {taskList[4].desc}
                    </Collapse>
                    <Collapse title="Researching and writing papers" color="cyan" >
                        {taskList[5].desc}
                    </Collapse>
                    <Collapse title="Waiting for proposal to go through" color="lightblue" >
                        {taskList[6].desc}
                    </Collapse>
                </div>
            )}
            <Arrows from="/" to="/process" from_name="About" to_name="Research and review processes"/>
        </div>
    )
}
