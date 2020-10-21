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

const taskList = [
    {name: "Sleeping", desc: "Even the best researchers would need some sleep at night!", img: sleep}, 
    {name: "Reading research proposals", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: review}, 
    {name: "Reviewing academic articles", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: read},
    {name: "Attending interviews", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: interview},
    {name: "Teaching a class", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: teach},
    {name: "Researching and writing your paper", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: write},
    {name: "Waiting for your proposal to go through", desc: "(SAMPLE TEXT) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum", img: wait}
];


export default function TaskPage() {

    const [task, setTask] = useState({name: "", desc: ""});
    const [open, setOpen] = useState(false);

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
            <div className="task-interactive">
                <div className="task-title">
                    It's {new Date().toLocaleTimeString().slice(0,-3)}! As a researcher at LSE, you could be...
                </div>
                <div className="task-btn">
                    <button onClick={handleRoll}>Roll!</button>
                </div>
                <div className="task-task" style={{"color": task.color}}>
                    <div className="task-name">{task.name || "Click the button above to roll a task!"}</div>
                    <div className="task-img"><img src={task.img || placeholder} alt={task.name}/></div>
                    <div className="task-desc">{task.desc}</div>
                </div>  
            </div>
            {open && (
                <div className="task-content">
                    Researchers at LSE take many roles. Although Covid has impacted many of their works, they continue to conduct... orem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa v 
                    <Collapse title="Reading research proposals" color="coral" >
                        hi
                    </Collapse>
                    <Collapse title="Reviewing academic articles" color="orange" >
                        hi
                    </Collapse>
                    <Collapse title="Attending interviews" color="yellow" >
                        hi
                    </Collapse>
                    <Collapse title="Teaching classes" color="lime" >
                        hi
                    </Collapse>
                    <Collapse title="Researching and writing papers" color="cyan" >
                        hi
                    </Collapse>
                    <Collapse title="Waiting for proposal to go through" color="lightblue" >
                        hi
                    </Collapse>
                    <Collapse title="Reading research proposals" color="purple" >
                        hi
                    </Collapse>
                </div>
            )}
            <Arrows from="/" to="/process" from_name="About" to_name="Research and review processes"/>
        </div>
    )
}
