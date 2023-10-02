import styled from "styled-components"
import { useEffect, useState } from 'react'

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  
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
  flex-flow: wrap;
  margin: auto;
`
const Img = styled.img`
  border-radius: 10px;
  margin: 10px;
  box-shadow: 10px 5px 5px lightgray;
  width: 40%;
  height: auto;
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