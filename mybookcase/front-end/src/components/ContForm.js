import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// const axios = require("axios").default;

const ContForm = () => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const submitEmail = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      email,
      message,
      subject,
    };

    // axios.post("http://localhost:8080/email", dataToSubmit, function () {
    //   console.log("server recieved the data");
    // });
    // =========================================================================
    // ----DONE W/NELLY
    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/email",
    //   data: dataToSubmit,
    // });

    // ---TEST
    // axios({
    //   method: "post",
    //   url: "https://cors-anywhere.herokuapp.com/http://localhost:8080/email",
    //   data: dataToSubmit,
    //   withCredentials: false,
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // });
    // ----TEST
    // axios.post("http://localhost:8080/email", { dataToSubmit }).then((res) => {
    //   res.json({
    //     message: "post request is working",
    //   });
    //   console.log("get request is working");
    // });
    axios.post("http://localhost:8080/email", dataToSubmit).then((res) => {
      console.log("POST request is working");
    });

    // ----DONE W/NELLY
    // axios({
    //   method: "get",
    //   url: "http://localhost:8080/email",
    //   responseType: "stream",
    // }).then(function (response) {
    //   response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    // });
    // ===============================================================
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3000/send",
    //   data: {
    //     email: email,
    //     subject: subject,
    //     message: message,
    //   },
    // }).then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     this.resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //   }
    // });
  };

  return (
    <div className="contFormDiv">
      <Form onSubmit={submitEmail} method="POST">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="In few words..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tell us more..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={submitEmail}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContForm;
