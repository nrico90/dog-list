import React, { Component } from "react";

class DogsList extends Component {
  state = {
    dogBreeds: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      //   .then(data =>

      .then(data => {
        const breeds = Object.keys(data.message);
        this.updateBreeds(breeds); //transform data to an array of strings
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
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
