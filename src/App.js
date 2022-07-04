// import logo from './logo.svg';
import "./App.css";
import "./style.css";
import "./styleTask4.css";
import "./mystyle.css";
import PrintHello from "./PrintHello";
import UsingArrowFunction from "./UsingArrowFunction.js";
import PassProp from "./PassProp";
import MobileOs from "./MobileOs";
import MobileManufacturers from "./MobileManufacturers";
import ComponentNavbar from "./ComponentNavbar";
import Feed from "./Feed";
import ProfileDashboard from "./ProfileDashboard";
import Trends from "./Trends";
import Whotofollow from "./Whotofollow";
import Componentleft from "./Componentleft";
import Componentright from "./Componentright";
import Componentcenter from "./Componentcenter";
import Console from "./Console";
import Adventure from "./Adventure";
import Playground from "./Playground";

function App() {
  return (
    <div>
      Q1. a. Make a functional component as a child of App.js and print Hello
      world!. Try using named and default exports.
      <PrintHello />
      Q1. b. Do the same using arrow functions.
      <UsingArrowFunction />
      Q1. c. Make a functional component as child of App.js and pass your name
      as prop, then "Hello must be printed.
      <PassProp name="sujeet" />
      Q2. Print the following data with two components MobileOS and
      MobileManufacturers using functional components.
      <MobileOs />
      <MobileManufacturers />
      Q3. Make the following component structure using functional components.
      <div className="main_container">
        <div className="Navbar">
          <ComponentNavbar />
        </div>
        <div className="main_body">
          <div className="leftbar">
            <div className="profile_dashboard">
              <ProfileDashboard></ProfileDashboard>
            </div>
            <div className="trends">
              <Trends></Trends>
            </div>
          </div>
          <div className="center_bar">
            <Feed></Feed>
          </div>
          <div className="rightbar">
            <Whotofollow></Whotofollow>
          </div>
        </div>
      </div>
      Q4. Make the component structure as given in the attachment.
      <div className="container">
        <Componentleft />
        <Componentright />
        <Componentcenter />
      </div>
      Q5. Make the following design as shown.
      <div className="parent">
        <Console />
        <Playground />
        <Adventure />
      </div>
    </div>
  );
}

export default App;
