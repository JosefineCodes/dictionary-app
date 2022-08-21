import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer text-center">
          <small>
            {" "}
            <a
              href="https://github.com/JosefineCodes/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source code
            </a>{" "}
            by Josefine Werthmann{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
