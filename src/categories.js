import React from 'react';
import { Link } from 'react-router-dom';
import './styles/categories.css';
import './styles/App.css';
import MenuBar from './menuBar';

const imagePL = "https://www.footballticketnet.com/files/images/tournaments/Buy-Premier-League-Football-Tickets-FootballTicketNet.png";
const imageCL = "https://i.pinimg.com/originals/4e/e8/e9/4ee8e9139110201b6e17ac878d1250fd.jpg";
const imageEFL = "https://upload.wikimedia.org/wikipedia/en/3/37/EFL_Championship.png";
const imageSA = "http://www.egypttoday.com/images/larg/24859.jpg";
const imageLL = "https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos4.jpg";
const imageBL = "https://1000logos.net/wp-content/uploads/2018/10/Bundesliga-logo.jpg";
const imageWSL = "https://www.underconsideration.com/brandnew/archives/fa_womens_league_logo.jpg";
const imageFL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHb3E8S7v8qIG4IfJ6C4FRFAeR5WDoiFvxEGeNALabtkCnlda&s";

const Categories = () => (
    <div className="App bg">
      <MenuBar />
      <header className="App-header">
        <div className="container">
        <Link to="/categories/premier-league"><img className="item" src={imagePL} alt="Premier League" /></Link>
        <Link to="/categories/champions-league"><img className="item" src={imageCL} alt="Champions League" /></Link>
        <Link to="/categories/english-football-league"><img className="item" src={imageEFL} alt="EFL" /></Link>
        <Link to="/categories/serie-a"><img className="item" src={imageSA} alt="Serie A" /></Link>
        <Link to="/categories/la-liga"><img className="item" src={imageLL} alt="La Liga" /></Link>
        <Link to="/categories/bundesliga"><img className="item" src={imageBL} alt="Bundesliga" /></Link>
        <Link to="/categories/wsl"><img className="item" src={imageWSL} alt="Women's Super League" /></Link>
        <Link to="/categories/french-ligue-1"><img className="item" src={imageFL} alt="Amateur Football" /></Link>
        </div>
      </header>
    </div>
);

export default Categories;