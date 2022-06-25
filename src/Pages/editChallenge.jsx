import React from "react";
import Newchallenge from "../Components/Newchallenge";
import { getData,setData } from "../Components/LocalStorage";
import Challenges from "../data";
import {useNavigate,useParams} from "react-router-dom";



var localList = getData() || [];
var allChallenges = [...Challenges,...localList]
function edit(id){
    Challenges.splice(Challenges.findIndex(a => a.id === id) , 1)
    localList.splice(localList.findIndex(a=>a.id ==id ),1);
var count = localList.length+ allChallenges.length
var Challenge ={};
Challenge.id = count;
Challenge.name= document.querySelector("#name").value;
Challenge.startDate = new Date(document.querySelector("#startDate").value);
Challenge.endDate =  new Date(document.querySelector("#endDate").value);
Challenge.description = document.querySelector("#description").value;
Challenge.url = document.querySelector("#image").src    ;
Challenge.level = document.querySelector("#level"). value;
count++;
localList.push(Challenge);
setData(localList);

}

function Editchallenge(){
    const {challengeID}  = useParams();
    var navigate = useNavigate();
    var editChallenge = allChallenges.filter((challenge)=>{return challenge.id ==challengeID});
    return (
        <div>
            <Newchallenge />
            <button className="editBTN" onClick={()=>{edit(challengeID),navigate("/")}} >Save Changes</button>
            
            { setTimeout(()=>{fillDetails(editChallenge[0])},1000)}
        </div>)
}

function fillDetails(challenge){
    var startDate = new Date(challenge.startDate.toString())
    var endDate = new Date(challenge.endDate.toString())
    document.querySelector(".createBTN").style.display = "none";
    
document.querySelector("#name").value = challenge.name;
document.querySelector("#startDate").value = startDate.toISOString().slice(0, 10);
document.querySelector("#endDate").value = endDate.toISOString().slice(0, 10);
document.querySelector("#description").value = challenge.description;
document.querySelector("#image").src = challenge.url;
document.querySelector("#level").value = challenge.level;
}

export default Editchallenge;