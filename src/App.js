import React, { useState, useEffect } from "react";
import "./styles.css";
import { options } from "./options";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-header">rock. paper. scissors</h1>
      <p>
        Rock beats Scissors. Scissors beats paper. Paper beats Rock. That's all.
      </p>
    </nav>
  );
};

const Icon = props => {
  return (
    <div className="icon-wrap">
      <h1 className="icon">{props.icon}</h1>
    </div>
  );
};

const Button = props => {
  const { name, value, handleClick, disabled, type } = props;
  return (
    <button
      className={`button ${type}`}
      name={name}
      value={value}
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

const ButtonWrapper = props => {
  return <div className="button-wrapper">{props.children}</div>;
};

const ScoreWrapper = props => {
  return <div className="score-card-grid">{props.children}</div>;
};

const ScoreCard = props => {
  const { player, score } = props;
  return (
    <div className="score-card">
      <h3>{player}</h3>
      <h1 className="score">{score}</h1>
    </div>
  );
};

export default function App() {
  const [playerOption, setPlayerOption] = useState({});
  const [cpuOption, setCpuOption] = useState({});
  const [result, setResult] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [draw, setDraw] = useState(0);

  const handleClick = e => {
    setIsDisabled(true);
    // sets an object for each choice so I can access various properties
    setPlayerOption(options[e.target.value]);
    setCpuOption(options[Math.floor(Math.random() * 3)]);
  };

  const nextRound = () => {
    setPlayerOption({});
    setCpuOption({});
    setResult("");
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
      setResult("");
      setPlayerScore(0);
      setCpuScore(0);
      setDraw(0);
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    if (!isDisabled) {
      return;
    } else {
      if (cpuOption.id === playerOption.id) {
        setResult("Tie");
        setDraw(draw + 1);
      } else if (playerOption.name === "Paper" && cpuOption.name === "Rock") {
        setResult("You win!");
        setPlayerScore(playerScore + 1);
      } else if (playerOption.name === "Rock" && cpuOption.name === "Paper") {
        setResult("CPU Wins!");
        setCpuScore(cpuScore + 1);
      } else if (
        playerOption.name === "Scissors" &&
        cpuOption.name === "Paper"
      ) {
        setResult("You win!");
        setPlayerScore(playerScore + 1);
      } else if (
        playerOption.name === "Paper" &&
        cpuOption.name === "Scissors"
      ) {
        setResult("CPU wins");
        setCpuScore(cpuScore + 1);
      } else if (
        playerOption.name === "Rock" &&
        cpuOption.name === "Scissors"
      ) {
        setResult("You win!");
        setPlayerScore(playerScore + 1);
      } else if (
        playerOption.name === "Scissors" &&
        cpuOption.name === "Rock"
      ) {
        setResult("CPU wins");
        setCpuScore(cpuScore + 1);
      }
    }
    // found this on StackOverflow to stop eslint error https://stackoverflow.com/a/55854902/13496885
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisabled]);

  const buttons = options.map(item => {
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

  return (
    <div className="App">
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
      <h1>...{result}</h1>
      <div className="icon-wrapper">
        <Icon player="You" icon={playerOption.icon} />
        <ScoreWrapper>
          <ScoreCard player="You" score={playerScore} />
          <ScoreCard player="CPU" score={cpuScore} />
        </ScoreWrapper>
        <Icon player="CPU" icon={cpuOption.icon} />
      </div>
      <h3>Number of draws: {draw === 0 ? "None yet" : draw}</h3>
    </div>
  );
}
