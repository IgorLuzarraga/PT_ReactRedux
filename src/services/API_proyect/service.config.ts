import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const API = axios.create({
  // baseURL: `http://localhost:9090/api/v1`,
  baseURL: ` https://reqres.in/api`,
  headers: APIHeaders,
  timeout: 60000,
});
