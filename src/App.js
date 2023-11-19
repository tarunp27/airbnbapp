import React from "react";
// import NavBar from "./components/NavBar";
// import Photogrid from "./components/Photogrid";
// import AboutBody from "./components/AboutBody";
// import Card from "./components/Card"
import Contact from "./components/Contact";
import "./index.css"

export default function App(){
    return(
        <div>
        {/* <NavBar/>
        <Photogrid/>
        <AboutBody/>
        <Card/> */}
        <Contact 
            img="./kitty.jpg"
            name="FluffyKings"
            phone="902948502"
            email="dfsfs@you.com"    
            />
        <Contact 
            img="./kitty.jpg"
            name="FluffyK2"
            phone="634634636"
            email="dkhflhdjkf@yao.com"
        />
        <Contact
            img="./kitty.jpg"
            name="Fluffy33"
            phone="8374928735"
            email="sdhsuhgou@mee.com"
        />
        <Contact
            img="./kitty.jpg"
            name="GloomyS"
            phone="259284059"
            email="lrjshgljsr@iill.com"
        />

        </div>
    )
}
