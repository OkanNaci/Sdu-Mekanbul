import axios from "axios";
// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: "https://sdu-mekanbul-backend.vercel.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
