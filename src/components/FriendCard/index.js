import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={()=>props.handleClick(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Alias:</strong> {props.alias}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>

      {/*<span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
  </span> */}

    </div>
  );
}

export default FriendCard;