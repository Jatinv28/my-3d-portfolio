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
                <h4>FOUNDATION STARTED FROM ENGLISH MEDIUM SCHOOL</h4>
                <h5>DELHI WORLD PUBLIC SCHOOL ASHTA MADHYA PRADESH</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Completed my 10th grade.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>STARTED COACHING WITH SCHOOL FOR JEE</h4>
                <h5>ALLEN Career Institute</h5>
              </div>
              <h3>2024 & 2025 </h3>
            </div>
            <p>Aimed jee and started preparation , covered my 11th and 12th grade syllabus in ALLEN Career Institute. Also, started learning web development and built some projects using HTML, CSS, JavaScript, ReactJS and NodeJs.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Took Drop And Again Gave JEE </h4>
                <h5>Esaral Online Coaching</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
             I Got Admission in IIIT Hyderabad in CS Branch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
