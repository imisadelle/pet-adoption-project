import React, { useState, useEffect, useFetch } from 'react'
import { useParams } from 'react-router-dom'
import Sponsor from '../components/Sponsor'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './Details.css'
import Pug from '../images/pug.jpg'
import Bone from '../images/bone.png'
import Ball from '../images/ball.png'
import Rope from '../images/rope.png'

const Details = ({ pets }) => {

  const [dog, setDog] = useState({ dogs: [] })

  let {id} = useParams()
  const pet = pets.filter(pet => id == pet.id)

  async function fetchData() {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    res
      .json()
      .then(res => setDog(res))
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dog.name)


  // const dogApi = async () => {
  //   const { data } =  await axios(
  //     `https://api.thedogapi.com/v1/breeds`
  //   )
  //     setDog({ dogs: data })
  // }

  // useEffect(() => {
  //   dogApi()
  // }, [])

  // const breed = pets.map( pup => {
  //   let petFinder = pup.breeds.primary

  //   let petApi = dog.dogs
  //   return petApi
  
  // })

   function description() {
      if (pet[0].description) {
        return pet[0].description
      } else {
        return "Is your name Wifi? Cuz I'm feeling a connection"
      }
    }

    const dogPic = pet[0].photos[0] ?  pet[0].photos[0].medium : 'https://cdn4.vectorstock.com/i/1000x1000/29/73/dog-silhouette-vector-22362973.jpg'

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
                      <div className='dog-facts-title'>{pet[0].name}</div>
                      <div className='dog-facts'>Gender: {pet[0].gender}</div>
                      <div className='dog-facts'>Age: {pet[0].age}</div>
                      <div className='dog-facts'>Size: {pet[0].size}</div>
                      <div className='dog-facts'>Adoption Status: {pet[0].status}</div>
                      <div className='dog-facts'>Location: {pet[0].contact.address.city}, {pet[0].contact.address.state}</div>
                    </div>

                    <div className='breed-facts-container'>
                      {/* <div className='breed-facts-title'>{dog.dogs.name}s are:</div>
                      <div className='breed-facts'>Bred for: {dog.dogs.bred_for}</div>
                      <div className='breed-facts'>Temperament: {dog.dogs.temperament}</div>
                      <div className='breed-facts'>Breed Group: {dog.dogs.breed_group}</div> */}
                    </div>
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
                      <Button variant="primary" type="submit" className='detail-btn'>
                        Adopt Me
                      </Button>
                    </div>

                    <div className='visit-button-container'>
                      <Button variant="primary" type="submit" className='detail-btn'>
                        Schedule Virtual Visit
                      </Button>
                    </div>
                  </div>

                  <div className='sponsor'>
                    <Sponsor pet={pets}/>
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
