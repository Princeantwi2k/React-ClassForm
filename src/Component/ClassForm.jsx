import React, { Component } from 'react';
import './Class.css'

class ClassForm extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            gender:"",
            phonenumber:""
        }

    }
handleChange =(e) =>{

const name = e.target.name;
const value = e.target.value;

this.setState({[name]:value})
}
handleSubmit =(e)=>{
e.preventDefault();
console.log(this.state)
this.setState({
    firstname:"",
    lastname:"",
    email:"",
    gender:"",
    phonenumber:"",
    male:"",
    female:"",
})
}
    
    render() {
        return (
            <form className="class-form" onSubmit={this.handleSubmit}>
            <h4>Class Form</h4>
            FirstName: <br />
            <input
              className="form_input"
              name="firstname"
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange}
              placeholder={this.props.name}
            />
            <br />
            LastName: <br />
            <input
              className="form_input"
              name="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
              placeholder={this.props.name}
            /><br/>
            Email: <br />
            <input
              className="form_input"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder={this.props.email}
            /><br />
           Gender <br />
           <select  className="form_input">
               <option value={this.state.male} onChange={this.handleChange} name="male">male</option>
               <option value={this.state.female} onChange={this.handleChange} name="female">female</option>
              
           </select>
           
            <br />
            Phone Number: <br />
            <input
              className="form_input"
              name="phonenumber"
              type="text"
              value={this.state.phonenumber}
              onChange={this.handleChange}
              placeholder={this.props.email}
            /><br/>
            <input className="form_button" type="submit" value="Submit" />
            </form>
        )
    }
}

export default ClassForm;
