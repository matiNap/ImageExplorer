import React from "react";
import "./style.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { MAIN } from "../../navRoutes";
import { Typography, useTheme } from "@material-ui/core";

export default () => {
  const { palette } = useTheme();
  return (
    <div className="footer-container">
      <div>
        <div className="footer-header">
          <Logo color="secondary" />
          <Link to={MAIN}>
            <Typography className="footer-nav-text" color="secondary">
              Home
            </Typography>
          </Link>
          <Link to={MAIN} style={{ color: palette.text.secondary }}>
            <Typography className="footer-nav-text">Topics</Typography>
          </Link>
        </div>

        <div className="footer-contact">
          <Typography color="textSecondary" className="footer-contact-text">
            Email:
          </Typography>

          <Typography color="textSecondary" className="footer-contact-text">
            mateusz.napieralski04@gmail.com
          </Typography>

          <Typography color="textSecondary" className="footer-contact-text">
            Portfolio:
          </Typography>
          <Typography
            color="textSecondary"
            className="footer-contact-text email"
          >
            https://matinap.github.io/portfolio
          </Typography>
        </div>
        <div className="footer-note">
          <Typography color="textSecondary" className="footer-note-text">
            Copyright @2020
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="h5" color="textSecondary">
          Powered by
        </Typography>
        <a
          href="https://unsplash.com"
          style={{ color: palette.text.secondary }}
        >
          <Typography variant="h4">Unsplash</Typography>
        </a>
      </div>
    </div>
  );
};
