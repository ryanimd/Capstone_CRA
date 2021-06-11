import React from 'react'
import { withRouter } from 'react-router-dom'

class AddForm extends React.Component {
  state = {
    name: '',
    message: '',
  }

  handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

  handleSubmit = (event) => {
    this.props.addPost(this.state)
      this.setState({
        name: '',
        message: '',
      })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.handleSubmit()
    this.props.history.push('/')
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            name="message"
            onChange={this.handleChange}>
          </textarea>
          <br />
          <br />
          <button onClick={this.handleClick}>Add</button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddForm)
