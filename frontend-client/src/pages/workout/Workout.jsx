import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CardList from './components/CardList'
import InputForm from './components/InputForm'

const Workout = () => {
   const [toggler, setToggler] = useState(false)
   return (
      <Container>
         <div className='row mt-5'>
            <div className="col-12 col-md-9 border border-light px-5 py-2  rounded-4">
               <CardList toggler={toggler} setToggler={setToggler} />
            </div>
            <div className="col-12 col-md-3">
               <InputForm toggler={toggler} setToggler={setToggler} />
            </div>
         </div>
      </Container>
   )
}

export default Workout