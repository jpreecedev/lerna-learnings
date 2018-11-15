import * as React from 'react'

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>
          A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and
          Babel 7
        </h1>
        <button type="button" className="button" onClick={() => alert('bob')}>
          Show me a message
        </button>
      </>
    )
  }
}

export default Home
