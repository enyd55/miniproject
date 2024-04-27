import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import Blankprofile from "../../utils/images/blankprofile.jfif";

function Profile() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Profile</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptas suscipit ratione quod culpa, eius ad consequatur, dolor
            quasi nulla optio quo error tempora temporibus distinctio quidem
            asperiores dolore ex amet nam. Consequatur, odit corporis.
          </p>
        </div>
      </header>

      <div className="container light-style flex-grow-1 container-p-y align-items-center justify-content-center" />
      <h4 className="font-weight-bold py-2 mb-3 ">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                  <div className="col-lg-1 mt-1 mt-lg-0">
                    <img src={Blankprofile} className="img-fluid" alt="" />
                  </div>
                  <div className="media-body ml-4">
                    <br></br>
                    <label className="btn btn-outline-primary">
                      Upload new photo
                    </label>{" "}
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-default md-btn-flat"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="USERNAME"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value="NAME" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="EMAIL "
                    />

                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris nunc arcu, dignissim sit amet sollicitudin iaculis,
                      vehicula id urna. Sed luctus urna nunc. Donec fermentum,
                      magna sit amet rutrum pretium, turpis dolor molestie diam,
                      ut lacinia diam risus eleifend sapien. Curabitur ac nibh
                      nulla. Maecenas nec augue placerat, viverra tellus non,
                      pulvinar risus.
                    </textarea>

                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="text"
                        className="form-control"
                        value="Month-Day-Year"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        value="State"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value="+91 (123) 456 7891"
                      />
                    </div>

                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div>

                    <div className="text-right mt-3">
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                      &nbsp;
                      <button type="button" className="btn btn-default">
                        Cancel
                      </button>
                      <br />
                    </div>
                    <div className="col text-left mt-3">
                      <Link to="/" className="btn btn-primary">
                        Log Out
                      </Link>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
