import React from 'react'

const Login = () => {
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://www.getboost360.com/blog/wp-content/uploads/sites/12/2022/03/Looking-To-Help-Patients-By-Providing-Online-Consultation_-Heres-How-You-Can-Do-It.jpg"
                    alt="login form"
                    class="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      objectFit: "cover",
                      height: "100%",
                    }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h1 fw-bold mb-0">Login</span>
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          placeholder='Enter email'
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                          placeholder='Enter password'
                        />
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-lg btn-block"
                          type="button"
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)",color:'white' }}
                        >
                          Login
                        </button>
                      </div>

                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login