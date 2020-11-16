import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';


const soccerImage = "https://koditips.com/wp-content/uploads/european-football-soccer-kodi.png";

const Home = () => (
    <div className="App bg">
      <header className="App-header">
      <Link to="/categories">
        <div className="enter-site">
          <img src={soccerImage} alt="soccer-ball" />
          <span>The Showboat</span>
        </div>
        </Link>
          <h1>
            <br />
         All the goals.<br />
         All the leagues.<br />
         Watch them all here.<br />
          </h1>
          <br />
          <h3>
            By Gee Patel
          </h3>
      </header>
      

    </div>
  );

export default Home;
