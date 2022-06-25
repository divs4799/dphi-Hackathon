import { Achievementcard, Participatecard, Challengcard } from "../Components/card.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import Challenges from "../data";
import {getData,setData} from "../Components/LocalStorage.js";

function createChallenge(challenge) {

  return (<Challengcard
    challengeID={challenge.id}
    key={challenge.id}
    name={challenge.name}
    startDate={new Date(challenge.startDate)}
    endDate={new Date(challenge.endDate)}
    url={challenge.url}
    level={challenge.level}
  />)
}

var taglist=[];
function Home() {
  console.log("Home Rendered")
  var localList = getData() || [];
  var allChallenges = [...Challenges,...localList]
  
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredResults, setFilteredResults] = React.useState(allChallenges);
  const [tagInputList,setTagInputList] =React.useState([]);
  
  
  function handleDropDown(){
    document.querySelector("#list1").classList.toggle("visible");
    document.querySelector("#list1").classList.toggle("overlay")
    document.querySelector(".arrow").classList.toggle("arrowactive");
  }
function DetermineStatus(challenge){

            var today = new Date();
            var endDate = new Date(challenge.endDate);
            var startDate = new Date(challenge.startDate);
            if(today>endDate){
              return "past";
            }else if(today>startDate && today<endDate){
              return "active";
            }else if(today < startDate){return "upcoming";}
            
          }
function removeDuplicates(array, key) {
  var check = {};
  var res = [];
  array.forEach(element => {
    if(!check[element[key]]) {
      check[element[key]] = true;
      res.push(element);
    }
  });
  return res;
}

const searchTags = (target)=>{
  var challengeList=[];
  if(target.checked){
    taglist.push(target.value)
  }else if(target ==""){
    null;
  }else{ 
    taglist.splice(taglist.indexOf(target.value),1)
  }
  console.log(taglist)
  setTagInputList(taglist);
  taglist.forEach((tag)=>{
    
    var temp = allChallenges.filter((item)=>{
        var status = DetermineStatus(item);
        return item.level.toLocaleLowerCase().includes(tag.toLocaleLowerCase()) || status==tag;
      })
      challengeList.push(...temp)
    })
    var noDuplicateChallenge = removeDuplicates(challengeList,"id");
    if(taglist.includes("all")){
      setFilteredResults(allChallenges)
    }else{
      setFilteredResults(noDuplicateChallenge);
    }
  }
  

  function createTagButton(tag){
    
    return(
      <div key = {taglist.indexOf(tag)} className="filter">
      
        <span className="filterName poppins">{tag.charAt(0).toUpperCase()+ tag.slice(1)}</span>
        <button className="filterRemove " value={tag}  onClick={(event)=>removetag(event.target)}>X</button>
      </div>
    )
  }

  function removetag(target){
    taglist.splice(taglist.indexOf(target.value),1)
    
    document.querySelector(`input[value=${target.value}]`).checked = false;
      searchTags("");
  }
const searchData = (target)=>{
  setSearchInput(target.value);

  if(searchInput!==""){
  var filteredData= allChallenges.filter((item)=>{
      var SearchString = item.name+","+item.level+" "+"";
      return SearchString.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
   })
   setFilteredResults(filteredData);
  }
  else{
    setFilteredResults(allChallenges);
  }
}



  let navigate = useNavigate();
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
          <button id="createBTN" className="poppins" onClick={() => navigate("/createChallenge")} >Create Challenge</button>

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
            tittle="Prove your skills"
            description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions" />
          <Participatecard
            url="./images/community.svg"
            tittle="Learn From Community"
            description="One can look and analyze the solutions submitted by the other Data Scientists and learn from them " />
          <Participatecard
            url="./images/Robot.svg"
            tittle="Challenge Yourself"
            description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder." />
          <Participatecard
            url="./images/IdentificationCard.svg"
            tittle="Earn Recognition"
            description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." />
        </div>
      </section>

      <section id="searchchallenges">
        <h1 className="poppins" id="searchHead" >Explore Challenges</h1>
        <div id="searchbox">
          <div className="search">
            <img src="./images/magnifying-glass-solid.svg" alt="" />
            <input type="text" placeholder="Search" id="search" onChange={(event)=>{searchData(event.target)}} ></input>
          </div>
          {/* dropdown  */}
          <div id= "list1" className="dropdown-check-list" onClick={handleDropDown} tabIndex="100">
        <span className="anchor">Filter</span> <div className="arrow"></div> 
        <ul className="items">
            <li className="listHeading" >Status</li>
          <li className="listContent" ><input type="checkbox"  value="all" onChange={(event)=>{searchTags(event.target)}} />All </li>
          <li className="listContent" ><input type="checkbox"  value="upcoming" onChange={(event)=>{searchTags(event.target)}} />Upcoming</li>
          <li className="listContent" ><input type="checkbox"  value="active" onChange={(event)=>{searchTags(event.target)}} />Active </li>
          <li className="listContent" ><input type="checkbox"  value="past" onChange={(event)=>{searchTags(event.target)}} />Past </li>
          <li className="listHeading" >Level</li>
          <li className="listContent" ><input type="checkbox"  value="easy" onChange={(event)=>{searchTags(event.target)}} />Easy </li>
          <li className="listContent" ><input type="checkbox"  value="medium" onChange={(event)=>{searchTags(event.target)}} />Medium </li>
          <li className="listContent" ><input type="checkbox"  value="hard" onChange={(event)=>{searchTags(event.target)}} />Hard</li>
        </ul>
      </div>

        </div>
      <div className="displayFilters">
      {tagInputList.length>0?(tagInputList.map(createTagButton)):(console.log("nodisplay"))}
      </div>
      </section>

      <section id="displaychallenges">

        <div className="challengecontainer">
        {console.log(filteredResults)}
        {searchInput.length > 1 || taglist.length > 0  ? (filteredResults.map(createChallenge)):(allChallenges.map(createChallenge))}


        </div>
      </section>
    </div>
  );
}

export default Home;