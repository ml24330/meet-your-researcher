import React, { useState, useEffect } from 'react';

export default function Leaderboard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("/api/scores");
            const res = await data.json();
            res.sort((a, b) => a.time > b.time ? 1 : -1).slice(0,20);
            setData(res);
        }
        getData();
        const interval = setInterval(() => {
            getData();
        }, 2000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="leaderboard" style={{fontSize: "1.2rem"}}>
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Time (ms)</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({name, time}, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{name}</td>
                            <td>{time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
