// Chunk 1
const mailer = require("nodemailer");
const cors = require("cors");
// require("dotenv").config();
const express = require("express");
const path = require("path");
// const sendMail = require("./mail");
const { log } = console;
const app = express();
app.use(cors());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());
// app.use(cookieParser());

const PORT = 8080;

// Data parsing
//get the data from the react js
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
// app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// email, subject, text
app.post("/email", (req, res) => {
  const { subject, email, message } = req;
  log("Data: ", req.body);
  res.json({ message: "Message recieved" });

  // const sendEmail = (to, name, type) => {
  //   const sntTransport = mailer.createTransport({
  //     service: "Gmail",
  //     auth: {
  //       user: process.env.EMAIL,
  //       pass: process.env.PASSWORD,
  //     },
  //   });

  //   const mail = getEmailData(to, name, type);

  //   sntTransport.sendMail(mail, function (error, response) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("email sent");
  //     }
  //   });
  // };

  // sendMail(email, subject, text, function (err, data) {
  //   if (err) {
  //     log("ERROR: ", err);
  //     return res.status(500).json({ message: err.message || "Internal Error" });
  //   }
  //   log("Email sent!!!");
  //   return res.json({ message: "Email sent!!!!!" });
  // });
});

// Render home page
app.get("/", (req, res) => {
  res.json({
    message: "Home server",
  });
});

// // Error page
// app.get("/error", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "ContForm.js"));
// });

// Email sent page
app.get("/email", (req, res) => {
  res.json({
    message: "hello from the server",
  });
});

// Start server
app.listen(PORT, () => log("Server is starting on PORT, ", 8080));
