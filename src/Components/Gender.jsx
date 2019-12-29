import React, { Component } from 'react';


class Gender extends Component {

 constructor(props){
    super(props);
    this.state={
        genderChange:''
    }
    this.changeGender=this.changeGender.bind(this);
        }

         changeGender(event){
            this.setState({
                genderChange:event.target.value,
            }
            );
            this.props.handler(this.state.genderChange);  

            }            
    render() {
     
        return (
            <div class = "gender">
                <select value={this.state.value}  onChange= {this.changeGender} onClick= {this.changeGender}>
                    <option>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
               
            </div>
        );
    }
}

export default Gender;
