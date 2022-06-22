
function setData(challengeArray){
    var setJson = JSON.stringify(challengeArray);
    localStorage.setItem("challengeArray",setJson);
    console.log("Data Set")
}
function getData(){
    var Challenges;
    var json =localStorage.getItem("challengeArray");
    if(json){
        Challenges =JSON.parse(json);
    }
    return Challenges;
    
}

export {setData,getData} ;