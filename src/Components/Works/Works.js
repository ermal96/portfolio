import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import classes from "./Works.module.css";
import axios from 'axios';
import {Modal} from 'reactstrap';
import Box_back_ from "../../Assets/box_back.svg"

export default class Works extends Component {

  state = {
    projects: [],
    isLoading: true,
    modal: false,
    singleProject: ''
  }

  componentDidMount() {
    axios
      .get('/projects')
      .then(res => {
        const projects = res.data.Projects;
        this.setState({projects, isLoading: false})
      })
      .catch(error => {
        console.log(error);
      });

  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getProjectsById = (id) => {
    axios
      .get(`/projects/${id}`, {})
      .then(res => {
        const singleProject = res.data.projectImage;
        this.setState({singleProject, isLoadingModal: false});
        this.toggle();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container style={{
        marginTop: "20px", marginBottom: "35px"
      }} maxWidth="lg">
        {this.state.isLoading
          ? 'Loading Works ...'
          : null}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <p className={classes.e_close_window} onClick={this.toggle}>Close Window</p>
          <img
            className={classes.e_full_project_img}
            alt='ProjectImage'
            src={this.state.singleProject}/>

        </Modal>

        <Grid className="animate" container spacing={3}>
          {this
            .state
            .projects
            .map(project => {
              return (
                <Grid key={project._id} item sm={3} xs={6}>
                  <div style={{backgroundImage: `url(${Box_back_})`}} className={classes.e_box}>
                    <h3>{project.name}</h3>
                    {/* <p className={classes.e_txt}>{project.description}</p> */}
                    <p onClick={() => this.getProjectsById(project._id)} className={classes.e_view}>View Project</p>
                  </div>
                </Grid>

              )
            })
}
        </Grid>
      </Container>
    )
  }

}
