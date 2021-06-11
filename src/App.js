import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import AddForm from './components/AddForm'

const App = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const addPost = (post) => {
    
  }

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Add'>New Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/Add'>
            <AddForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
