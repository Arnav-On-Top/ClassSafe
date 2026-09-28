function calculate() {
    var attended=Number(document.getElementById("attended").value);
    var conducted=Number(document.getElementById("conducted").value);
    var target=Number(document.getElementById("target").value);
    if(attended<0 || conducted<=0 || attended>conducted){
        document.getElementById("result").innerHTML="Please enter a valid number";
        return;
    }
    var percentage=(attended/conducted)*100;
    var needed=0;
    var canMiss=0;
    if(percentage<target){
        needed=Math.ceil((target/100 * conducted-attended)/(1-target/100));
    }
    if(percentage>=target){
        canMiss=Math.floor(
            attended/(target/100)-conducted
        );
    }
    document.getElementById("result").innerHTML=
    "Attendance=" + percentage.toFixed(2)+"%<br><br>"+
    "Classes needed for "+target+"%=" + needed+"<br>"+
    "Classes you can miss=" +canMiss+"<br>"+
    "Target = "+target+ "%";
}
function clearAll(){
    document.getElementById("attended").value="";
    document.getElementById("conducted").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("target").value="75";
    document.getElementById("miss").value="";
    document.getElementById("attendMore").value="";
    document.getElementById("missResult").innerHTML="";
    document.getElementById("attendResult").innerHTML="";
}
function checkMiss() {
    var attended=Number(document.getElementById("attended").value);
    var conducted=Number(document.getElementById("conducted").value);
    var target=Number(document.getElementById("target").value);
    var miss=Number(document.getElementById("miss").value);
    var newConducted=conducted+miss;
    var newPercentage=(attended/newConducted)*100;
    document.getElementById("missResult").innerHTML=
    "After missing "+miss+ " class(es):<br>"+newPercentage.toFixed(2)+ "%";
}
function checkAttend() {
    var attended=Number(document.getElementById("attended").value);
    var conducted=Number(document.getElementById("conducted").value);
    var attendMore=Number(document.getElementById("attendMore").value);
    var newAttended=attended+attendMore;
    var newConducted=conducted+attendMore;
    var newPercentage=(newAttended/newConducted)*100;
    document.getElementById("attendResult").innerHTML=
    "After attending " + attendMore+ " class(es):<br>"+
    newPercentage.toFixed(2)+"%"; 
}