import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

function SingleFriend() {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())

      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      {user.address && (
        <>
          <h3>Address:</h3>
          <h4>Street:{user.address.street}</h4>
          <h4>Siute:{user.address.suite}</h4>
          <h4>City:{user.address.city}</h4>
          <h4>Zipcode:{user.address.zipcode}</h4>
          {user.address.geo && (
            <>
              <p>Geo-Lat:{user.address.geo.lat}</p>
              <p>Geo-long:{user.address.geo.lng}</p>
            </>
          )}
        </>
      )}
      <p>{user.phone}</p>
      <p>{user.website}</p>
      {user.company && (
        <>
          <h3>Company Details:</h3>
          <p>Company Name:{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </>
      )}
    </div>
  );
}

export default SingleFriend;
