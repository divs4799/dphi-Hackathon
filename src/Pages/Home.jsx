import react  from "react";
import {Achievementcard,Participatecard,Challengcard} from "../Components/card.jsx";
import Challenges from "../data.js"
import React from "react";
import {useNavigate} from "react-router-dom";
import {getData,setData} from "../Components/LocalStorage.js";
function createChallenge(challenge){
    return ( <Challengcard 
    challengeID = {challenge.id}
    key = {challenge.id}
      name ={challenge.name}
      startDate = {new Date(challenge.startDate)}
      endDate = {new Date(challenge.endDate)}
      url={challenge.url}
      level={challenge.level}
    />)
  }
  
  var localChallenges = getData()|| [];
  
  function Home(){
  
  let navigate =useNavigate();
    return (
        <div>
    <section id="intro">
    <div id="introText" className="poppins">
      <h1>Accelerate innovation with Global Ai challenges</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      </p>
      <button id="createBTN" className="poppins" onClick={()=>navigate("/createChallenge")} >Create Challenge</button>
     
    </div>
    <div id="introImage">
      <img src="./images/rocket.svg" alt="Rocket Image" />
    </div>
  </section>
  <section id="achievement">
    <Achievementcard
      url="./images/AchivementAI.svg"
      figure="100K+"
      tag="AI Model Submissions"
    />
    <Achievementcard
      url="./images/DataScientistAI.svg"
      figure="50K+"
      tag="Data Scientist"
    />
    <Achievementcard
      url="./images/ChallengesAI.svg"
      figure="100+"
      tag="AI Challenges hosted"
    />
  </section>

  <section id="participate" className="poppins">
    <h1 className="participateHead" >Why Participate in <span className="green"> AI Challenges? </span></h1>
    <div id="participateContainer">
      <Participatecard 
        url="./images/mini-page.svg"
        tittle= "Prove your skills"
        description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions" />
         <Participatecard 
        url="./images/community.svg"
        tittle= "Learn From Community"
        description="One can look and analyze the solutions submitted by the other Data Scientists and learn from them " />
         <Participatecard 
        url="./images/Robot.svg"
        tittle= "Challenge Yourself"
        description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder." />
         <Participatecard 
        url="./images/IdentificationCard.svg"
        tittle= "Earn Recognition"
        description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." />
    </div>
  </section>

  <section id="searchchallenges">
  <h1 className="poppins" id="searchHead" >Explore Challenges</h1>
  <div id="searchbox">
  <div className="search">

  <img src="./images/magnifying-glass-solid.svg" alt=""  />
  <input type="text" placeholder="Search"></input>
  </div>
  <select name="filter" list="Filter" id="filter" >Filter
                    <option value="" disabled >Filter</option>
                    <option value="easy" >Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>                
  </div>
  </section>

  <section id="displaychallenges">
     
    <div className="challengecontainer">
  {Challenges.map(createChallenge)}

  {localChallenges.map(createChallenge)}


  
    </div>
  </section>
  </div>
);
}
export default Home;