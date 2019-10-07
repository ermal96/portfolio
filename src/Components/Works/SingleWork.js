import React, {Component} from 'react'
import client from '../../Config'
import classes from './Works.module.css';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

class SingleWork extends Component {

  state = {
    work: ''
  }

  componentWillMount() {

    const {match} = this.props
    client
      .getEntries({content_type: 'works', 'fields.slug': match.params.slug})
      .then((res) => {
        console.log(res)
        this.setState({work: res.items[0]})
        console.log(this.state)
      })

  }

  render() {
    if (!this.state.work) {
      return (
        <Container className={classes.e_container} maxWidth="lg">
          <p>Loading ...</p>
        </Container>
      )
    }

    return (
      <Container className={classes.e_container} maxWidth="lg">
        <Grid className="animate" container spacing={3}>
          <Grid item sm={6} xs={6}>
            <img
              style={{
              width: "100%"
            }}
              src={this.state.work.fields.img[0].fields.file.url}
              alt={this.state.work.fields.name}/>
          </Grid>

          <Grid item sm={6} xs={6}>
            <h3>{this.state.work.fields.name}</h3>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default SingleWork