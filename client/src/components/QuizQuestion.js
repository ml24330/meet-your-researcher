import React, { useState, useEffect } from 'react';

Array.prototype.shuffle = function() {
    let currentIndex = this.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }
    return this;
  }

export default function QuizQuestion({ title, choices, answerIdx, children }) {

    const [selected, setSelected] = useState();
    const [shuffled, setShuffled] = useState();
    const [message, setMessage] = useState("");
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        let newArr = [...choices];
        setShuffled(newArr.shuffle());
    }, []);

    function handleSubmit() {
        if(!selected){
            setMessage(<div style={{color: "red"}}>Please select an option before submitting!</div>);
        }else{
            setMessage("");
            setReveal(true);
        }
    }

    return (
        <div className="question-container">
            <div className="quiz-question">
                {title}
            </div>
            <div className="choices-container">
                {shuffled && shuffled.map(({title: _title, img}, idx) => (
                    <div key={idx} className="choice">
                        <img className="quiz-img" src={img} />
                        <input className="quiz-input" type="radio" value={_title} name={title} onChange={e => {setSelected(e.target.value);setReveal(false)}}/>
                        <div><label className="quiz-label" htmlFor={_title}>{_title}</label></div>
                    </div>
                ))} 
                <div className="quiz-submit">
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <div className="answer-container">
                {message}
                {reveal && children(selected, choices[answerIdx].title.toString() === selected)}
            </div>
        </div>
    )
}
