import './App.css';
import logic from "./helpers/logic"
import { roll } from "./helpers/roll"

const App = () => {
  const choices = ["scissors", "paper", "rock", "lizard", "spock"]
  let playerOneChoice = choices[roll(0, choices.length)]
  let playerTwoChoice = choices[roll(0, choices.length)]
  console.log("Player one choose: " + playerOneChoice)
  console.log("Player two choose: " + playerTwoChoice)
  logic(playerOneChoice, playerTwoChoice)

  return (
    <div className="app__container">
      Abrir la consola para ver lo que sucede
    </div>
  )
}

export default App;
