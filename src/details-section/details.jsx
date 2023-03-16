import React from "react";
import "./details.css"
import onboardingImg from "../assets/icon-onboarding.svg";
import budgetingImg from "../assets/icon-budgeting.svg"
import onlineImg from "../assets/icon-online.svg";
import apiImg from "../assets/icon-api.svg"

function Details() {
  return (
    <section className="details">
      <div className="detailsUpperSection">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub.<br></br>
          Control your finances like never before.
        </p>
      </div>
      <div className="detailsLowerSection">
        <div className="onlineBankingSection">
          <img src={onlineImg} alt="" />
          <h4>Online Banking</h4>
          <p>Our modern web and mobile <br></br>application allow you to keep <br></br>track of your finaces wherever you<br></br> are in the world.</p>
        </div>
        <div className="budgetingSection">
          <img src={budgetingImg} alt="" />
          <h4>Simple Budgeting</h4>
          <p>See exactly where your money<br></br> goes each month. Receive<br></br> notifications when you're close to<br></br> hitting your limits.</p>
        </div>
        <div className="onboardingSection">
          <img src={onboardingImg} alt="" />
          <h4>Fast Onboarding</h4>
          <p>We don't do branches. Open your<br></br> account in minutes online and start<br></br> taking control of your finances<br></br> right away.</p>
        </div>
        <div className="managementSection">
          <img src={apiImg} alt="" />
          <h4>Open API</h4>
          <p>Manage your savings, investments,<br></br> pension, and much more from one<br></br> account. Tracking your money has<br></br> never been easier.</p>
        </div>
      </div>
    </section>
  )
}

export default Details