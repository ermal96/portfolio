import React, {Component} from 'react'
import client from '../../Config'
import classes from './Works.module.css'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Works_ from '../../Assets/works.svg'
import { IoLogoWordpress, IoLogoCss3, IoIosCart, IoIosBrush, IoIosBrowsers, IoIosArrowBack } from 'react-icons/io';
class SingleWork extends Component {

  state = {
    work: '',
    images: []
  }

  componentDidMount() {
    const {match} = this.props
    client
      .getEntries({content_type: 'works', 'fields.slug': match.params.slug})
      .then((res) => {
        this.setState({work: res.items[0], images: res.items[0].fields.img})
        console.log(this.state.work)
      })

  }

  render() {
    const {work, images} = this.state

    if (!this.state.work) {
      return (
        <Container className={classes.e_container} maxWidth="lg">
          <p>Loading ...</p>
        </Container>
      )
    }

    return (
      <Container  className={classes.e_container} maxWidth="lg">
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <h3>{work.fields.name}</h3>
            <div className={classes.e_tech}>
              <h5>Technologies</h5>
                {work.fields.css ? <p><IoLogoCss3 /> Css</p>: null}
                {work.fields.eCommerce ? <p><IoIosCart /> e-Commerce</p>: null}
                {work.fields.illustrator ? <p><IoIosBrush /> Illustrator</p>: null}
                {work.fields.photoshop ? <p><IoIosBrowsers /> Photoshop</p>: null}
                {work.fields.wordpress ? <p><IoLogoWordpress/> Wordpress</p>: null}
            </div>
            <button className={classes.e_btn} onClick={() => this.props.history.goBack()}><IoIosArrowBack />  Go Back</button>

          </Grid>
            <Grid style={{justifyContent:'flex-end', display:'flex'}} item xs={12} sm={6}>
              <img alt='' style={{height: '320px'}} src={Works_} />
            </Grid>
        </Grid>


          <Grid className="animate" container spacing={3}>
            {images.length > 1 ?

              images.map((img, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6}>
                    <img
                      className={classes.e_single_img}
                      src={img.fields.file.url}
                      alt={work.fields.name}/></Grid>
                )
              })

              :
              <img
              className={classes.e_single_img}
              src={images[0].fields.file.url}
              alt={work.fields.name}/>}


          </Grid>
      </Container>
    )
  }
}

export default SingleWork