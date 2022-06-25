import React from "react";
import {useNavigate,useParams} from "react-router-dom";

function Achievementcard(props) {
  return (
    <div className="achievementCard">
      <img className="icon" src={props.url} alt="Image" />
      <div className="achievementText">
        <p className="figure">{props.figure}</p>
        <p className="tag">{props.tag}</p>
      </div>
    </div>
  );
}

function Participatecard(props) {
  return (
    <div className="participateCard poppins">
      <img className="particpateChallenge" src={props.url} alt=""  />
        <h1 className="participateTittle" >{props.tittle}</h1>
        <p className="participateContent">{props.description}</p>
    </div>
  )
}


function Challengcard(props) { 
  var challengState="";
  var today = new Date();
  
  var endDate =props.endDate;

 var startDate = props.startDate
  var daysLeft,hoursLeft,minLeft;
  var Time,status;
  if(today < startDate){
    challengState = "Starts in";
    status = <div className="status upcoming">Upcoming</div>;
    daysLeft = Math.abs(startDate.getDate() - today.getDate());
    hoursLeft = Math.abs( startDate.getHours() - today.getHours());
    minLeft = Math.abs(startDate.getMinutes() - today.getMinutes());
    
  }
  else if(today<endDate && today>startDate){
    challengState="Ends in";
    
    status = <div className="status active">Active</div>;
    daysLeft =  Math.abs(endDate.getDate() - today.getDate());
    hoursLeft =  Math.abs(endDate.getHours()- today.getHours());
    minLeft =  Math.abs(endDate.getMinutes() - today.getMinutes());
  }
 
    if(today > endDate){
      challengState="Ended On";
      status = <div className="status past">Past</div>;
      Time = <div className="endTime poppins"> {endDate.toLocaleDateString()}</div>

    }else{
      Time = (<div className="time poppins">
    <div className="days"> {daysLeft} <br/> Days</div> :
    <div className="hours"> {hoursLeft}<br/> Hours</div>:
    <div className="minutes">{minLeft} <br/> Mins</div>
</div>)
    }

  var navigate = useNavigate();
  var {challengeID} = useParams();
  
  return (
    <div className="challengeCard">
    <img className="challengeIMG" src={props.url} alt="Image" />
    {status}
    <h2 className="challengeName poppins">{props.name}</h2>
    <p className="challengeState poppins" >{challengState}</p>
      {Time}
  <button onClick={()=>navigate("/challenge/"+ props.challengeID)}  className="challengeBTN poppins">Participate Now</button>
</div>);
}
export { Achievementcard,Participatecard,Challengcard };
