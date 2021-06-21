import React, {useContext, useEffect, useState} from 'react'
import { Card, Container, Spinner, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ResultContext } from './Home'

export default function TitleResult() {
  const {id=null} = useParams()
  const {titleResults, setTitleResults} = useContext(ResultContext)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(()=> {
		axios.get(`https://www.omdbapi.com/`, {
      params:{
        i: id,
        apikey: "85835f53"
      }
	  })
		.then(response => {
			setTitleResults(response.data)
			setLoading(false)
		})
		.catch(err => {
			setError(err);
		});
}, [setTitleResults, id])

  if(loading){
    return ( 
      <div style={{display: "grid", placeItems: "center"}}>
       <Spinner animation="grow" />
    </div>
    )
  }
  if(error){
    return <div>error...</div>
  }
  return (
    <div className="container-fluid" style={{backgroundColor: "#fc4445"}}>
      <div className="row pt-5 d-flex align-items-center justify-content-around">
        <Card className="col-md-4 mb-5">
          <Card.Img className="img-fluid" style={{maxWidth: "100%", height: "100%"}} src={titleResults.Poster} alt="..."/>
        </Card>
        <Container className="col-md-4 row d-flex align-items-center justify-content-center">            
          <h1 className="pb-3 col text-center">
            <Badge variant="dark">{titleResults.Title}</Badge>
          </h1>
          <Card.Body className="col">
            <ul>
              <li><strong>Actors</strong>: {titleResults.Actors}</li>
              <li><strong>Awards</strong>: {titleResults.Awards}</li>
              <li><strong>Released</strong>: {titleResults.Released}</li>
              <li><strong>Writer</strong>: {titleResults.Writer}</li>
              <li><strong>Type</strong>: {titleResults.Type}</li>
              <li><strong>imdbRating</strong>: {titleResults.imdbRating}</li>
            </ul>
          </Card.Body>
          <div className="col text-center">
            <Card.Title>Plot</Card.Title>
            <Card.Text >{titleResults.Plot}</Card.Text>
          </div> 
        </Container>
      </div>
      <a className="btn btn-link btn-dark mb-3" href="/" style={{color: "white"}}>Go back!!</a>
    </div>
  )
}
