import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="hero">Roxane's Fantastic Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Roxane Kulenkamp</small>
        </footer>
      </div>
    </div>
  );
}
