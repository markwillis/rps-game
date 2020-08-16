import React, { useState, useEffect } from "react";
import "./styles.css";
import { options } from "./options"; 
import Header from './components/header/Header'
import Button, {ButtonWrapper} from './components/button/Button'
import Icon from './components/icon/Icon'
import Modal from "./modal/Modal"
import Form from './components/modal-form/Form'

const ScoreWrapper = (props) => {
  return <div className="score-card-grid">{props.children}</div>;
};

const ScoreCard = (props) => {
  const { player, score } = props;
  return (
    <div className="score-card">
      <h3>{player}</h3>
      <h1 className="score">{score}</h1>
    </div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [name, setName] = useState("")
  const [playerOption, setPlayerOption] = useState({});
  const [cpuOption, setCpuOption] = useState({});
  const [result, setResult] = useState("Let us begin, warrior");
  const [isDisabled, setIsDisabled] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [draw, setDraw] = useState(0);

  const winningMessage = `${name} wins!`
  const losingMessage = `Computer wins. Try again, ${name}`

  const handleClick = (e) => {
    setIsDisabled(true);
    // sets an object for each choice so I can access various properties
    setPlayerOption(options[e.target.value]);
    setCpuOption(options[Math.floor(Math.random() * 3)]);
  };

  const nextRound = () => {
    setPlayerOption({});
    setCpuOption({});
    setResult("Make another selection");
    setIsDisabled(false);
  };

  const handleReset = () => {
    //This function is probably pointless
    // I could just NOT show the Reset button if there are no scores
    if (playerScore === 0 && cpuScore === 0 && draw === 0) {
      alert("There is nothing to reset.");
      return;
    }
    let reset = window.confirm("Are you sure? This will wipe the scores!");
    if (reset) {
      setPlayerOption({});
      setCpuOption({});
      setResult(`Let's go, make a choice.`);
      setPlayerScore(0);
      setCpuScore(0);
      setDraw(0);
      setIsDisabled(false);
      setIsOpen(true);
    }
  };

  const handleName = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  useEffect(() => {
    if (!isDisabled) {
      return;
    } else {
      if (cpuOption.id === playerOption.id) {
        setResult("Tie");
        setDraw(draw + 1);
      } else if (playerOption.name === "Paper" && cpuOption.name === "Rock") {
        setResult(winningMessage);
        setPlayerScore(playerScore + 1);
      } else if (playerOption.name === "Rock" && cpuOption.name === "Paper") {
        setResult(losingMessage);
        setCpuScore(cpuScore + 1);
      } else if (
        playerOption.name === "Scissors" &&
        cpuOption.name === "Paper"
      ) {
        setResult(winningMessage);
        setPlayerScore(playerScore + 1);
      } else if (
        playerOption.name === "Paper" &&
        cpuOption.name === "Scissors"
      ) {
        setResult(losingMessage);
        setCpuScore(cpuScore + 1);
      } else if (
        playerOption.name === "Rock" &&
        cpuOption.name === "Scissors"
      ) {
        setResult(winningMessage);
        setPlayerScore(playerScore + 1);
      } else if (
        playerOption.name === "Scissors" &&
        cpuOption.name === "Rock"
      ) {
        setResult(losingMessage);
        setCpuScore(cpuScore + 1);
      }
    }
    // found this on StackOverflow to stop eslint error https://stackoverflow.com/a/55854902/13496885
  }, [isDisabled]);

  const buttons = options.map((item) => {
    return (
      <Button
        name={item.icon}
        value={item.id}
        handleClick={handleClick}
        disabled={isDisabled}
        type="option"
      >
        {item.name}
      </Button>
    );
  });

  const BUTTON_STYLE = {
    zIndex: 1,
    padding: '20px',
    backgroundColor: "gray",
  }

  const handleUpdatedForm = (name) => {
    setName(name)
    setIsOpen(false)
  }


  return (
    <div className="App">
        <Modal open={isOpen}>
          <Form handleUpdatedForm={handleUpdatedForm}/>
        </Modal>
      <Header />
      <ButtonWrapper>{buttons}</ButtonWrapper>
      <Button
        name="Next round!"
        handleClick={nextRound}
        disabled={!isDisabled}
        type="next"
      >
        Next round!
      </Button>
      <div>
        <br />
        <Button name="Reset" handleClick={handleReset} type="reset" />
      </div>
      <h1>{result}</h1>
      <div className="icon-wrapper">
        
        <ScoreWrapper>
        <Icon player="You" icon={playerOption.icon} />
        <Icon player="CPU" icon={cpuOption.icon} />
          <ScoreCard player="You" score={playerScore} />
          <ScoreCard player="CPU" score={cpuScore} />
        </ScoreWrapper>
      </div>
      <h3>Number of draws: {draw === 0 ? "None yet" : draw}</h3>
    </div>
  );
}
