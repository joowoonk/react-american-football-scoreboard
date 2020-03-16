//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [Home, setHome] = useState(0);
  const [Away, setAway] = useState(0);

  // const [time, setTime] = useState(60)
  const [Down, setDown] = useState(4);
  const [toGo, setTogo] = useState(10);
  let [ballOn, setBallOn] = useState(50);
  const [Quater, setQuater] = useState(1);
 
  const [seconds, setSeconds] = useState(59); 
  const [minutes, setMinutes] = useState(15); 

  setTimeout(() => {
    setSeconds(seconds - 1);
    if (seconds === 0){
      setSeconds(59);
      setMinutes(minutes - 1)
    
      if (minutes === 0 && seconds === 0){
        setQuater(Quater + 1)
        setMinutes(15)
        setSeconds(59)

        if (Quater > 4){
          setQuater(99)
          setMinutes(99)
          setSeconds(99)
        }
      }
    }
  }, 1000)



  function hitHundred(){
    let initialized = setBallOn(50);
    console.log("TOUCH TOWN!!!!!")
    return initialized
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomInt =  Math.floor(Math.random() * (max - min)) + min;
    setTogo(toGo - randomInt)
    if (toGo <= 0){
      setTogo(10)
    }
    setDown(Down - 1);
    if (Down <= 0){
      setDown(4)
    }
    if (toGo <= 0){
      setDown(4);
    }else{
      console.log("it's other team's chance!")
    }
    return randomInt; //The maximum is exclusive and the minimum is inclusive
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{Home}</div>
          </div>
          <div className="timer">{minutes}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{Away}</div>
          </div>
        </div>
        <BottomRow toGo= {toGo} Down = {Down} ballOn = {ballOn} Quater ={Quater}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHome(Home + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHome(Home + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAway(Away + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAway(Away + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
          
        </div>
        <div className="awayButtons">
          <button onClick={() => ballOn >= 100 ? hitHundred() : setBallOn(ballOn + getRandomInt(0, 20))}className="awayButtons__fieldGoal">Hustle!</button>
        </div>
      </section>
    </div>
  );
}

export default App;
