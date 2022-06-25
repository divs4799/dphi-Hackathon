import React from "react";
import Challenges from "../data";
import {useNavigate,useParams} from "react-router-dom";
import { getData,setData } from "../Components/LocalStorage";

var localList = getData() || [];
var allChallenges = [...Challenges,...localList]
function Details(){
    let navigate = useNavigate();
    const {challengeID}  = useParams();

    function deleteChallenge(id){
        Challenges.splice(Challenges.findIndex(a => a.id === id) , 1)
        localList.splice(localList.findIndex(a=>a.id ==id ),1);
        console.log(localList);
        setData(localList);
        navigate("/")
        
    }
    
    var displayChallnge = allChallenges.filter((challenge)=>{return challenge.id ==challengeID});
    var startDate = new Date(displayChallnge[0].startDate.toString())
    return(<div>
        <section id="detailsIntro">
        <div className="detailsContainer">
        <div className="dateTime">
         
        Starts on {startDate.toString()}   
        </div>
        <div className="detailsHeading poppins">{displayChallnge[0].name}</div>
        <div className="shortDesc">{displayChallnge[0].description.substring(0,70)}</div>
        <div className="level"><img src="./images/level-icon.svg" / > {displayChallnge[0].level}</div>
        </div>
</section>
<section id="options">
    <span className="overview">Overview</span>
    <div className="detailsButtons">
    <button id="detailsEdit" className="poppins" onClick={()=>navigate("/editChallenge/"+ challengeID)} >Edit</button>
    <button id ="detailsDelete" className="poppins" onClick={()=>deleteChallenge(challengeID)} >Delete</button>
    </div>
</section>
<section className="detailsDescription poppins">{displayChallnge[0].description}</section>
    </div>   )
}

export default Details;