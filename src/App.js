//created from both App.js file combined

import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
//import Wrapper from "./components/Wrapper";
//import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
//import Title from "./components/Title";
import Row from './components/Row';
//import Column from './components/Column';
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    clicked: [],
    highScore: 0
  };

  //friends = choices 

  componentDidMount() {
    this.setState({
      friends: this.randomize(this.state.friends)
    });
  }

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  handleClickOnImage = id => {
    // this is loss condition
    if (this.state.clicked.includes(id)) {
      alert('you lost');
      this.resetGame();
    } else {

      this.setState(
        prevState => ({
          clicked: [...prevState.clicked, id],
          friends: this.randomize(this.state.friends)
        }),
        () => {
          this.checkHighScore();
          this.handleWin();
        }
      );
    }
  };

  checkHighScore = () => {
    if (this.state.clicked.length > this.state.highScore) {
      this.setState({
        highScore: this.state.clicked.length
      });
    }
  };

  handleWin = () => {
    if (this.state.clicked.length === this.state.friends.length) {
      alert('You won!');
      this.resetGame();
    }
  };
  resetGame=()=>{
    this.setState({clicked: []})
    this.randomize(this.state.friends)
  }

  //componentDidMount 
  //randmonize
  //handleClickOnImage
  //checkHighScore
  //handlewin 

  render() {
    // always console.log state in the render it will give you the freshest state. or use React Dev Tools.
    console.log(this.state);
    // don't have to write this.state over and over if we destructure here
    const { clicked, friends, highScore } = this.state;
    return (
      <div>
        <Jumbotron score={clicked.length} highScore={highScore} dark />
        <Row helper={`justify-content-center`}>
          {friends.map( ({id, name, image, alias, location}) => {
            
             
                return(
                <FriendCard header={name} 
                    dark
                    id={id}
                    key={id}
                    name={name}
                    image={image}
                    alias={alias}
                    location={location}
                    handleClick= {this.handleClickOnImage}
                    />
          )}
          )}
           
        </Row>
      </div>
       )

     }
}

export default App;

 