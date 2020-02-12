import React from 'react';
import { Link } from 'react-router-dom';
import './styles/page404.css';
import MenuBar from './menuBar';

const imagePL = "https://www.footballticketnet.com/files/images/tournaments/Buy-Premier-League-Football-Tickets-FootballTicketNet.png";

const NoMatchPage = () => (
      <div className="redirect-wrapper">
        <MenuBar />
        <header className="redirect">
        <h2>
        Oh Dear.<br/>
        No goals to see here! 
        </h2>
      <Link to="/categories/premier-league">
        <img className="hyperlink-image" src={imagePL} alt="EPL" />
        </Link>
          </header>
      </div>
    );

  export default NoMatchPage;