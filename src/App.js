import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
       <p className="code-link">
        <a
          href="https://github.com/plaerke/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="code-link-github"
        >
          Open-source code
        </a>
        <span> by Pernille Lærke Munk-Hansen </span>
      </p>
    </div>
    </div>
  );
}