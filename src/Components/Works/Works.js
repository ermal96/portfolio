import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import client from "../../Configs/Config";
import WorksList from "./WorksList";
import classes from "./Works.module.css";

class Works extends Component {
  state = {
    projects: [],
    isLoading: true
  };

  componentDidMount() {
    client
      .getEntries({ content_type: "works" })
      .then(res => {
        const projects = res.items;
        this.setState({ projects, isLoading: false, error: false });
      })
      .catch(this.setState({ error: true, isLoading: false }));
  }

  render() {
    const projects = this.state.projects.map((project, i) => (
      <WorksList key={i} project={project} />
    ));

    const loader = this.state.isLoading ? "Loading Works ..." : null;

    // Render Data

    return (
      <Container className={classes.e_container} maxWidth="lg">
        {loader}
        <Grid className="animate" container spacing={3}>
          {projects}
        </Grid>
      </Container>
    );
  }
}

export default Works;
