import React, { Component } from "react";


export class Sidebar extends Component {
    state = {
        background : "rgb(199, 199, 199)"
    }
    
    handleColorClick = (event) => {
        this.setState({
            background : event.target.value
        })
    }

    render() {
        return(
            <div style={{textAlign : "center", backgroundColor : this.state.background, width : `${this.props.width}%`}}>
                <ul style={{listStyleType : "none", textAlign: "center", padding : "0"}}>
                    <li><button onClick={this.handleColorClick} value="rgb(219, 100, 100)">Red</button></li>
                    <li><button onClick={this.handleColorClick} value="rgb(122, 194, 122)">Green</button></li>
                    <li><button onClick={this.handleColorClick} value="rgb(70, 144, 204)">Blue</button></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;