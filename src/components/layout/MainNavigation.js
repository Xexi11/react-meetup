import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";
import React from "react";
import classes from "./MainNavigation.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function MainNavigation({ setPage }) {
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <Router>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/home">
                {" "}
                <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
                  All Meetups
                </a>
              </Link>
            </li>

            <li>
              <Link to="/new">
                <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
                  Add New Meetup
                </a>
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
                  My Favorites
                  <span className={classes.badge}>{0}</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  );
}
