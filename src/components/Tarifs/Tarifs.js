import styled from "styled-components"
import { useEffect, useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex:direction: column;
  align-items:start;
  @media (min-width: 700px) {
    align-items:center;
  }  
`
const Center = styled.div`
  width: 90%;
  @media (min-width: 700px) {
    margin: 40px auto;
    width: 50%;
    max-width: 100%;
  }  
`
const H3 = styled.h3`
  width: 100%;
  margin: 10px;
`
const Ul = styled.ul`
  width: 100%;
  padding: 10px;
  margin: 0 20px
`
const P = styled.p`
  width: 100%;
`
const Tarif = styled.li`
  width: 100%;
  margin: 10px;
`

export default function Tarifs(){

  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {

    fetch('/tarifs/tarifs.json').then(response => {
      return response.json();
    }).then(data => {
      setTarifs(data.tarif)
    }).catch(err => {
      console.log("Error Reading data " + err)
    })
  }, [])

  return(
    <>
      <Container>
        <Center>
          <H3>Tarifs et préstations</H3>
          <Ul>
            {
              tarifs.map((tarif) => 
                <Tarif>
                  {tarif.title} : {tarif.price}
                  <P>{tarif.description}</P>
                </Tarif>
              )
            }
          </Ul>
        </Center>
      </Container>
    </>
  )
}
