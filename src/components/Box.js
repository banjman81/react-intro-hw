import React, { Component } from "react";
import '../App.css'

export class Box extends Component {
    render() {
        return(
            <div className="box-content">
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt="" />
                <h4>{this.props.category}</h4>
                <h4>{this.props.description}</h4>
            </div>
        )
    }
}

export default Box;