import React,{ useState} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import TitleResult from './TitleResult'
import CustomResult from './CustomResult'
import TitleIdResult from './TitleIdResult'
import Main from './Main'

export const ResultContext = React.createContext(null)
export default function Home() {
  const [titleResults, setTitleResults] = useState({})
  const [customResults, setCustomResults] = useState({})
  return (
    <Router>
      <ResultContext.Provider value={{titleResults, setTitleResults, customResults, setCustomResults}}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/titleResult' component={TitleResult}/>	
          <Route exact path='/customResult' component={CustomResult}/>
          <Route exact path='/:id' component={TitleIdResult}/>
        </Switch>
      </ResultContext.Provider>
    </Router>
  )
}
