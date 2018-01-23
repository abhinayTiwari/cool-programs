
//var interest = ["front end", "web developer", "javascript", "ui engineer", "web software" , "ui", "frontend", "web ui developer" ]

//*********************************************************Dont update anything below this********************______
var notAppliedPositionsAre = {};
var appliedPositionsAre = {};
var currentPosition = null;
var positionAndInterest = {};


function selectEasyApply(interest){
   var length = $(".job-card__easy-apply").length;
   var selectNumber = Math.floor(Math.random(length) *10)% length;
    var position = $($(".job-card__easy-apply")[selectNumber]).closest(".job-card__content-wrapper").find(".job-card__title-line").text().trim();
	currentPosition = position;
	if(isMatching(position,interest)){
	  $($(".job-card__easy-apply")[selectNumber]).click();
	  setTimeout(apply, 1000);
	}else{
	     if(notAppliedPositionsAre[position])
     	    notAppliedPositionsAre[position]++;
         else
	        notAppliedPositionsAre[position] = 1;
			
    	console.log("Position: "+ position + "is has not been selected as per your interest.");	
	}
}
function isMatching(position, interest){
   var position = position.toLowerCase();
   for(var i =0; i< interest.length; i++){
      if(position.indexOf(interest[i].toLowerCase()) > -1){
	    console.log("matched with "+ interest[i]);
		if(positionAndInterest[position])
     	    positionAndInterest[position].push(interest[i]);
         else
	        positionAndInterest[position] = [interest[i]];
		
        return true;
      }
   }
  return false;
 
}


//easy apply button
function apply(){
   if($(".jobs-s-apply__button").length == 0){
        console.log("you already applied for this company");
		return;
   }
    $(".jobs-s-apply__button").click();
	console.log("clicked on the easy apply button.")
	setTimeout(fillDetails, 5000);
	
}

function fillDetails(){
    if($("#li-modal-container .modal-header").length == 0){
	 console.log("modal has not opened so trying another comapany.. kya bolta hai.."); 
      selectEasyApply(interest);	 
	  return;
	}
	
    $("#apply-form-email-select").val("aitiwari17@gmail.com");
		console.log("selected the email id.")

    //select resume
	$(".jobs-apply-form__upload-options").click();
	$($(".jobs-apply-form__resume-dropdown.block li")[0]).click();
    console.log("selected the resume.");
	setTimeout(submit, 2000);
}

function submit(){
   //submit
   if($(".jobs-apply-form__submit-button").length > 0){
     $(".jobs-apply-form__submit-button").click();
	 if(appliedPositionsAre[currentPosition])
     	 appliedPositionsAre[currentPosition]++;
     else
	     appliedPositionsAre[currentPosition] = 1;
	 console.log("submitted the application successflly.");
   }else{
      console.log("something went wrong.");
   
   }
    
	setTimeout(cancel, 1000);
}

function cancel(){
   //cancel
  
   $("#li-modal-container .modal-header button").click();
      console.log("closed the popup.");
}

var id = setInterval(function(){ 
var interest = ["front end", "web developer", "javascript", "ui engineer", "web software" , "ui", "frontend", "web ui developer" ]; 
selectEasyApply(interest);
}, 15000);

//clearInterval(id);