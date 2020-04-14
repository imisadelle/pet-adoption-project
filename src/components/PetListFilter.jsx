import React from "react";
import "./PetListFilter.css";

export default class PetListFilter extends React.Component {
  state = {
    breed: "",
    age: "",
    gender: "",
    size: ""
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit = event => {
    // alert("Your chosen dog breed is: " + this.state.value);
    console.log("submitting")
    event.preventDefault()
    this.props.filterPets(this.state)
    // grab the values from the form and apply them to a fetch ("GET") request
    // use this.setState({}) to set properties of state object
  }

  handleChange = event => {
    let value = { [event.target.name]: event.target.value }
    this.setState(value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="pet-filter">
          <div className="pet-filter">
            <label>
              Breed:
              <select name="breed" onChange={this.handleChange}>
                <option></option>
                {
                  this.props.breeds.map( breed => (
                    <option key={breed}>{breed}</option>
                  ))
                }
              </select>
            </label>
          </div>
          <div className="pet-filter">
            <label>
              Gender:
              <select name="gender" onChange={this.handleChange}>
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div className="pet-filter">
            <label>
              Age:
              <select name="age" onChange={this.handleChange}>
                <option></option>
                <option value="Puppy">Puppy</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
          </div>
          <div className="pet-filter">
            <label>
              Size:
              <select name="size" onChange={this.handleChange}>
                <option></option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </label>
          </div>
          <input type="submit" value="Submit" className="petlist-btn" />
        </div>
      </form>
    )
  }
}
