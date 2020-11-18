import React, { useEffect, useState } from 'react';
import './App.css';
import checkmark from './checkmark.svg';
import cancel from './cancel.svg';

const colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A'];

function App() {

  const [scores, setScores] = useState([]);
  const [color, setColor] = useState(0);
  const [name, setName] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    async function getData() {
      const data = await fetch('/records');
      const res = await data.json();
      setScores(res);
    }
    const interval1 = setInterval(() => {
      getData();
    }, 1000);
    const interval2 = setInterval(() => {
      setColor(prevColor => prevColor === colors.length - 1 ? 0 : ++prevColor);
    }, 2000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    }
  }, []);

  async function remove(id) {
    try{
      await fetch(`/record/${id}`, {
        method: "DELETE"
      });
    }catch(e){
     console.log(e);
    }
  }

  async function add() {
    if(!time || !name) return;
    await fetch('/record', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time, name
      })
    });
  }

  return (
    <div className="App" style={{background: colors[color], opacity: 0.8}}>
      <div className="title">Quiz leaderboard</div>
      <div className="flex">
        <div className="flex-1"><strong>Rank</strong></div>
        <div className="flex-2"><strong>Name</strong></div>
        <div className="flex-3"><strong>Time (ms)</strong></div>
      </div>
      {scores.map(({_id, name, time}, idx) => (
        <div className="flex" key={idx}>
          <div className="flex-1">{idx+1}</div>
          <div className="flex-2">{name}</div>
          <div className="flex-3">{time}</div>
          <div className="flex-4" onClick={() => remove(_id)}><img src={cancel} alt="cancel"/></div>
        </div>
      ))}
      <div className="flex">
          <div className="flex-1">...</div>
          <div className="flex-2"><input type="text" value={name} onChange={e => setName(e.target.value)} /></div>
          <div className="flex-3"><input type="number" value={time} onChange={e => setTime(e.target.value)} /></div>
          <div className="flex-4" onClick={() => add()}><img src={checkmark} alt="checkmark" /></div>
      </div>
    </div>
  );
}

export default App;
