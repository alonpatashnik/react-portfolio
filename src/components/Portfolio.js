// import React, { useState } from 'react';
// import Header from './Header';
// import About from './pages/AboutSection'
// import Contact from './pages/ContactSection';
// import PortfolioSection from './pages/PortfolioSection';
// import Resume from './pages/ResumeSection';

// const projObjs = [
//   {
//     name: "cute and cuddly",
//     jpg: "",
//     deployedUrl: "",
//     githubUrl: ""
//   },
//   {
//     name: "play outside",
//     jpg: "",
//     deployedUrl: "",
//     githubUrl: ""
//   },

// ]


// export default function Portfolio(projObjs) {
  

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'PortfolioSection') {
//       return <PortfolioSection projObj={projObjs}/>;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>


      

//       {renderPage()}
//     </div>
//   );
// }