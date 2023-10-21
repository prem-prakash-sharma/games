import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicTacToe from "./Games/TicTacToe/Index";
import Home from "./Games";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe>tictactoe</TicTacToe>} />
      </Routes>
    </Router>
  );
}

export default App;
