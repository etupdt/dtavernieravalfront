import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`
const Center = styled.div`
  width: 90%;
  @media (min-width: 700px) {
    margin: 40px auto;
    width: 50%;
    max-width: 100%;
  }  
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H3 = styled.h3`
  width: 100%;
  margin: 10px;
`
const P = styled.p`
  width: 100%;
`
const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 6px;
`
const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 200px;
  border-radius: 6px;
  border: solid black 2px;
`
const Button = styled.button`
  padding: 10px;
  width: 50%;
  border-radius: 6px;
`

export default function Contact(){
  return(
    <>
      <Container>
        <Center>
          <H3>Contact</H3>
          <Form 
            name="contact" 
            method="POST" 
            data-netlify="true"
          >
            <P>
              <label>Nom <Input type="text" name="nom" placeholder="Nom"/></label>
            </P>
            <P>
              <label>Prénom <Input type="text" name="prenom" placeholder="Prénom"/></label>
            </P>
            <P>
              <label>Email <Input type="email" name="email" placeholder="Email"/></label>
            </P>
            <P>
              <label>Message <Textarea type="email" name="message" placeholder="Message"/></label>
            </P>
            <P>
              <Button type="submit">Envoyer</Button>
            </P>
          </Form>
        </Center>
      </Container>
    </>
  )
}