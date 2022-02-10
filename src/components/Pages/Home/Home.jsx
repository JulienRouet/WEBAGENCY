import React from "react";
import github from "../Assets/img/github.png";

const Home = () => {
    return (
        
        <div className="Home">
            <h1>Confiez vos rêves à des experts du Web</h1>
            <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
            Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
            <div className="container">
                <img src={github} width="1000" height="450" />
            </div>         
        </div>
    );
};

export default Home;
