import React from 'react'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
//import { faInstagram, faGithub, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Badge } from 'react-bootstrap'
import TitleSearch from './TitleSearch'
import CustomSearch from './CustomSearch'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Main() {
  return (
    <>
      <Container className="pt-5 justified-container-center">
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={2.5} 
            className="row"
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: '#66fcf1'
            }}>
            <CustomSearch className="col"/>
            <h4 className="pt-5 text-center col d-flex flex-row-reverse">
              <Badge variant="dark">Scroll down to search by title</Badge>
            </h4>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#fc4445' }} />
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
            }}>
            <TitleSearch/>
          </ParallaxLayer>
        </Parallax>
      </Container>
      {/* <Container>
        <Navbar bg="transparent" fixed="bottom" variant="light">
          <Navbar.Brand >
            <strong>Niku419</strong>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/niku419"><FontAwesomeIcon  icon={faGithub} /></Nav.Link>
            <Nav.Link href="https://linkedin.com/niku_419"><FontAwesomeIcon  icon={faLinkedinIn} /></Nav.Link>
            <Nav.Link href="https://instagram.com/_niku_419"><FontAwesomeIcon  icon={faInstagram} /></Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100069976086066"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
          </Nav>
          <Form inline>
            <Nav className="mr-auto"> 
              <Nav.Link>made for Hiku<FontAwesomeIcon color="#8d0101" icon={faHeart} /></Nav.Link>
            </Nav> 
          </Form>
        </Navbar>
      </Container>*/}
    </>
  )
}
