import axios from "axios";

export const api = axios.create ({
  baseURL: `https://fertilerobin-us.backendless.app/api/data`,
  headers: {
    'Content-Type': 'application/json'
  }
})