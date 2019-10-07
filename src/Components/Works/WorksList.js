import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom'; 
import classes from "./Works.module.css";
class WorksList extends Component {

   render (){
    const {project} = this.props
    return (
      <Grid  item sm={3} xs={6}>
        <div className={classes.e_box}>
          <h4>{project.fields.name}</h4>
          <Link to={`works/${project.fields.slug}`}>View Project</Link>
        </div>
      </Grid>
    
    )
   }

}
WorksList.propTypes = {
  project: PropTypes.object
}


export default WorksList
