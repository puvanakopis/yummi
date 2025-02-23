import React from "react";
import "./Contact.css";
import { banner } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="Contact">
        <div className="contactBanner">
          <img src={banner.ContactBanner} alt="" />
        </div>
        <div className="contactDesc ">
          <h1 className="MainHeading">Contact Us</h1>
          <div className="contactDesc-1">
            <form>
              <div class="form-group half">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div class="form-group half">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div class="form-group half">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div class="form-group half">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div class="form-group full">
                <label for="message">Message Box</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Describe Your Issue or Request"></textarea>
              </div>
              <div class="form-group full">
                <button className="mainButton" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
