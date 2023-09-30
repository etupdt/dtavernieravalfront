import styled from "styled-components"
import image from '../../images/pexels-photo.webp';
import image2 from '../../images/pexels-photo-1050558.webp';

const Container = styled.div`
  position: fixed;
  width: max-content;
  display: grid;
  place-items: center;
  top: 60px;
  max-height: 100vh;
  `
const Img = styled.img`
  left: 0;
  width: 100vw;
  z-index: 1;
`
const H1 = styled.h1`
margin-top: 0;
font-size: 2em;
  color: white;
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 10;
`

export default function Home(){

  return(
    <>
      <Container>
        <Img src={image2} alt="" />
        <H1>Charles Cantin - Photographe</H1>
      </Container>
    </>
  )
  
}