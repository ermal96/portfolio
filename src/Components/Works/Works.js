import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
//import classes from "./Works.module.css";
import axios from 'axios';






export default class Works extends Component {

state = {
  projects: []
}

componentDidMount(){
  axios.get('/projects')
  .then( res =>  {
    const projects = res.data.Projects;
    this.setState({projects})
    
  })
  .catch(error =>  {
    console.log(error);
  });
}


render(){
  return (
    <Container style={{marginTop: "50px"}} maxWidth="lg">
      <Grid className="animate" container spacing={3}>
      {this.state.projects.map(project => {
        return(
          <div key={project._id}>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <img alt={project.name} src={project.projectImage} />
          </div>
        )
      })}
      </Grid>
    </Container>
  )
}
  
}
