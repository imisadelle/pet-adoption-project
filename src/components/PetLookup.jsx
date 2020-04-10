import React from "react";
import PetListCardUI from "./PetListCardUI";

export default class PetLookup extends React.Component {
  state = {}

  render() {
    return (
      <div className="pet list container">
        <div className="row">
          {
            this.props.pets.map( pet => (
              <div key={pet.id} className="col-md-4">
                <PetListCardUI pet={pet}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
