import React from "react";

const Posts = () => {
  return (
    <div class="container text-center mt-5 mb-5">
      <div class="row">
        <div class="col">
          <div className="mansory__img">
            <img
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "20px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            ></img>
            <h5 className="mt-3">Blog 1</h5>
          </div>
        </div>

        <div class="col">
          <div className="mansory__img">
            <img
              src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "20px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              className="mansory__img"
            ></img>
            <h5 className="mt-3">Blog 2</h5>
          </div>
        </div>

        <div class="col">
          <div className="mansory__img">
            <img
              src="https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "20px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              className="mansory__img"
            ></img>
            <h5 className="mt-3">Blog 3</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
