import React, { useState } from "react";
import Title from "../../components/Title/Title";
import axios from "axios";
import "./contact.scss";

export default function Contact(props) {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    comment: "",
    successMessage: null,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setComment((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: comment.name,
      email: comment.email,
      comment: comment.comment,
    };

    axios
      .post("http://localhost:8000/api", data)
      .then((response) => {
        if (response.status === 200) {
          setComment((prevState) => ({
            ...prevState,
            successMessage: "Submitted",
          }));
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact-section">
      <div className="container">
        <Title title="Contact Me" />
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="contact">
              <div className="container">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Name *</label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your name *"
                            required="required"
                            data-error="Name is required."
                            value={comment.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                            value={comment.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="comment"
                            name="comment"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                            value={comment.comment}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <input
                          type="submit"
                          className="btn  btn-send  pt-2 btn-block"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="alert alert-success mt-2"
                    style={{
                      display: comment.successMessage ? "block" : "none",
                    }}
                    role="alert"
                  >
                    {comment.successMessage}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
