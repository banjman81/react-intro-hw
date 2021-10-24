import axios from "axios";
import React, { Component } from "react";
import Box from "./Box";

export class Body extends Component {
    state = {
        imageLink : "https://www.thecocktaildb.com/images/cocktail_left.png",
        description : "Open source cocktail database. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, vel hic a sequi quod distinctio at quos odio reiciendis possimus officiis, earum, alias quis consectetur sed? Dolores nam officiis laudantium. Ratione optio reiciendis, consequuntur, numquam perferendis, veritatis voluptas corrupti vero aliquid nam provident in quasi eos enim. Voluptatem, eius quam.",
        drinks:[1,2,3]
        
    }
    

    async componentDidMount() {
        // let result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        // let theDrink = result.data.drinks[0]
        // console.log(theDrink)
        // console.log(theDrink.strDrink)
        // console.log(theDrink.strDrinkThumb)
        // console.log(theDrink.strAlcoholic)
        // console.log(theDrink.strCategory)
        let arraylength =  this.state.drinks.length
        let counter = 0

        let drinksArray = []

        while( counter < arraylength){
            let result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            let theDrink = result.data.drinks[0]
            drinksArray.push({
                name : theDrink.strDrink,
                image: theDrink.strDrinkThumb,
                description: theDrink.strAlcoholic,
                category: theDrink.strCategory
            }) 
            counter ++
        }

        this.setState({
            drinks : drinksArray
        })
    }

    render() {
        const drinkArray = this.state.drinks
        console.log(drinkArray)
        return(
            <div style={{width : `${this.props.width}%`}}>
                <div>
                    <img src={this.state.imageLink} alt="cocktail" />
                    <h5 style={{margin : "20px 15%"}}>{this.state.description}</h5>
                </div>
                <div style={{display : "flex", justifyContent: "space-evenly"}}>
                    <Box name={drinkArray[0].name} image={drinkArray[0].image} description={drinkArray[0].description} category={drinkArray[0].category}/>
                    <Box name={drinkArray[1].name} image={drinkArray[1].image} description={drinkArray[1].description} category={drinkArray[1].category} />
                    <Box name={drinkArray[2].name} image={drinkArray[2].image} description={drinkArray[2].description} category={drinkArray[2].category} />
                </div>
                
            </div>
        )
    }
}

export default Body;