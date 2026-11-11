import axios from "axios";

export const api = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
  timeout: 15000,
  headers: {
    Accept: "application/json",
  },
});
