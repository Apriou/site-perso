import React from 'react'

import '../css/Home.css'

const Home = (props) => {
    return(
        <div className="tabPanel">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bienvenue sur mon site personnel! <br/>
         <br/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Je m'appelle Arnaud Priou, je suis développeur web / mobile.
         <br/>
         <br/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;J'ai réalisé ce site pour que vous ayez accès à quelques projets personnels sur lesquels j'ai travaillé ces derniers temps. <br/> <br/>
        {/*  Le but de ces projets a été d'étoffer mes connaissances en informatique, à utiliser divers outils et frameworks que je ne connaissais pas jusque là. <br/> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionné, j'ai été et je suis toujours poussé par la curiosité et l'envie d'apprendre de nouvelles choses. Vous pourrez découvrir ce que j'ai réalisé en suivant les liens correspondant à ces projets.
       {/*   Par ailleurs je pense qu'il est essentiel pour un développeur de pouvoir évoluer et s'adapter aux technologies qui répondent aux besoins des entreprises et des utilisateurs. */}
    
         </div>    
    )
}

export { Home }