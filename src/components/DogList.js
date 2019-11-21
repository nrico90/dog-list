import React, { Component } from "react";

class DogsList extends Component {
  state = {
    dogBreeds: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => Object.keys(data.message))

      .catch(console.error);
  }

  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {this.state.dogBreeds === null && "Loading..."}
      </div>
    );
  }
}

export default DogsList;
