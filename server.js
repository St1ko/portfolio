const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const config = require("./config.json");
const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const httpsServer = (config) => {
  const httpApp = express();
  const credentials = getCredentials(config.ssl_credentials_path);

  httpApp.get("/", function (req, res) {
    res.redirect("https://" + req.headers.host + req.url);
  });

  http.createServer(httpApp).listen(config.http_port, () => {
    console.log(`HTTP app listening on port ${config.http_port}`);
  });

  https.createServer(credentials, app).listen(config.https_port, () => {
    console.log(`HTTPS app listening on port ${config.https_port}`);
  });
};

const httpServer = (config) => {
  http.createServer(app).listen(config.http_port, () => {
    console.log(`HTTP app listening on port ${config.http_port}`);
  });
};

const getCredentials = (path) => {
  return {
    key: fs.readFileSync(path + "privkey.pem", "utf8"),
    cert: fs.readFileSync(path + "cert.pem", "utf8"),
    ca: fs.readFileSync(path + "chain.pem", "utf8"),
  };
};

if (
  environmentConfig.config_id == "production" &&
  environmentConfig.ssl_credentials_path
) {
  httpsServer(environmentConfig);
} else {
  httpServer(environmentConfig);
}
