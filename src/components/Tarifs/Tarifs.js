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
      setTarifs(data.tarifs)
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
                  {tarif.title} : {tarif.price} €
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

/*            <Tarif>
              Juste moi : 130 €
              <P>Séance pour une personne, en extérieur ou en studio</P>
            </Tarif>
            <Tarif>
              Pour deux : 195 €
              <P>Pour deux personnes, en extérieur ou en studio</P>
            </Tarif>
            <Tarif>
              Famille : 220 €
              <P>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</P>
            </Tarif>
            <Tarif>
              Il était une fois : 160 €
              <P>Photo de grossesse (À votre domicile, en extérieur ou en studio)</P>
            </Tarif>
            <Tarif>
              Mon bébé : 160 €
              <P>Photo d’enfant jusqu’à 3 ans (photo à domicile)</P>
            </Tarif>
            <Tarif>
              J’immortalise l’événement : 100 €
              <P>Prestation de mariage ou baptême sur devis</P>
          </Tarif>*/
