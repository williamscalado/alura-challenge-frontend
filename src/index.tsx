import { createServer, Model } from "miragejs";
import ReactDOM from "react-dom";
import App from "./App";

createServer({
  models: {
    transasion: Model,
    categorie: Model,
  },
  seeds(server) {
    server.db.loadData({
      transasions: [
        {
          id: 11,
          titleTransasion: "Pagamento conta de luz",
          selectCategory: 1,
          valueTrasasion: 300,
          data: new Date("2022-02-21"),
          type: 0,
        },
        {
          id: 22,
          titleTransasion: "compra de material de limpeza",
          selectCategory: 2,
          valueTrasasion: 150,
          data: new Date("2022-02-19"),
          type: 0,
        },
        {
          id: 33,
          titleTransasion: "Gasolina carro de Fulana",
          selectCategory: 3,
          valueTrasasion: 247,
          data: new Date("2022-02-1"),
          type: 0,
        },
        {
          id: 44,
          titleTransasion: "Curso de inglês",
          selectCategory: 6,
          valueTrasasion: 500,
          data: new Date("2022-02-25"),
          type: 0,
        },
        {
          id: 55,
          titleTransasion: "Recebimento de pagamento",
          selectCategory: 4,
          valueTrasasion: 3500,
          data: new Date("2022-02-12"),
          type: 1,
        },
        {
          id: 66,
          titleTransasion: "Deposito na poupança",
          selectCategory: 5,
          valueTrasasion: 100,
          data: new Date("2022-02-13"),
          type: 1,
        },
      ],
      categories: [
        { id: 1, name: "Luz" },
        { id: 2, name: "Casa" },
        { id: 3, name: "Gasolina" },
        { id: 4, name: "Salário" },
        { id: 5, name: "Investimento" },
        { id: 6, name: "Estudo" },
      ],
    });
  },

  routes() {
    this.get("/api/categories", () => {
      return this.schema.all("categorie");
    });

    this.get("/api/transasion", () => {
      return this.schema.all("transasion");
    });

    this.post("/api/transasion", (shcema, request) => {
      const data = JSON.parse(request.requestBody);
      return shcema.create("transasion", data);
    });

    this.post("/api/categories", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("categorie", data);
    });
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
