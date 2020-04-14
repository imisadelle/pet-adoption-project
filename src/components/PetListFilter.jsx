import React from "react";
import ReactDOM from "react-dom";
import "./PetListFilter.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "",
      age: "",
      gender: "",
      size: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    // alert("Your chosen dog breed is: " + this.state.value);
    event.preventDefault();
    // grab the values from the form and apply them to a fetch ("GET") request
    ``;
    // use this.setState({}) to set properties of state object
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="pet-filter">
          <div class="pet-filter">
            <label>
              Breed:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="null"></option>
                <option value="Pitbull">Pitbull</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Labradoodle">Labradoodle</option>
                <option value="German Shepard">German Shepard</option>
              </select>
            </label>
          </div>
          <div class="pet-filter">
            <label>
              Gender:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="null"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div class="pet-filter">
            <label>
              Age:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="null"></option>
                <option value="Puppy">Puppy</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
          </div>
          <div class="pet-filter">
            <label>
              Size:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="null"></option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </label>
          </div>
          <input type="submit" value="Submit" class="petlist-btn" />
        </div>
      </form>
    );
  }
}
