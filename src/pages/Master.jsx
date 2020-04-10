import React, { Component } from 'react'
import PetLookup from '../components/PetLookup'
import PetListFilter from '../components/PetListFilter'
import axios from 'axios'
import { petList } from '../data/pet_list.js'

class Master extends Component {
  state = {
    pets: []
  }

  getPets = () => {
    axios.get(`/pet_finder/pets?token=${window.caches.pet_finder_token}&animal=dog&location=Miami,FL`)
      .then(response => {
        this.setState({pets: response.data})
      })
    }

    componentDidMount() {
      // if (!window.caches.pet_finder_token) {  //means: if the token does not exist then get it and save
      //   axios.get('/pet_finder/auth')
      //   .then(response => {
      //     window.caches.pet_finder_token = response.data
      //     this.getPets()
      //   })
      // }
      // else {
      //   this.getPets()
      // }
      this.setState({pets: petList})
    }

  render() {
      return (
          <div>
            <PetListFilter />
            <PetLookup pets={this.state.pets}/>
          </div>
      )
  }
}

export default Master;
