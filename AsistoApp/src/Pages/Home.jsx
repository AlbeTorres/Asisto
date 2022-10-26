import React from "react";
import RegistroList from "../components/registro/RegistroList";
import AddRegistro from "../components/registro/AddRegistro";
import NavComponent from "../components/navbar/NavComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import MainContainer from "../components/maincontainer/MainContainer";
import Modal from '../components/modal/Modal'
const Home = () => {
  return (
    <div className="min-h-full">
      <NavComponent />
      <HeaderComponent />
      <MainContainer>
        <AddRegistro />
        <RegistroList />
      </MainContainer>
      <Modal/>
    </div>
  );
};

export default Home;
