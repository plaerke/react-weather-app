import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
       <p className="code-link">
        <a
          href="https://github.com/plaerke/weather-app"
          target="_blank"
          rel="noreferrer"
          className="code-link-github"
        >
          Open-source code
        </a>
        <span> by Pernille Lærke Munk-Hansen </span>
      </p>
    </div>
  );
}

export default App;
