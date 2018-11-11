import React, { Component } from "react";


class Home extends Component {
  state = {
    redirect: false
  }

  redirectFunction = () => {
    this.setState({
    redirect: true
  })
  this.props.history.push(`/`)

}

  render() {
 

    return (
      <div>
        <h2>HOME</h2>
        <button onClick={this.redirectFunction}>redirect to Landing page</button>
      </div>
    );
  }
}


export default Home;