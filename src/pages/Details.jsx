/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Sponsor from '../components/Sponsor'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './Details.css'
import Pug from '../images/pug.jpg'
import Bone from '../images/bone.png'
import Ball from '../images/ball.png'
import Rope from '../images/rope.png'

const Details = ({ pets, history, match }) => {

  let initialData = {
    photos: [ {} ],
    contact: { address: {} },
    breeds: {}
  }

  let breedDefault = {
    name: "Unknown",
    bred_for:"Unknown",
    temperament: "Unknown",
    breed_group: "Unknown",
  }

  const [petFinder, setPetFinder] = useState(initialData)
  const [breed, setBreed] = useState(breedDefault)

  const getPet = async () => {
    const { data } = await axios.get(
      `/pet_finder/pet/${match.params.id}?token=${window.caches.pet_finder_token}`
    )

    if(data && data.animal) {
      setPetFinder(data.animal)
    }
    if(data && data.animal && data.animal.breeds && data.animal.breeds.primary) {
      getBreeds(data.animal.breeds.primary)
    }
  };

  // getting data fro pet finder
  useEffect(() => {
    if (!window.caches.pet_finder_token) {  //means: if the token does not exist then get it and save
      axios.get('/pet_finder/auth')
        .then(response => {
          window.caches.pet_finder_token = response.data
          getPet()
        })
    }
    else {
      getPet()
    }
  }, []);
  
  // getting data from dog API
  const getBreeds = async (breedPrimary) => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    res
      .json()
      .then(res => {
        let breedInfo = res.filter(elem => elem.name === breedPrimary);
        if(breedInfo && breedInfo[0]) {
          setBreed(breedInfo[0])
        }
      });
  }

   function description() {
      if (petFinder.description) {
        return petFinder.description
      } else {
        return "Is your name Wifi? Cuz I'm feeling a connection"
      }
    }

    function renderBreeds(renderedBreed) {   
      return (
        <div className='breed-facts-container'>
          {renderedBreed.name === 'Unknown'
          ? <div className='breed-facts'></div>
          : ( 
          <>
            <div className='breed-facts-title'>{renderedBreed.name}s are:</div>
            <div className='breed-facts'>Bred for: {renderedBreed.bred_for}</div>
            <div className='breed-facts'>Temperament: {renderedBreed.temperament}</div>
            <div className='breed-facts'>Breed Group: {renderedBreed.breed_group}</div>
          </>
        )}
        </div>
      );
    }

    const dogPic = petFinder.photos[0] ?  petFinder.photos[0].medium : 'https://cdn4.vectorstock.com/i/1000x1000/29/73/dog-silhouette-vector-22362973.jpg'

        return (
            <div className='page'>

              <div className='center-container'>
                <div className='profile-container'>
                  <div className='left-container'>
                    <div className='profile-pic-container'>
                      <img src={dogPic} alt='adoptable pic' className='profile-pic'></img>
                    </div>

                    <div className='bio'>{description()}</div>
                  </div>

                  <div className='right-container'>
                    <div className='dog-facts-container'>
                      <div className='dog-facts-title'>{petFinder.name}</div>
                      <div className='dog-facts'>Gender: {petFinder.gender}</div>
                      <div className='dog-facts'>Age: {petFinder.age}</div>
                      <div className='dog-facts'>Size: {petFinder.size}</div>
                      <div className='dog-facts'>Adoption Status: {petFinder.status}</div>
                      <div className='dog-facts'>Location: {petFinder.contact.address.city}, {petFinder.contact.address.state}</div>
                    </div>
                    {renderBreeds(breed)}
                  </div>
                </div>

                <div className='products-container'>
                  <div className='product-title'>Products</div>

                  <div className='product-img-container'>
                    <div className='product1'>
                      <img src={Bone} alt='plastic bone' className='product'></img>
                      <div className='product-toy'>Bone</div>
                    </div>
                    <div className='product2'>
                      <img src={Rope} alt='rope toy' className='product'></img>
                      <div className='product-toy'>Rope</div>
                    </div>
                    <div className='product3'>
                      <img src={Ball} alt='plastic ball' className='product'></img>
                      <div className='product-toy'>Ball</div>
                    </div>
                  </div>
                </div>

                  <div className='button-container'>
                    <div className='adopt-button-container'>
                      <Button variant="success" type="submit" className='detail-btn'>
                        Adopt Me
                      </Button>
                    </div>

                    <div className='visit-button-container'>
                      <Button
                        variant="success"
                        type="submit"
                        className='detail-btn'
                    onClick={e => history.push(`/visit/${match.params.id}`)}
                      >
                        Schedule Virtual Visit
                      </Button>
                    </div>
                  </div>

                  <div className='sponsor'>
                    <Sponsor pet={petFinder}/>
                  </div>

                  <div className='why-sponsor-container'>
                    <div className='why-sponsor'>Why Sponsor?</div>
                    <div className='why-desciption'>Sponsoring a pet will help with supplemental care. Your contribution will go towards additional medical care the pet requires. It also upgrades their current bed, bowls, food, and toys.</div>
                  </div>
              </div>
            </div>
        );
}

export default Details;
