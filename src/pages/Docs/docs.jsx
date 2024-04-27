import React from "react";
import "./docs.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Documents</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            pariatur qui quos aspernatur, voluptatem autem possimus esse quo
            consequatur omnis, soluta consectetur ullam ipsum cum!
          </p>
        </div>
      </header>

      <main>
        <div className="py-5 text-center">
          <h1>Documents</h1>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="rightbox">
              <div className="container">
                <h2>File Upload</h2>
                <form action="#" method="post" enctype="multipart/form-data">
                  <div className="form-group">
                    <label for="file">Choose File:</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onclick="alert('Document uploaded')"
                      style={{ width: "200px" }}
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className="leftali">
              <h4 className="mb-3">Uploaded Files</h4>

              <main className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                  <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
                  <div className="d-flex text-muted pt-3">
                    <p className="pb-2 mb-0 small lh-sm border-bottom w-100">
                      <strong className="d-block text-gray-dark">
                        <a
                          href="#"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          Operating System module 1-6 pdf
                        </a>
                      </strong>
                      'Filename summary'
                    </p>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <p className="pb-2 mb-0 small lh-sm border-bottom w-100">
                      <strong className="d-block text-gray-dark">
                        <a
                          href="#"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {" "}
                          Maths module pdf{" "}
                        </a>
                      </strong>
                      'Filename summary'
                    </p>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <p className="pb-2 mb-0 small lh-sm border-bottom w-100">
                      <strong className="d-block text-gray-dark">
                        <a
                          href="#"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {" "}
                          DAA lab manual{" "}
                        </a>
                      </strong>
                      'Filename summary'
                    </p>
                  </div>
                  <small className="d-block text-end mt-3">
                    <a href="#">All updates</a>
                  </small>
                </div>

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                  <h6 className="border-bottom pb-2 mb-0">Uploaded By...</h6>
                  <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                      <div className="d-flex justify-content-between">
                        <strong className="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                      </div>
                      <span className="d-block">@username</span>
                    </div>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                      <div className="d-flex justify-content-between">
                        <strong className="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                      </div>
                      <span className="d-block">@username</span>
                    </div>
                  </div>
                  <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                      <div className="d-flex justify-content-between">
                        <strong className="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                      </div>
                      <span className="d-block">@username</span>
                    </div>
                  </div>
                  <small className="d-block text-end mt-3">
                    <a href="#">All suggestions</a>
                  </small>
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>

      <script src="/static/js/bootstrap.bundle.min.js"></script>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Contact;
