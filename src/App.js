import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Jumbotron from './components/Jumbotron';
import Row from './components/Row';
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    clicked: [],
    highScore: 0
  };

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
  
  render() {
    console.log(this.state);
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

 