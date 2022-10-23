import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer } from "miragejs";

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
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
