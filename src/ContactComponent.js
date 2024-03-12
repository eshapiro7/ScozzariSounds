import React, { useState } from "react";
import "./App.css";
import { Button, Form, FormGroup } from "reactstrap";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const [formSubmission, setFormSubmission] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_fwq1h8x", "template_pkrd9la", toSend, "tLcSY7xkUjnG0w76M")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .then(() => {
        setToSend({
          from_name: "",
          to_name: "",
          message: "",
          reply_to: "",
        });
      })
      .then(() => {
        setFormSubmission(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    console.log(e);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="row row-content">
            <div className="col">
              <h3>Contact Dane</h3>
              <p className="p-3">
                To book a band or DJ, or for a free quote for your event,
                contact Dane below.
              </p>
            </div>
          </div>
          <div className="row row-content">
            <div className="col">
              {!formSubmission ? (
                <Form className="form-group" onSubmit={onSubmit}>
                  <FormGroup>
                    <input
                      className="col-md-6 col-sm-12"
                      required
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      className="col-md-6 col-sm-12"
                      required
                      type="text"
                      name="reply_to"
                      placeholder="Email"
                      value={toSend.reply_to}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      className="col-md-6 col-sm-12"
                      required
                      type="text"
                      name="to_name"
                      placeholder="Subject"
                      value={toSend.to_name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      className="textarea col-md-6 col-sm-12"
                      required
                      name="message"
                      placeholder="Tell me about your event!"
                      value={toSend.message}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn btn-info mt-3 mb-3" type="submit">
                    Submit
                  </Button>
                </Form>
              ) : (
                <div className="form-submission">
                  Your form has been submitted!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
