import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';

import "./index.css";
import App from "./components/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { getCookie } from "./cookieFunctions";
import { CookiesProvider } from "react-cookie";

import { DefaultToast, ToastProvider } from 'react-toast-notifications';
export const MyCustomToast = ({ children, ...props }) => (
  <DefaultToast {...props}  style={{marginTop: "55px"}}>
    <div>{children}</div>
  </DefaultToast>
);


const client = new ApolloClient({
  uri: "https://woc-demo-portal.herokuapp.com/",
  request: (operation) => {
    const refreshToken = getCookie("refresh");
    const accessToken = getCookie("access");
    operation.setContext({
      headers: {
        auth: accessToken ? `${accessToken}` : "",
        refresh: refreshToken ? `${refreshToken}` : "",
      },
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ToastProvider components={{ Toast: MyCustomToast }}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ToastProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
