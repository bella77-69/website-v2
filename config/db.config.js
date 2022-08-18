const mysql = require("mysql");

let dbConn = null;
function handleDisconnect() {
  dbConn = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b09844508cb47a',
    password: '24216c2a',
    database: 'heroku_bcd43557b2a1ae0'
  });


  dbConn.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  dbConn.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();
setInterval(function () {
  dbConn.query("SELECT 1");
}, 8000);

module.exports = dbConn;
