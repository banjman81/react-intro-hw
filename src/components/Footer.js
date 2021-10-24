import React, { Component } from "react";
import '../App.css'

export class Footer extends Component {
    render() {
        return(
            <div style={{backgroundColor : "gray", color: "white", display : 'flex', justifyContent : "space-evenly", marginTop: "20px"}}>
                <p>© 2021 TheCocktailDB. Proudly built in the UK</p>
                <p>https://www.thecocktaildb.com/api.php</p>
                <p>Benjamin(Ban) Man</p>
            </div>
        )
    }
}

export default Footer;