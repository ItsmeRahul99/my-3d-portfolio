import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>FertiOS</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Building FertiOS, a women’s health platform focused on menstrual health,
              cycle tracking, PCOS/PCOD awareness, and personalized health insights to
              empower women through technology.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Publicis Sapient</h4>
                <h5>5+ Years · Bengaluru</h5>
              </div>
              <h3>2021-26</h3>
            </div>
            <p>
              Full Stack Engineer with 6+ years of experience building scalable and
              high-performance web applications across frontend, backend, and cloud
              environments. Experienced in developing modern user interfaces, backend APIs,
              reusable system architecture, AI-powered integrations, and production-ready
              platforms for real-world applications. Skilled in performance optimization,
              responsive design, cloud infrastructure, system scalability, and delivering
              reliable end-to-end solutions in fast-paced product environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FE Engineer</h4>
                <h5>Nimblechapps</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Worked on frontend application development, API integration, state
              management, UI implementation, bug fixes from QA and users and improving user experience across
              multiple web platforms using modern JavaScript frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FE Dev</h4>
                <h5>Early Career Journey</h5>
              </div>
              <h3>2019–20</h3>
            </div>
            <p>
              Started professional frontend development journey by building responsive
              interfaces, learning core web fundamentals, and working with HTML, CSS,
              JavaScript, and React to create modern user-focused applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
