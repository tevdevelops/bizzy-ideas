import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "75vh",
          background: "rgb(237,209,87)",
          background:
            "linear-gradient(153deg, rgba(237,209,87,1) 0%, rgba(217,167,59,1) 100%)"
        }}
        className="container-fluid valign-wrapper"
      >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Fulfill</b> your Creative & Business Ideas with the{" "}
              <span style={{ fontFamily: "monospace" }}>Bizzy Ideas</span>{" "}
              platform
            </h4>
            <p className="flow-text text-darken-1">
              Alpha is being developed as fast as possible by TevDevelops. Enjoy
              this lite version in the meantime. He appreciates your patience!
            </p>
            <br />

            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>

            <Link
              to="/login"
              style={{
                marginLeft: "2rem",
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
