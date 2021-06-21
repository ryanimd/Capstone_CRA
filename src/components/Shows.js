import React from 'react'

class Shows extends React.Component {

  handleSubmit = (event) => {
    
  }

  render = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            id="search"
            placeholder="Search for Shows"
          />
          <button type="submit">Go</button>
        </form>
        <form>
          <input
            type="text"
            id="search"
            placeholder="Search for People"
          />
          <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

export default Shows
