import "./App.css";

import Nav from "./views/Nav";
import logo from "./logo.svg";

function App() {
  const link =
    "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=12";
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello!!!</p>
        <a href={link} target="_blank">
          go to my page
        </a>
      </header>
    </div>
  );
}

export default App;
