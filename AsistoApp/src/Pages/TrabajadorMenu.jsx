import React from 'react'
import TrabajadorList from '../components/usuario/TrabajadorList'
import NavComponent from '../components/navbar/NavComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import MainContainer from '../components/maincontainer/MainContainer'
import Modal from '../components/modal/Modal'

const TrabajadorMenu = () => {
  return (
    <div>
        <NavComponent />
        <HeaderComponent />
        <MainContainer>
          <TrabajadorList/>
        </MainContainer>
        <Modal/>
    </div>
  )
}

export default TrabajadorMenu