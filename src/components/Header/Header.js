
import logo from "../../grand.jpg"
import styled from "styled-components"
import facebook from "../../icon-facebook.svg"
import instagram from "../../icon-instagram.svg"
import burger from "../../images/burger.svg"
import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to right, #e0e0f0, #fefefe, #e0e0f0);
  border-bottom: solid black 1px;
  @media (min-width: 700px) {
    height: 60px;
  }  
`
const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  z-index: 20;
  overflow: hidden;
  background-color: transprent;
  @media (min-width: 700px) {
    align-items: center;
    height: 60px;
  }  
`
const Brand = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
`
const Icon = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  display: none;
  color: #47555e;
  @media (min-width: 480px) {
    display: inherit;
    font-size: 1.5em;
    padding: 0 20px;
  }  
`
const Options = styled.ul`
  list-style: none;
  display: ${props => (props.options ? 'none' : 'block') };
  @media (min-width: 700px) {
    display: inherit;
  }  
`
const Li = styled.li`
  border-bottom: ${props => ((props.select === props.label) ? 'solid #47555e 2px' : '0') };
  padding: 0 12px;
  @media (min-width: 700px) {
    display: inline-block;
  }  
`
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  color: #47555e;
`
const NavLinkAdmin = styled.a`
  color: black;
  text-decoration: none;
  color: #47555e;
`
const Socials = styled.div`
  display: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  align-items: center;
  height: 60px;  
`
const Social = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 2px;
  display: none;
  color: #47555e;
  @media (min-width: 700px) {
    display: inherit;
  }  
`
const Burger = styled.img`
  width: 20px;
  height: 20px;
  display: inherit;
  @media (min-width: 700px) {
    display: none;
  }  
`
const Layout = styled.div`
  overflow: auto;
  scroll-margin-block: initial;
  height: calc(100vh - 61px);
`

function Header() {

  const [selected, setSelected] = useState("Accueil");

  const changeSelect = (option) => {
    setSelected(option)
  }

  const [burgerState, setBurgerState] = useState(true);

  const toggleBurger = () => {
    setBurgerState(!burgerState)
  }

  return (
    <>
      <Container>
        <Center>
          <Brand>
            <Icon src={logo}/>
            <Title>PortFolio</Title>
          </Brand>
          <Options options={burgerState}>
            <Li label="Accueil" select={selected} onClick={() => {changeSelect("Accueil"); toggleBurger()}}>
              <NavLink to={"/Accueil"}>Accueil</NavLink>
            </Li>
            <Li label="Galerie" select={selected} onClick={() => {changeSelect("Galerie"); toggleBurger()}}>
              <NavLink to={"/Galerie"}>Galerie</NavLink>
            </Li>
            <Li label="Tarifs" select={selected} onClick={() => {changeSelect("Tarifs"); toggleBurger()}}>
              <NavLink to={"/Tarifs"}>Tarifs</NavLink>
            </Li>
            <Li label="Contact" select={selected} onClick={() => {changeSelect("Contact"); toggleBurger()}}>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </Li>
            <Li label="Admin" select={selected}>
              <NavLinkAdmin href="/admin" target="_blank">Admin</NavLinkAdmin>
            </Li>
          </Options>
          <Socials>
            <Social src={facebook}/>
            <Social src={instagram}/>
            <Burger src={burger} options={burgerState} onClick={() => toggleBurger()}></Burger>
          </Socials>
        </Center>
      </Container>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
}

export default Header
