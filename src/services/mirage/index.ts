import { createServer, Model } from "miragejs";
import { citiesDataTest, recommendationsDataTest } from "../../globalData";

type User = {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  phone1: string;
  phone2: string;
  created_at: string;
};

type RealState = {
  id: number;
  category: Category;
  address: Address;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  totalArea: string;
  aquisitionType: string;
  status: string;
  value: number;
  created_at: string;
};

type Category = {
  id: number;
  title: string;
  description: string;
};

type Address = {
  street: string;
  number: number;
  neighborhood: string;
  zone: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      realState: Model.extend<Partial<RealState>>({}),
      city: Model.extend<Partial<City>>({}),
    },
    routes() {
      this.namespace = "api";
      // this.timing = 750;
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

      this.get('/users');

      this.get('/cities', (schema, request) => {
        return citiesDataTest;
      });

      this.get("/recommendations", (schema, request) => {
        return recommendationsDataTest;
      });
    },
  });

  return server;
}
