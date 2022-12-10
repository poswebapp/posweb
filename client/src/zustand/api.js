import axios from "axios";

// export const api = axios.create({ baseURL: "http://localhost:8000/", timeout: 45000 });
export const api = axios.create({ baseURL: process.env.REACT_APP_API , timeout: 45000});

