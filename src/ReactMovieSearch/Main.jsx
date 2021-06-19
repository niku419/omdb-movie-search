import React,{ useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import TitleSearch from './TitleSearch'
import CustomSearch from './CustomSearch'

export default function Main() {
  const [key, setKey] = useState('Search By Title')
  return (
    <Container className="pt-5 justified-container-center">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Search By Title" title="Search By Title"><TitleSearch/></Tab>
        <Tab eventKey="Custom Search" title="Custom Search"><CustomSearch/></Tab>
      </Tabs>
    </Container>
  )
}