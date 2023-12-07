import { useState } from "react";
import "./App.css";
import Login from "./Login/login";
import Player from "./Player/Player";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? <Player setLoggedIn={setLoggedIn} /> :
      <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
