import "./AboutUs.css";
import "./AboutUs-media.css";
import Title from "../../component/Title/Title";

export default function AboutUs() {
  return (
    <>
      <div className="sfguidsfbhiounhoi">
        <Title title={"About Skillbridge"} />
        <div className="sidofhgdfsiuds">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </div>
      </div>
      <div className="divHr"></div>
      <Title title={"Achievements"} />
      <p className="sidofhgdfsiuds">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>
      <div className="distance"></div>
      <div className="achievements">
        <div className="achievement shad">
          <div className="achievement__logo">
            <img
              className="image"
              src="../../../public/images/taj.svg"
              alt="achievement-logo"
            />
          </div>
          <p className="achievement__title">Trusted by Thousands</p>
          <p className="achievement__describe">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div className="achievement shad">
          <div className="achievement__logo">
            <img
              className="image"
              src="../../../public/images/prize.svg"
              alt="achievement-logo"
            />
          </div>
          <p className="achievement__title">Award-Winning Courses</p>
          <p className="achievement__describe">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies.
          </p>
        </div>
        <div className="achievement shad">
          <div className="achievement__logo">
            <img
              className="image"
              src="../../../public/images/face.svg"
              alt="achievement-logo"
            />
          </div>
          <p className="achievement__title">Positive Student Feedback</p>
          <p className="achievement__describe">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
        <div className="achievement shad">
          <div className="achievement__logo">
            <img
              className="image"
              src="../../../public/images/safeThunder.svg"
              alt="achievement-logo"
            />
          </div>
          <p className="achievement__title">Industry Partnerships</p>
          <p className="achievement__describe">
            We have established strong partnerships with industry leaders,
            enabling us to provide our students with access to the latest tools
            and technologies
          </p>
        </div>
      </div>
    </>
  );
}
