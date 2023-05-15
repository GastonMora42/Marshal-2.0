import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
//

import App from "./App";
import Formulario from "./Formulario";
import Profile from "./profile";

import Hub from "./routes/hub";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },


  {
    path: "/Hub",
    element: (
      <div>
        <Hub />
      </div>
    ),
  },

  {
    path: "/Formulario",
    element: (
      <div>
        <Formulario />
      </div>
    ),
  },

  {
    path: "/Profile",
    element: <Profile />,
  },
]);

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirectUri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
