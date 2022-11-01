import React from 'react'
import TrabajadorList from '../components/usuario/TrabajadorList'
import NavComponent from '../components/navbar/NavComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import MainContainer from '../components/maincontainer/MainContainer'

const TrabajadorMenu = () => {
  return (
    <div>
        <NavComponent />
        <HeaderComponent />
        <MainContainer>
          <TrabajadorList/>
        </MainContainer>
    </div>
  )
}

export default TrabajadorMenu