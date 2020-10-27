import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import TaskPage from './pages/TaskPage';
import ProcessPage from './pages/ProcessPage';
import Footer from './components/Footer';
import RQ1 from './pages/RQ1';
import RQ2 from './pages/RQ2';
import RQ3 from './pages/RQ3';
import RQ4 from './pages/RQ4';
import FinalQuiz from './pages/FinalQuiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import background from './media/background.jpg';

function App() {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.querySelector(".content").scrollHeight);
    const interval = setInterval(() => {
      setHeight(document.querySelector(".content").scrollHeight);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="background" style={{backgroundImage: `url(${background})`, opacity: 0.07, backgroundPosition: "top", backgroundSize: "50vw", height: height}} />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <AboutPage />
            </Route>
            <Route path="/tasks" exact>
              <TaskPage />
            </Route>
            <Route path="/process" exact>
              <ProcessPage />
            </Route>
            <Route path="/q1" exact>
              <RQ1 />
            </Route>
            <Route path="/q2" exact>
              <RQ2 />
            </Route>
            <Route path="/q3" exact>
              <RQ3 />
            </Route>
            <Route path="/q4" exact>
              <RQ4 />
            </Route>
            <Route path="/quiz" exact>
              <FinalQuiz />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
