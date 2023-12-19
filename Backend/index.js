const app = require("./app");
var connectDatabase = require("./config/database");
require("dotenv").config();
connectDatabase();
const http = require("http");
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
