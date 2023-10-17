import React from 'react'
import '/Users/dzcoding/PersonalSite/david-site/src/CSS/Projects.css'

function Projects() {
  return (
    <div className = "Projects">
      <div className = "my-projects">My Projects</div>
      <div className = "content-projects">
      <div className = "project-container">
        <h1 className = "project-title">RetroGaming eCommerce Website | Developer | January 2023</h1>
          <a className = "github-link" href="https://github.RetroGamingProMax.git"> Github Link </a>
          <h3 className = "project-intro">An eCommerce site specializing in selling older “retro” video games and systems. 
          Users are able to browse the catalog of merchandise, filter for keywords, view each product in detail, add products to their cart, among other functionalities.
          </h3>
          <h3 className = "project-intro">A project developed with a group to simulate an ecommerce website. Complete with user profiles / personal shopping carts,
              users have a personalized interface complete with past purchases. Please feel free to use the filter and search functions while you browse! 
          </h3>
            <h4 className = "project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</h4>
            <h4 className = "project-description">- Implemented a user login system which enabled every profile to have their own unique carts, and order histories</h4>
            <h4 className = "project-description">- Successfully addressed a key challenge of implementing individual unique carts for each user by introducing a new Cart model in the backend. By assigning each user their own Cart, we were able to 
            overcome the issue and provide users with individual carts and purchase histories, resulting in improved user experience</h4>
      </div>
      <div className = "project-container">
        <h2 className = "project-title">EpitoME Social Media Website | Developer | February 2023</h2>
          <a className = "github-link" href="https://github.com/CapstoneGroupI/epitoME.git"> Github Link </a>
          <h3 className = "project-intro">A social media site where Users are able to find other users, add as a friend, and chat with friends. 
            Inspired by the episode Nosedive from the series Black Mirror.
          </h3>
          <h3 className = "project-intro">A project developed with a group to simulate a social media website. Functionalities include individual users and user-sided feeds.
              Each user has the capability to upload their own profile picture, edit their info, post comments / pictures, add / remove buddies,
              and even chat with other users!
          </h3>
            <h4 className = "project-description">- Designed and developed a social media app with a range of features, including the ability to create posts, post comments, and exchange messages with other users
            <h4 className = "project-description">- Developed on the frontend using React.js, Redux, CSS, HTML and on the backend using Express.</h4>
            <h4 className = "project-description">- Implemented a user login system which enabled users to have their own interface, added friends, rating, etc.</h4>
            </h4>
      </div>
    </div>
    </div>
  )
}

export default Projects