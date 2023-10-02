import styled from "styled-components"
import { useEffect, useState } from 'react'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
    width: 80%;
  }  
`
const Select = styled.select`
  width: 150px;
  height: 30px;
  margin-top: 10px;
  font-size: 1.2em;
`
const GaleryPhotos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  align-items: center;
  margin: 5px 0;
  @media (min-width: 700px) {
    margin: auto;
  }  
`
const Img = styled.img`
  border-radius: 10px;
  margin: 10px 3px;
  box-shadow: 10px 5px 5px lightgray;
  width: 310px;
  height: fit-content;
  @media (min-width: 700px) {
    width: 400px;
    margin: 10px 20px;
  }  
`
export default function Galery(){

  const [photos, setPhotos] = useState([]);

  const upload = (categorie) => {

    fetch('photos/' + categorie + '.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      console.log('photo', data);
      data.photos.forEach((image) => {
        setPhotos(photos => [...photos, {'categorie': categorie, 'image': image}])
      })
    }).catch(err => {
      console.log("Error Reading data " + err)
    })
  
  }


  const [categories, setCategories] = useState([]);
  const [index, setIndex] = useState(0);

  const changeCategorie = (index) => {
    console.log(index)
    setIndex(index)
  }

  useEffect(() => {

    fetch('/categories/categories.json').then(response => {
      return response.json();
    }).then(data => {
      data.entree.forEach((categorie) => upload(categorie))
      setCategories(data.entree)
    }).catch(err => {
      console.log("Error Reading data " + err)
    })
  }, [])


  return(
    <>
      <Container>
        <Select onChange={(e) => {changeCategorie(e.target.selectedIndex)}}>
        {
          categories.map(categorie =>
            <option>
              {categorie}
            </option>
          )
        }
        </Select>
        <GaleryPhotos>
        {
          photos.map(photo => categories[index] === photo.categorie ?
            <Img
              src={photo.image.replace('/public', '')}
              alt={photo.image}
            />  
            : null
          )
        }
        </GaleryPhotos>
      </Container>
    </>
  )
}