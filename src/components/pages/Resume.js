import React from 'react';
import '../../style/Section.css'

export default function Resume() {
  return (
    <div class= "section">
      <div>
        <h2>Please check out <a href="https://www.linkedin.com/in/alon-patashnik-52a3a48b/" class="text-link">my linked in profile</a></h2>
      </div>
      <br/>
      <br/>
      <br/>
      <div class="resume-align">
        <img src="/work-exp.png" alt="experience"/>
        <img src="/education.png" alt="education" height="350px"/>
      </div>
    </div>
  )
}