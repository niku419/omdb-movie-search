import React, {useContext} from 'react'
import {Container, Card, CardDeck} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ResultContext } from './Home'

export default function CustomResult() {
  const {customResults} = useContext(ResultContext)
  return (
    <Container >
      <CardDeck className="row" >
      {customResults.Search.length>0 && customResults.Search.map((customResult, index) => (
        <Container className="col-xs-12 col-sm-6 col-md-4">
          <Card style={{margin: "5% 0%"}}>
            <div className="view overlay">
              <Card.Img className="card-img-top" src={customResult.Poster} alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <Card.Body style={{margin: "0% 0% 0% 3%", padding: "6% 0%"}}>
              <Card.Title><Link to={`/${customResult.imdbID}`}>{customResult.Title}</Link></Card.Title>
              <Card.Text>{customResult.Type} {customResult.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      ))}
      </CardDeck>
    </Container>
  )
}