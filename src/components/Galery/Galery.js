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
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.2em;
  position: fixed;
`
const GaleryPhotos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
  @media (min-width: 700px) {
    margin: 40px auto;
    margin-bottom: 10px;
  }  
  @media (min-width: 1100px) {
    flex-direction: row;
  }  
`
const GaleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    margin-bottom: 10px;
  }  
  @media (min-width: 1100px) {
    width: 50%;
  }  
`
const Img = styled.img`
  border-radius: 10px;
  margin: 10px 3px;
  box-shadow: 10px 5px 5px lightgray;
  width: 310px;
  height: fit-content;
  @media (min-width: 700px) {
    margin: 15px 18px;
    width: 400px;
  }  
`
export default function Galery(){

  const [photos, setPhotos] = useState([]);

  const upload = (categorie) => {

    fetch('photos/' + categorie + '.json').then(response => {
      return response.json();
    }).then(data => {
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
    setIndex(index)
  }

  useEffect(() => {

    fetch('/categories/categories.json').then(response => {
      return response.json();
    }).then(data => {
      data.entree.forEach((categorie) => upload(categorie))
      let cs = data.entree
      cs.unshift('Tout')
      setCategories(cs)
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
          <GaleryColumn>
            {
              photos.map((photo, i) => (index === 0 || categories[index] === photo.categorie) &&
                                       (i % 2 === 0) ?
                <Img
                  src={photo.image.replace('/public', '')}
                  alt={photo.image}
                />  
                : null
              )
            }
          </GaleryColumn>
          <GaleryColumn>
            {
              photos.map((photo, i) => (index === 0 || categories[index] === photo.categorie) &&
              (i % 2 === 1) ?
                <Img
                  src={photo.image.replace('/public', '')}
                  alt={photo.image}
                />  
                : null
              )
            }
          </GaleryColumn>
        </GaleryPhotos>
      </Container>
    </>
  )
}