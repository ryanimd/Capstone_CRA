import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import AddForm from './components/AddForm'
import Posts from './components/Posts'

class App extends React.Component {
  state = {
    posts: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  addPost = (post) => {
    axios
      .post('https://quiet-dusk-54555.herokuapp.com/api/posts', post)
      .then(
        (response) => {
          this.getPosts()
        }
      )
  }

  getPosts = () => {
    axios
      .get('https://quiet-dusk-54555.herokuapp.com/api/posts')
      .then(
        (response) => {
          this.setState({ posts: response.data })
        },
        (err) => {
          console.log(err)
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }

  updatePost = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('https://quiet-dusk-54555.herokuapp.com/api/posts/' + id, this.state)
      .then(
        (response) => {
          this.getPosts()
          this.setState({
            name: '',
            message: '',
          })
        }
      )
  }

  deletePost = (event) => {
    axios
      .delete('https://quiet-dusk-54555.herokuapp.com/api/posts/' + event.target.value)
      .then(
        (response) => {
          this.getPosts()
        }
      )
  }

  componentDidMount = () => {
    this.getPosts()
  }

  render = () => {
    return (
      <BrowserRouter>
        <div>
          <h1 id="title">FanFave</h1>
          <nav>
            <ul>
              <li className="nav-links">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-links">
                <Link to='/Add'>New Post</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/Add'>
              <AddForm
                addPost={this.addPost}
              />
            </Route>
            <Route path='/'>
              {this.state.posts.reverse().map((post) => {
                return (
                  <Posts
                    key={post.id}
                    post={post}
                    updatePost={this.updatePost}
                    deletePost={this.deletePost}
                    handleChange={this.handleChange}
                  />
              )
            })}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
