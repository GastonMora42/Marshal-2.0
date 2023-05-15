import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    //Spinner
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="dropdown ms-3">
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
             Perfil
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item class="mx-auto">
              <img class="shadow rounded-circle d-block mx-auto mb-2" src={user.picture} />
            </Dropdown.Item>
            <Dropdown.Item>
              <h2 class="ms-2 mb-1">{user.name}</h2>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <p>{user.email}</p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  );
};


export default Profile;
