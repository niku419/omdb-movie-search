import React, {useContext} from 'react'
import { Card, Container } from 'react-bootstrap'
import { ResultContext } from './Home'

export default function TitleResult() {
  const {titleResults} = useContext(ResultContext)
  return (
    <Container className="row">
      <Container className="col pt-5 d-flex align-items-center justify-content-center">
        <Card className="mb-3" style={{maxWidth: "540px", width: "18rem"}} >
          <Card.Img className="img-fluid" style={{maxWidth: "100%", height: "auto"}} src={titleResults.Poster} alt="..."/>
          <Card.Title class="blockquote pt-2" style={{textAlign: "center"}}>
          {titleResults.Title}
          <footer className="blockquote-footer">
            <small className="text-muted">
              <cite title="Source Title">{titleResults.Year}</cite>
            </small>
          </footer>
        </Card.Title>
        </Card>
      </Container>
      <Container className="col pt-5 d-flex align-items-center justify-content-center">
        <Card.Body>
          <p>{titleResults.Plot}</p>
          <ul>
            <li><strong>Actors</strong>: {titleResults.Actors}</li>
            <li><strong>Awards</strong>: {titleResults.Awards}</li>
            <li><strong>Released</strong>: {titleResults.Released}</li>
            <li><strong>Writer</strong>: {titleResults.Writer}</li>
            <li><strong>Type</strong>: {titleResults.Type}</li>
            <li><strong>imdbRating</strong>: {titleResults.imdbRating}</li>
          </ul>
        </Card.Body>
      </Container>
    </Container>
  )
}