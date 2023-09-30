import './App.css';
import logo from "./grand.jpg"
import styled from "styled-components"
import facebook from "./icon-facebook.svg"
import instagram from "./icon-instagram.svg"
import { Outlet } from 'react-router-dom';
import Option from "./components/Header/Option"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: lightgreen;
`
const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  height: 60px;
  background-color: lightgreen;
`
const Brand = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  font-size: 1.5em;
  padding: 0 20px;
`
const Options = styled.ul`
  list-style: none;
  display: inline-block;
`
const Li = styled.li`
  border-bottom: ${props => ((props.select === props.label) ? 'solid black 1px' : '0') };
  display: inline-block;
  padding: 0 30px;
`
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`
const Social = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 2px;
`
function App() {

  const [selected, setSelected] = useState("Accueil");

  const changeSelect = (option) => {
    console.log('option', option)
    setSelected(option)
  }

  return (
    <>
      <Container>
        <Center>
          <Brand>
            <Icon src={logo}/>
            <Title>PortFolio</Title>
          </Brand>
          <Options>
            <Li label="Accueil" select={selected} onClick={() => changeSelect("Accueil")}>
              <NavLink to={"/Accueil"}>Accueil</NavLink>
            </Li>
            <Li label="Galerie" select={selected} onClick={() => changeSelect("Galerie")}>
              <NavLink to={"/Galerie"}>Galerie</NavLink>
            </Li>
            <Li label="Tarifs" select={selected} onClick={() => changeSelect("Tarifs")}>
              <NavLink to={"/Tarifs"}>Tarifs</NavLink>
            </Li>
            <Li label="Contact" select={selected} onClick={() => changeSelect("Contact")}>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </Li>
          </Options>
          <Socials>
            <Social src={facebook}/>
            <Social src={instagram}/>
          </Socials>
        </Center>
      </Container>
      <Outlet/>
    </>
  );
}

export default App;
