import React from "react";
import NavBar from "./components/NavBar";
import Photogrid from "./components/Photogrid";
import AboutBody from "./components/AboutBody";
import Card from "./components/Card"
import "./index.css"
import data from "./components/data";

export default function App(){

    const cards = data.map(item =>{
        return(
            <Card
                img={item.Coverimg}
                rating = {item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}    
            />
        )
    })
    return(
        <div>
            <NavBar/>
            <Photogrid/>
            <AboutBody/>
            {cards}
        </div>
    )
}
