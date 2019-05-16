import React from 'react'

import NavBar from './NavBar'
// the App component should render out the GifListContainer component
import ListContainer from '../containers/ListContainer'

const App = () => {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <ListContainer/>
    </div>
  )
}

export default App
