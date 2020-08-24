import axios from "axios";

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    ...(token ? { Authorization: `token ${token}` } : {}),
    Accept: "application/vnd.github.v3+json",
  },
});
