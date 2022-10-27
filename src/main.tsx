import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer } from "miragejs";

import { recommendationsDataTest } from './globalData';

createServer({
  routes() {
    this.namespace = "api";

    this.post("/login", (schema, request) => {
      const credentials = JSON.parse(request.requestBody);

      if (
        credentials.email === "sir.costa@yahoo.com.br" &&
        credentials.password === "123"
      ) {
        return {
          status: 200,
          message: "Loggin Successfully",
        };
      } else {
        return {
          status: 401,
          message: "Invalid credentials",
        };
      }
    });

    this.get("/recommendations", (schema, request) => {
      console.log(recommendationsDataTest)
      return recommendationsDataTest;
    })
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
