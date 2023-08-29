import React from "react";
import SignForm from "../SignForm";

const SignPage = ({ setAuth }) => {
  return (
    <>
      <div className="container">
        <div className="sign-container">
          <SignForm setAuth={setAuth} />
        </div>
        <div className="img-container">
          <img src={"/img/img.webp"} alt="" className="img" />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background: #f8f8f8;
        }
        .img-container {
          width: 30rem;
          overflow: hidden;
          position: relative;
          flex: 1 1 60%;
          display: flex;
          justify-content: center;
        }
        .img {
          height: 100vh;
          display: flex;
        }
        @media only screen and (max-width: 900px) {
          .img-container {
            flex: 1 1 40%;
          }
        }
        @media only screen and (max-width: 600px) {
          .img-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default SignPage;
