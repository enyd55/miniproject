import React from "react";
import "./planner.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import moment from "https://cdn.skypack.dev/moment@2.29.1";
import $ from "jquery";

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Planner</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptas suscipit ratione quod culpa, eius ad consequatur, dolor
            quasi nulla optio quo error tempora temporibus distinctio quidem
            asperiores dolore ex amet nam. Consequatur, odit corporis.
          </p>
        </div>
      </header>
      <h2 className="containh">Plan your day</h2>
      <div className="container">
        <input type="text" placeholder="Enter task" id="userinput" />
        <button value="Enter" id="enterButton">
          <strong>Enter</strong>
        </button>
      </div>
      <div className="todolist">
        <ol></ol>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Blog;
