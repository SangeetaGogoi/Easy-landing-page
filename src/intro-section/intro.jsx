import React from "react"
import "./intro.css";
import bg from "../assets/bg-intro-desktop.svg";
import bg2 from "../assets/image-mockups.png";

function Intro() {
  return (
    <section className="introSection">
      <div className="descriptions">
        <h1>Next generation<br></br>digital banking
        </h1>
        <p>Take your financial life online. Your Easybank account <br></br>
          will be a one-stop-shop for spending, saving, <br></br> budgeting, investing, and much more.
        </p>
        <button>Request Invite</button>
      </div>
      <div className="imageSection">
        <img src={bg} alt="" className="backgroundPattern" />
        <div className="">
          <img src={bg2} alt="" className="mobileImages" />
        </div>
      </div>
    </section >
  )
}

export default Intro