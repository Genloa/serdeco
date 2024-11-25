import React from "react";
import Dash from "../components/layouts/Dash";

function Home(){
    return (
        <>
            <Dash></Dash>
            <div>
              <div>
              <Carrusel></Carrusel>
              </div>
              <div>
                <h1>Descripcion de la empresa</h1>
              </div>
              
            </div>
        </>
    );
}

function Carrusel(){
    return (
    <div> <h1>Carrusel</h1></div>
    )
}
export default Home;