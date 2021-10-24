import React, { Component } from "react";
import Box from "./Box";

export class Body extends Component {
    render() {
        return(
            <div style={{width : `${this.props.width}%`}}>
                <div style={{display : "flex", justifyContent: "space-evenly"}}>
                    <Box />
                    <Box />
                    <Box />
                </div>
                
            </div>
        )
    }
}

export default Body;