import React from 'react';
import '../../style/Section.css'


export default function PortfolioSection() {
  // const projObj = [
  //   {
  //       name: "cute and cuddly",
  //       png: "../../public/cute-cuddly.png",
  //       deployedUrl: "https://gabrielwarner.github.io/cute-and-cuddly/",
  //       githubUrl: "https://github.com/GabrielWarner/cute-and-cuddly"
  //   },
  //   {
  //       name: "play outside",
  //       png: "../../public/play-outside.png",
  //       deployedUrl: "https://play-outside.herokuapp.com/",
  //       githubUrl: "https://github.com/alonpatashnik/project-two"
  //   }
  // ]



  const Card = (props) => {
    let secondLink = ""
    if (props.github2) {
      secondLink = <a class="card-text" href={props.github2}>Backend Github URL</a>
    }
    
    return(
      <div class="card">
          <img src={props.img} class="card-img-top image" alt="app screenshot"/>
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <a class="card-text" href={props.deploy} >Deployed URL</a>
            <br/>
            <a class="card-text" href={props.github} >Github URL</a>
            <br/>
            {secondLink}
          </div>
      </div>
    )
  }
  
  return (
    <div class= "section portfolio">
     <Card img="/cute-cuddly.png" title="Cute And Cuddly" deploy="https://gabrielwarner.github.io/cute-and-cuddly/" github="https://github.com/GabrielWarner/cute-and-cuddly"/>
     <Card img="/play-outside.png" title="Play Outside" deploy="https://play-outside.herokuapp.com/" github="https://github.com/alonpatashnik/project-two"/>
     <Card img="/word-check.png" title="Wordcheck" deploy="https://github.com/alonpatashnik/word-check-test" github="https://github.com/alonpatashnik/word-check-test"/>
     <Card img="/HolloeReach.png" title="The Hollow Reach" deploy="https://funny-meerkat-dcfce3.netlify.app/" github="https://github.com/alonpatashnik/rpg-word-game-frontend" github2="https://github.com/alonpatashnik/rpg-word-game-backend"/>
    </div>
);
}