import React, { Component } from "react";

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
     
    }

  }

  raja = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        
        <h4>{this.state.count}</h4>
        <button onClick={this.raja}>Click Me</button>
      </div>



    );
  }
}
 
export default Contact;