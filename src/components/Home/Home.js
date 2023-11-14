import React from "react";
import "./Home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-banner">
        <p className="home-blurb">GET IN THE BEST SHAPE OF YOUR LIFE</p>
      </div>
      <div className="process">
        <p>Our Process</p>
        <p>
          At Ignition Fitness your health and wellness are our priority. Our
          cutting edge training regiments and nutrition plans cover all the
          bases when it comes to reaching your goals
        </p>
        <div className="step-1">
          <p className="step-title">Evaluation</p>
          <p className="step-blurb">
            Evaluations are completely free and can be done in person at the
            location of your choosing, through video chat, or by phone. Your
            comfort is key to the process.
          </p>
        </div>
        <div className="step-2">
          <p className="step-title">Program</p>
          <p className="step-blurb">
            After you've been evaluated by one of our qualified personal
            trainers, our cutting edge fitness AI will generate an exercise
            program specific to your needs.
          </p>
        </div>
        <div className="step-2">
          <p className="step-title">Nutrition</p>
          <p className="step-blurb">
            Nutrition is just as important as exercise when it comes to
            achieving fitness goals. Meal plans, nutritional education, and
            cooking guidance are all available from Ignition Fitness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
