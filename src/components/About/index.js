import React from "react";
import "./index.css";
import moment from "moment";
// import pizza from "../../assets/pizza.svg";
// import sitar from "../../assets/sitar.svg";

function About({ aboutRef }) {
  function calculateYears(startDate, endDate) {
    return moment(endDate).diff(moment(startDate), "years");
  }

  return (
    <div className="About" ref={aboutRef}>
      <div>
        <section className="interests-section">
          <div className="flex">
            <h2 className="about-me-header">Professional Experience</h2>
            <ul className="experience-list">
              <li>
                <h3 className="company-header">Nitor Infotech</h3>
                <p className="company-info">
                  Software Engineer <br />
                  October 2022 - Present
                </p>
              </li>
              <li>
                <h3 className="company-header">Accenture</h3>
                <p className="company-info">
                Application Development Analyst <br />
                September 2019 - May 2022
                </p>
              </li>
            </ul>
          </div>

          <div className="flex">
            <h2 className="about-me-header">Education</h2>
            <ul className="experience-list">
              <li>
                <h3 className="company-header">
                Bachelor of Engineering (2016-2019)
                </h3>
                <p className="company-info">
                Sinhgad College of Engineering
                  <br />
                  <ul>
                    <li>Affiliated to Savitribai Phule Pune University</li>
                    <li>Department of Computer Engineering</li>
                    <li>CGPA 8.36</li>
                  </ul>
                </p>
              </li>
              <li>
                <h3 className="company-header">
                  Diploma in Engineering (2013 - 2016)
                </h3>
                <p className="company-info">
                  MAEER'S Maharashtra Institute of Technology <br />
                  <ul>
                    <li>
                      Affiliated to Maharashtra State Board of Technical
                      Education
                    </li>
                    <li>Department of Computer Engineering</li>
                    <li>Percentage 85.88</li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-me-section">
          <div className="flex">
            <h2 className="about-me-header">
              Certifications
              {/* <span className="wip">
                ( <u>In-progress</u> )
              </span> */}
            </h2>
            <ul className="likes-certifications-list">
              <li>Web Development Diploma By AltCampus</li>
              <li>React-The Complete Guide (Udemy)</li>
              <li>ChatGPT Prompt Engineering for Developers (DeepLearning.AI)</li>
            </ul>
          </div>

          <div className="flex">
            <h2 className="about-me-header">Likes</h2>
            <ul className="likes-certifications-list">
              <li>Badminton</li>
              <li>Doodling</li>
              <li>
                Trekking
                {/* <img src={sitar} className="emoji" alt="Sitar logo" /> */}
              </li>
              <li>
                Pizza
                {/* <img src={pizza} className="emoji" alt="Pizza logo" /> */}
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section>
        <p className="about-me">
        Little more about me, I'm {calculateYears([1997, 7], Date.now())}{" "}
        years old with a total of {" "}
          {calculateYears([2019, 8], Date.now())} years of experience in UI. 
          My primary expertise lies in web development, with a special focus 
          on harnessing the power of React. I've also dabbled in backend technologies such as Node and Express.
          My true passion lies in creating the 
          perfect look and feel for everything I work on. So, if you like my website, 
          feel free to reach out—contact details below.
        </p>
        <h2 className="about-me-header">
          <span className="animate-character">Wow !</span> Thanks for sticking
          around and checking out my portfolio
          <span className="dotColorTheme">.</span>
        </h2>
      </section>
    </div>
  );
}

export default About;
