import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Roxane Kulenkamp</small>
        </footer>
      </div>
    </div>
  );
}
