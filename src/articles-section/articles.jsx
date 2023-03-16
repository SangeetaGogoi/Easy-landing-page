import React from "react";
import "./articles.css";
import currencyImage from "../assets/image-currency.jpg";
import restaurantImage from "../assets/image-restaurant.jpg";
import planeImage from "../assets/image-plane.jpg";
import confettiImage from "../assets/image-confetti.jpg"

function Articles() {
  return (
    <section className="articleSection">
      <h2>Latest Articles</h2>
      <div className="articlesInDetail">
        <div className="articlesCon">
          <div className="articlesImageContainer">
            <img src={currencyImage} alt="" className="articleImage" />
          </div>
          <div className="articlesDescriptionContainer">
            <h6>By Claire Robinson</h6>
            <h4>Receive money in any<br></br> currency with no fees</h4>
            <p>The world is getting smaller and<br></br> we're becoming more mobile. So<br></br> why should you be forced to only <br></br>receive money in a single...</p>
          </div>
        </div>
        <div className="articlesCon">
          <div className="articlesImageContainer">
            <img src={restaurantImage} alt="" className="articleImage" />
          </div>
          <div className="articlesDescriptionContainer">
            <h6>By Wilson Hutton</h6>
            <h4>Treat yourself without<br></br> worrying about money</h4>
            <p>Our simple budgeting feature <br></br>allows you to separate out your<br></br> spending and set realistics limits<br></br> each month.That means you...</p>
          </div>
        </div>
        <div className="articlesCon">
          <div className="articlesImageContainer">
            <img src={planeImage} alt="" className="articleImage" />
          </div>
          <div className="articlesDescriptionContainer">
            <h6>By Wilson Hultton</h6>
            <h4>Take your Easybank card<br></br> wherever you go</h4>
            <p>
              We want you to enjoy your travels.<br></br>
              This is why we don't charge any<br></br>
              fees on purchases while you're<br></br>
              abroad.We'll even show you...
            </p>
          </div>
        </div>
        <div className="articlesCon">
          <div className="articlesImageContainer">
            <img src={confettiImage} alt="" className="articleImage" />
          </div>
          <div className="articlesDescriptionContainer">
            <h6>By Claire Robinson</h6>
            <h4>Our invite-only Beta<br></br> accounts are now live! </h4>
            <p>After a lot of hard work by the<br></br> whole team, we're excited to launch<br></br> our cloed beta.It's easy to request<br></br> an invite through the site...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles