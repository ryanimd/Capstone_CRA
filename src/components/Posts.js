import React from 'react'

class Posts extends React.Component {

  render = () => {
    return (
      <div id="posts-container">
        <h3>{this.props.post.name}</h3>
        <h4>{this.props.post.message}</h4>
        <details id="edit-form">
            <summary>Edit Post</summary>
            <form id={this.props.post.id} onSubmit={this.props.updatePost}>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                onChange={this.props.handleChange}
              />
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                type="text"
                name="message"
                onChange={this.props.handleChange}>
              </textarea>
              <button type="submit">Edit</button>
            </form>
            <button onClick={this.props.deletePost} value={this.props.post.id}>Delete</button>
        </details>
      </div>
    )
  }

}

export default Posts
