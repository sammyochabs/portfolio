import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Ochaba - Web Developer</title>
      </Head>

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Samuel Ochaba</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Samuel <span className="text-primary">Ochaba</span>
            </h1>
            <div className="subheading mb-5">
              +234 090 752 555 77{" "}
              <a href="mailto:name@email.com">sammymadgenius@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in developing, enhancing and deploying web
              applications with an end goal of creating engaging and user
              friendly site layouts and functions while following best
              practices.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/samuel-ochaba-aa677019a/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/sammyochabs">
                <i className="fab fa-github"></i>
              </a>

              <a
                className="social-icon"
                href="https://web.facebook.com/sammy.ochabs"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Moniq Web Labs</div>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Planned website development, converting mockups into
                      usable web presence with HTML, JavaScript, AJAX and JSON
                      coding.
                    </li>
                    <li>
                      Employed search engine optimization tactics to increase
                      reach of targeted audience.
                    </li>
                    <li>
                      Conducted testing and review of website design for
                      responsiveness, clarity and effectiveness.
                    </li>
                    <li>
                      Determined coding requirements for site creation,
                      including e-commerce capability, security and specialized
                      scripts.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2018 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Freelance Web Developer</h3>
                <div className="subheading mb-3">Upwork</div>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Built and styled various new mobile-friendly websites,
                      transitioning legacy presentations to simultaneous
                      mobile-friendly versions.
                    </li>
                    <li>
                      Multi-tasked across multiple functions and roles to
                      generate project results and meet deadlines and
                      organizational expectations.
                    </li>
                    <li>
                      Conducted testing and review of website design for
                      responsiveness, clarity and effectiveness.
                    </li>
                    <li>
                      Determined coding requirements for site creation,
                      including e-commerce capability, security and specialized
                      scripts.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">December 2015 - Present</span>
              </div>
            </div>
            {/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div> */}
            {/* <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div> */}
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Federal University Lafia</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">February 2014 - May 2018</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">FreeCodeCamp</h3>
                <div className="subheading mb-3">
                  Web Development Curriculum
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2019 - May 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gulp"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-grunt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time watching
              football. I also play football whenever i get the chance
            </p>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Portfolio - My most recent works</h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="project-image-div">
                <div>
                  <a href="https://v-m-resources.vercel.app/" target="_blank">
                    <img src="vmr.png" alt="" className="project-image" />
                  </a>
                </div>
                <div>
                  <p className="text-center">
                    A web application for a virtual management agency. built
                    with react.js
                  </p>
                </div>
              </div>
              <div className="project-image-div">
                <div>
                  <a href="https://v-m-resources.vercel.app/" target="_blank">
                    <img src="turbo.png" alt="" className="project-image" />
                  </a>
                </div>
                <div>
                  <p className="text-center">
                    A web application for a delivery and logistics company.
                    built with react.js
                  </p>
                </div>
              </div>
              <div className="project-image-div">
                <div>
                  <a href="https://master.techroad.io/main" target="_blank">
                    <img src="salady.png" alt="" className="project-image" />
                  </a>
                </div>
                <div>
                  <p className="text-center">
                    Worked alongside other developers to bring this mobile-only
                    korean food ordering web app to life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Responsive Web Design Certification - Freecodecamp
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Javascript Algorithm And Data Structures Certification -
                FreecodeCamp
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Front-End Libraries Certification - FreecodeCamp
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
