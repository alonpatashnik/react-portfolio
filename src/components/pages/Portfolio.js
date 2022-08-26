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

  const Card = () => {
    return(
      <div class="card">
          <img class="card-img-top" src="../../public/cute-cuddly.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">cute and cuddly</h5>
            <p class="card-text">Deployed URL: https://gabrielwarner.github.io/cute-and-cuddly/</p>
            <p class="card-text">Github URL: https://github.com/GabrielWarner/cute-and-cuddly</p>
          </div>
      </div>
    )
  }
  
  return (
    <div class= "section">
     <Card />
    </div>
);
}