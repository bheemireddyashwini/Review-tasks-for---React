// TAsk-1

import { useContext, useState } from "react";
import { UserContext } from "../components/context/UserContext";
import "./DisplayUser.css";

const DisplayUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleNameChange = () => {
    setUser({ ...user, name: newName });
    setNewName("");
  };

  return (
    <div>
      <h1>User Details</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Change Name"
      />
      <button onClick={handleNameChange}>Update Name</button>
    </div>
  );
};

export default DisplayUser;
