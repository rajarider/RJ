import React, { Component } from "react";
import Credentials from './../json/Credentials.json'

function FormWrap(props) {
    return <h1>Hello, </h1>;
  }

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state);
        
        
     
        for(var i=0;i<Credentials.users.length;i++){

            if((Credentials.users[i].username) === this.state.value){
                this.props.history.push({
                    pathname: '/',
                    search: '?',
                    state: { detail: this.state.value }
                  })
               break;   
            }
            else{
                this.props.history.push('/home')

            }
            console.log(Credentials.users[i].username)


        }
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default About;