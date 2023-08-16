import "./App.css";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
class App extends Component {
  state = {
    fullname: "Adenuga Adeshina",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, recusandae!",
    imgSrc: "https://avatars.githubusercontent.com/u/98366229?v=4",
    profession: "Web Developer",
    shows: false
  };

  handleShows = () => this.setState({
    shows: !this.state.shows
  });



  render() {
    let showcard;
    (this.state.shows) ? showcard = { display: 'none' } : showcard = { display: 'block' };

    return (

      <>
        <div className="shows"></div>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={showcard} variant="top" src={this.state.imgSrc} />
          <Card.Body>
            <Card.Title style={showcard}>{this.state.fullname}</Card.Title>
            <Card.Text style={showcard}>
              {this.state.bio}
            </Card.Text>
            <Card.Text style={showcard}>
              {this.state.profession}
            </Card.Text>
            <Button variant="primary" onClick={this.handleShows}>Show Card</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

{/* <div style={displa}></div> */ }

export default App;
