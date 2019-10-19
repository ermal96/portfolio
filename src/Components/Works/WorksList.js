import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import classes from "./Works.module.css";
import {
  IoLogoWordpress,
  IoLogoCss3,
  IoIosCart,
  IoIosBrush,
  IoIosBrowsers
} from "react-icons/io";
class WorksList extends Component {
  render() {
    const { project } = this.props;
    const {
      css,
      photoshop,
      wordpress,
      eCommerce,
      illustrator,
      slug,
      name
    } = project.fields;
    return (
      <Grid item sm={3} xs={6}>
        <div className={classes.e_box}>
          <p className="primary_color">
            {wordpress ? <IoLogoWordpress /> : null}
          </p>
          <h4>{name}</h4>
          <div>
            {css ? <IoLogoCss3 /> : null}
            {eCommerce ? <IoIosCart /> : null}
            {illustrator ? <IoIosBrush /> : null}
            {photoshop ? <IoIosBrowsers /> : null}
          </div>
          <Link className={classes.e_view} to={`works/${slug}`}>
            View Project
          </Link>
        </div>
      </Grid>
    );
  }
}
WorksList.propTypes = {
  project: PropTypes.object
};

export default WorksList;
