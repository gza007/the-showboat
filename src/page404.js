import React from 'react';
import { Link } from 'react-router-dom';
import './styles/page404.css';
import MenuBar from './menuBar';

const imagePL = "https://www.footballticketnet.com/files/images/tournaments/Buy-Premier-League-Football-Tickets-FootballTicketNet.png";

const NoMatchPage = () => (
      <div className="redirect-wrapper">
        <MenuBar />
          <div className="redirect">
            <h2>
            Oops! No goals to see here!
            {/* Go to the Premier League!<br /> */}
            </h2>
          </div>
          <div className="link">
            <Link to="/categories/premier-league">
              <img className="hyperlink-image" src={imagePL} alt="EPL" />
            </Link>
          </div>
      </div>
    );

  export default NoMatchPage;