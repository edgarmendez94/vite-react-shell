import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import AuthenticatedApp from './components/AuthenticatedApp'

function App() {
  const [logginIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <div className='app-container' >
      {!logginIn ? (
        <UnauthenticatedApp login={login}/>
      ): (
        <AuthenticatedApp logout={logout}/>
      )}
    </div>
  )
}

export default App
