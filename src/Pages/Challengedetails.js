import React from "react";
import Challenges from "../data";
import {useParams} from "react-router-dom";


function Details(){
    const {challengeID}  = useParams();
    
    var displayChallnge = Challenges.filter((challenge)=>{return challenge.id ==challengeID});
    console.log(displayChallnge)
    return(<div>
        <section id="detailsIntro">
        <div className="detailsContainer">
        <div className="dateTime">
        Starts on {displayChallnge[0].startDate.toString()}   
        </div>
        <div className="detailsHeading poppins">{displayChallnge[0].name}</div>
        <div className="shortDesc">{displayChallnge[0].description.substring(0,20)}</div>
        <div className="level"><img src="/images/level-icon.svg" / > {displayChallnge[0].level}</div>
        </div>
</section>
<section id="options">
    <span className="overview">Overview</span>
    <div className="detailsButtons">
    <button id="detailsEdit" className="poppins" >Edit</button>
    <button id ="detailsDelete" className="poppins" >Delete</button>
    </div>
</section>
<section className="detailsDescription poppins">{displayChallnge[0].description}</section>
    </div>)
}

export default Details;