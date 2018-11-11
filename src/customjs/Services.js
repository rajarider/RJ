import React, { Component } from "react";

function FormValue(props) {
    console.log(props)
    if (props.name) {
        return <h1>Hi {props.name.detail}, <p>Thank you  for login</p></h1>;

    }
    return <h1>Hello, You are not logged in </h1>;
}

class Services extends Component {



    render() {
        return (
            <div>Landing Page
            <FormValue name={this.props.location.state}></FormValue>
            </div>
        )
    }

}

export default Services;