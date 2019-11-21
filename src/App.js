import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./components/DogsList";
import { Route } from "react-router-dom";
import DogsListContainer from "./components/DogsListContainer";
import DogBreedImages from "./components/DogBreedImages";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";

function App() {
  return (
    <div className="App">
      <main>
        <DogsList />
        <Route exact path="/" component={DogsListContainer} />
        {/* <Route path="/dog-breeds/:breed" component={DogBreedImages} /> */}
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>
    </div>
  );
}

export default App;
