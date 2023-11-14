import React from "react";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="container mt-3">
        <Fade bottom>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm">
                <h1 className="text-success">Hello 1</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm">
                <h1>Hello 1</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm">
                <h1>Hello 1</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
