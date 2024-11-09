import { useState } from 'react'
import {Link} from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <div>
      <h1> Hello User</h1>
      <Link to="/signup"><button>Sign Up</button></Link>
     </div>
  )
}

export default App
