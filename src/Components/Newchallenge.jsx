import react from "react";
import {Link} from "react-router-dom";
import {getData,setData} from "./LocalStorage.js";
import Challenges  from "../data.js";

var challengeArray = getData()|| [];

var count = challengeArray.length + Challenges.length + 1;


function submitForm(){
var Challenge ={};
Challenge.id = count;
Challenge.name= document.querySelector("#name").value;
Challenge.startDate = new Date(document.querySelector("#startDate").value);
Challenge.endDate =  new Date(document.querySelector("#endDate").value);
Challenge.description = document.querySelector("#description").value;
Challenge.url = document.querySelector("#image").src    ;
Challenge.level = document.querySelector("#level"). value;
count++;
challengeArray.push(Challenge);
setData(challengeArray);
}
function previewFile() {
    const preview = document.querySelector("#image");
    const file = document.querySelector('#file').files[0];
    const reader = new FileReader();
    var dataUrl;
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      dataUrl = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    return dataUrl;
  }
function checkFile(){
    if(document.querySelector("#image").src!=""){
        var BTN = document.querySelector("#uploadBTN").innerHTML="Change Image";
    }
}
function Newchallenge(){
    return (
        <section id="createChallenge">
        <h1 >Challenge Details</h1>

        <form id="createForm">
            <div className="row">
                <label >Challenge name</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div className="row">
                <label >Start Date</label>
                <input type="date" name="startDate" id="startDate" placeholder="Add Start Date" />
            </div>
            <div className="row">
                <label >End Date</label>
                <input type="date" name="endDate" id="endDate" placeholder="Add End Date"/>
            </div>
            <div className="row">
                <label >Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
            <div className="row">
                <label >Image</label>
                <img id="image" src="" />
                <div className="fileUpload">
                <button id="uploadBTN" onClick={checkFile} >Upload <img src="./images/cloud-upload.svg" /></button>
                <input type="file" name="image" id="file" onChange={previewFile} />
                </div>
            </div>
            <div className="row">
                <label >Level Type</label>
                <select name="level" list="level" id="level" >
                    <option value="" disabled >Select</option>
                    <option value="easy" >Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>                
            </div>
            <div className="row">
               <Link to="/"> <button type="submit" onClick={submitForm} className="createBTN">Create Challenge</button></Link>
            </div>
        </form>
        </section>
    )
}
export default Newchallenge;