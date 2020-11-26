import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import ContForm from "../components/ContForm.js";

const About = (props) => {
  return (
    <React.Fragment>
      <div className="bodyAbout">
        <div className="topBanner">
          <h1 className="pageTitle">About</h1>
        </div>
        <div className="navBar">
          <div className="navLink">
            <Link to="/" className="Link">
              Home
            </Link>
          </div>
        </div>

        <div className="topAbout">
          <h2 className="aboutTitle">Welcome to the Bookcase Application</h2>
          <div>
            <p>
              The following application was created by Hawa. This bookcase app
              displays a list of books that a user can save to a local bookcase.
            </p>
            <p>
              Click on the <span className="btnAdd">Add +</span> button to add a
              book to your bookcase. Use the search bar to find the latest books
              by name, author or description.
            </p>
          </div>
          <div className="gifDiv">
            <iframe
              // className="gifBrain"
              title="gif"
              src="https://giphy.com/embed/LpiVeIRgrqVsZJpM5H"
              width="200"
              height="200"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            >
              <p>
                {/* <a href="https://giphy.com/stickers/hungry-read-learn-LpiVeIRgrqVsZJpM5H">via GIPHY</a> */}
              </p>
            </iframe>
          </div>
        </div>

        <div className="midAbout">
          <h2 className="aboutTitle">Give us some feedback!</h2>
          <ContForm />
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;

//  import React from 'react'
// // import ReactDOM from 'react-dom'
// import './About.css';
// import { Link } from 'react-router-dom';

// const About = () => {
//     return (
//         <React.Fragment>
//             <Link to='/'>Home</Link>
//             <div>
//                 <h2>Welcome to the Bookcase Application</h2>
//                 <p>The following application was created by Hawa. This bookcase app displays a list of books that a user can save to a local bookcase.</p>
//                 <p>Click on the "Add + " button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description.</p>
//             </div>
//         </React.Fragment>
//     );
// }
// export default About;
