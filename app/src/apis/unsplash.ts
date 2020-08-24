// import Unsplash from "unsplash-js";
import axios from "axios";
// export default new Unsplash({ accessKey: process.env.REACT_APP_ACCESS_KEY });

export default axios.create({
  headers: { Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}` },
  baseURL: "https://api.unsplash.com/",
});
