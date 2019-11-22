import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

//let friendArray = friends.json;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayShuffle = function(arr) {
    let newPosition,
        tempPosition;
    
        for (let i = arr.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * (i + 1));
            tempPosition = arr[i];
            arr[i] = arr[newPosition];
            arr[newPosition] = tempPosition;
        }

        return arr;
};

//let newArray = arrayShuffle(array);
//console.log(newArray);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    order: arrayShuffle(array),
    clicked: []
  };

  picClicked=(id)=>{
    console.log(this.state.clicked)
    let clicked=this.state.clicked
    console.log(id)
    if(clicked.includes(id)){
      //you lose
      console.log("clicked")
    }else{
      //you haven't lost yet
      console.log("not clicked")
    }
    clicked.push(id)
    this.setState({clicked})   
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
              <Title>WU TANG CLAN</Title>
          {this.state.order.map((number,index)=>(
       // {this.state.friends.map(friend => (
          <FriendCard
            //removeFriend={this.removeFriend}
            id={this.state.friends[number].id}
            key={this.state.friends[number].id}
            name={this.state.friends[number].name}
            image={this.state.friends[number].image}
            alias={this.state.friends[number].alias}
            location={this.state.friends[number].location}
            handleClick= {this.picClicked}
            
          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
