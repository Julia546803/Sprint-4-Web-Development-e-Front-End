import axios from "axios";

// CONFIGURAÇÃO DA API DE CONTATOS
const contactsApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

export default contactsApi;