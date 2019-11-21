import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./components/DogList";

function App() {
  return (
    <div className="App">
      <main>
        <DogsList />
      </main>
    </div>
  );
}

export default App;
