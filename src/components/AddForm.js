import React, { useState } from 'react'

const AddForm = (props) => {
  const newPost = { name: '', message: '' }
  const [post, setPost] = useState(newPost)

  const handleChange = (e) => {
    setPost({post, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addPost(post)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="age">Message</label>
        <input
          id="message"
          type="text"
          name="message"
          value={post.message}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Add</button>
      </form>
    </div>
  )

}

export default AddForm
