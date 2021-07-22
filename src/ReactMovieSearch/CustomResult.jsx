import React, {useContext} from 'react'
import {Container, Card, CardDeck} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ResultContext } from './Home'

export default function CustomResult() {
  const {customResults} = useContext(ResultContext)
  return (
    <div className="container-fluid" style={{backgroundColor: "#fc4445"}} >
      <CardDeck className="row" >
      {customResults.Search.length>0 && customResults.Search.map((customResult, index) => (
        <Container className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
          <Card style={{margin: "5% 0%"}}>
            <div className="view overlay">
              <Card.Img className="card-img-top img" src={customResult.Poster} alt="Card image cap" />
            </div>
            <Card.Body style={{textAlign: "center",backgroundColor: "black"}}>
              <Card.Title>
                <Link to={`/${customResult.imdbID}`}>{customResult.Title}</Link>
              </Card.Title>
              <Card.Text style={{color: "#666666"}}>{customResult.Type} {customResult.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      ))}
      </CardDeck>
      <a className="btn btn-link btn-dark mb-3" href="/" style={{color: "white"}}>Go back!!</a>
    </div>
  )
}
