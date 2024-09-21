import request from "graphql-request";
// import List from "./services/list";
// import One from "./services/one";
import Add from "./services/add";
const endpoint = "http://localhost:4000";

request(endpoint, Add)
    .then((data) => console.log(JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));