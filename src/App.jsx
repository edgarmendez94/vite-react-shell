import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import AuthenticatedApp from './components/AuthenticatedApp'
import ModalLogin from './components/modal'

function App() {
  const [logginIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <div className='app-container' >
      {!logginIn ? (
        <ModalLogin login={login}/> 
      ): (
        <AuthenticatedApp logout={logout}/>
      )}
    </div>
  )
}

export default App
