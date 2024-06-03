import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
<Auth0Provider
    domain="dev-zz1ikkqdwoojtm4l.us.auth0.com"
    clientId="jkj0pupejDptBOdx3hmQLXptHmY6LiFl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
root.render(<App />);
