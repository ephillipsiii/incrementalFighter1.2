import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Game")}
        className={
          props.currentPage === "Game" ? "nav-link active" : "nav-link"
        }
      >
        Game
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Gear")}
        className={
          props.currentPage === "Gear" ? "nav-link active" : "nav-link"
        }
      >
        Gear
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Stats")}
        className={
          props.currentPage === "Stats" ? "nav-link active" : "nav-link"
        }
      >
        Stats
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
