import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Sponsor from '../components/Sponsor'
import { Button } from 'react-bootstrap'
import './Details.css'
import Pug from '../images/pug.jpg'
import Bone from '../images/bone.png'
import Ball from '../images/ball.png'
import Rope from '../images/rope.png'


const Details = ({ pets }) => {

  const [state, setState] = useState({
    name: '',
    bred_for: '',
    temperament: '',
    breed_group: ''
  })

  let {id} = useParams()

  const pet = pets.filter(pet => id == pet.id)


  // componentDidMount() {
  //   axios.get('https://api.thedogapi.com/v1/breeds')
  //     .then( response => {
  //         let data = response.data[0]
  //         this.setState( data )
  //     })
  // }

   function description() {
      if (pet[0].description) {
        return pet[0].description
      } else {
        return "Is your name Wifi? Cuz I'm feeling a connection"
      }
    }

    // function dogPic() {
    //   if(pet[0].photos[0].medium) {
    //     return pet[0].photos[0].medium
    //   } else {
    //     return Pug
    //   }
    // }
        return (
            <div className='page'>

              <div className='center-container'>
                <div className='profile-container'>
                  <div className='left-container'>
                    <div className='profile-pic-container'>
                      <img src={pet[0].photos[0].medium} alt='adoptable pic' className='profile-pic'></img>
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
                    </div>

                    <div className='breed-facts-container'>
                      <div className='breed-facts-title'>{state.name}s are:</div>
                      <div className='breed-facts'>Bred for: {state.bred_for}</div>
                      <div className='breed-facts'>Temperament: {state.temperament}</div>
                      <div className='breed-facts'>Breed Group: {state.breed_group}</div>
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
              </div>
            </div>
        );
}

export default Details;
