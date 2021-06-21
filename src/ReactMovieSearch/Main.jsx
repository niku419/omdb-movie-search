import React from 'react'
import { Container } from 'react-bootstrap'
import TitleSearch from './TitleSearch'
import CustomSearch from './CustomSearch'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Main() {
  return (
    <Container className="pt-5 justified-container-center">
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5} 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#66fcf1'
          }}>
          <CustomSearch/>
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
  )
}