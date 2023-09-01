import React from "react";

const ReportAnalyzer = () => {
  return (
    <>
      <div class="" style={{ margin: "80px 0px" }}>
        <div className="" style={{ padding: "20px 60px" }}>
          <span
            className=" p-2"
            style={{
              backgroundColor: "#2B99A8",
              color: "white",
              fontFamily: "cursive",
              borderRadius: "10px",
              fontSize: "1.8rem",
            }}
          >
            Medical Report Analyzer
          </span>
          <p className="mt-4">
            Medical report analyzers are software applications that use
            artificial intelligence to extract and analyze information from
            medical reports. They can help healthcare professionals to improve
            the efficiency and accuracy of patient care by automating the
            process of extracting information from medical reports.
          </p>

          <input type="file" id="file" accept="image/*" />
          <label
            for="file"
            style={{
              color: "white",
              height: "60px",
              width: "250px",
              backgroundColor: "rgba(0,0,0,0.7)",
              fontSize: "1.1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              marginLeft:'40%',
              marginTop:'100px'
            }}
          >
            <i class="fa-regular fa-image p-3"></i>
            Select Image
          </label>
        </div>
      </div>
    </>
  );
};

export default ReportAnalyzer;
