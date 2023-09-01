import React from "react";
import doctor from "../images/doctor.png";

const Content = () => {
  return (
    <>
      <div class="" style={{ margin: "80px 0px" }}>
        <div class="row">
          <div class="col" style={{ width: "50%", padding: "20px 60px" }}>
            <span
              className=" p-2"
              style={{
                backgroundColor: "#2B99A8",
                color: "white",
                fontFamily: "cursive",
                borderRadius: "10px",
                fontSize: "1.3rem",
              }}
            >
              Healthy Choices with BIO TECH
            </span>
            <h1 className="mt-5">Advancing Healthcare through Bio Tech </h1>
            <p className="">
              Welcome to the Bio tech company we will assist to the doctors as
              friend
            </p>
            <p style={{marginTop:'80px'}}>
              <span
                className="mt-5 p-2"
                style={{
                  backgroundColor: "#2B99A8",
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "50px",
                  fontSize: "1.3rem",
                }}
              >
                Lets get started
              </span>
            </p>
            <p style={{fontSize:'0.8rem'}}>
              We provide the best services to the user . We have best Doctors.
              We have the best technology to identify the disease of the
              patients. We create a bridge between patient and doctor
            </p>
          </div>
          <div class="col text-center" style={{ width: "50%" }}>
            <img src={doctor} style={{ width: "90%" }}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
