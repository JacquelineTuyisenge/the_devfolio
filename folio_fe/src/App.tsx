import { Nav } from "./Nav";
import { MdDashboard, MdPerson, MdCode, MdComputer, MdNotes, MdMessage, MdEmail, MdLocationPin, MdBusinessCenter } from "react-icons/md";
import profilePic from '../src/assets/Profile.jpeg';
function App() {
  return (
    <>
      <Nav />
      <hr></hr>
      <section className="container">
        <div className="icons">
          <MdDashboard />
          <MdPerson />
          <MdCode />
          <MdComputer />
          <MdNotes />
          <MdMessage />
        </div>
        <div className="profile">
          <div className="profile-pic">
            <img src={profilePic} alt="profile pic" />
          </div>
          <div className="profile-info">
            <h1>Jacqueline Tuyisenge</h1>
            <p>Software Engineer</p>
          </div>
          <p><MdEmail className="icon"/> tuyisenge@gmail.com</p>
          <p><MdLocationPin className="icon"/> Rwanda</p>
          <p><MdBusinessCenter className="icon"/> Full-time / Freelancer</p>
          <ul>
            <li className="icon-html">HTML</li>
            <li className="icon-css">CSS</li>
            <li className="icon-js">JavaScript</li>
            <li className="icon-react">React</li>
            <li className="icon-node">Node.js</li>
          </ul>
          <div className="btn-container">
            <button className="btn">Download CV</button>
          </div>
        </div>
        <div className="hero">
          <code>&lt;h1&gt;</code>
          <h1>
            <span className="wave">Hi</span>, <br></br>I am <span className="wavee">Jacqueline</span>, <br></br>a full-stack developer
          </h1>
          <code>&lt;/h1&gt;</code>

          <code>&lt;p&gt;</code>
          <small>
            I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
          </small>
          <code>&lt;/p&gt;</code>
          <p className="lets-talk">Let's Talk</p>
        </div>
      </section>
    </>
  )
}

export default App
