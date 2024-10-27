import React, { useState, useEffect } from "react";
import FriendsName from "./FriendsName";
import { NavLink } from "react-router-dom";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      {friends.map((friend, i) => (
        <NavLink to={`/name/${friend.id}`} key={i}>
         <FriendsName {... friend} />
        </NavLink>
      ))}
    </div>
  );
}
