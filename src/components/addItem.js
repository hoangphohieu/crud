import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class AddItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            name:null,

        }
    }
    addItem =(payload)=>{this.props.addItem(payload)}
    changeInputValue=(e)=>{this.setState({name:e.target.value})}
    render() {
        
        return (
            <div>
                <input onChange={this.changeInputValue}/>
                <button onClick={()=>this.addItem(this.state.name)}>add</button>
            </div>
        );
    }
}

export default AddItem;