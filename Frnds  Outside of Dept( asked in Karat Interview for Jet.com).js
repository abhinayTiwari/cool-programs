var frndCircle = [[1,2], [1,3], [1,4], [2,3]];
var companyInventory = [
    {id: 1, name: 'Deepak', dept:'Engineeering'},
    {id: 2, name: 'Pritee', dept:'Business'},
    {id: 3, name: 'Abhinay', dept:'Engineeering'},
    {id: 4, name: 'John', dept:'HR'}
]
function getCompanyData(companyInventory, frndCircle){

    frndCircle = frndCircle.reduce((a,b)=> a.concat(b));
	var employeeData = {};
	var deptWise = {};
	var outsidefrnds ={};
	for(let i=0; i < companyInventory.length; i++){
		let employee = companyInventory[i];
		employeeData[employee.id] = employee.dept;
		if(deptWise[employee.dept]){
			deptWise[employee.dept] +=1;
		}
        else{
			deptWise[employee.dept] =1;
		}	  
	}
     var alreadyAddedFrnds = [];
	for(var i=0, j=1; j< frndCircle.length;){
		var dept1 = employeeData[frndCircle[i]];
		var dept2 = employeeData[frndCircle[j]];
		if(dept1 != dept2){
			if(alreadyAddedFrnds.indexOf(frndCircle[i]) <0){
				alreadyAddedFrnds.push(frndCircle[i]);
				if(outsidefrnds[dept1]){
				   outsidefrnds[dept1] +=1;
				
			    }else{
			    	outsidefrnds[dept1] =1;
			   } 
			}
			if(alreadyAddedFrnds.indexOf(frndCircle[j]) <0){
				alreadyAddedFrnds.push(frndCircle[j]);
			    if(outsidefrnds[dept2]){
			    	outsidefrnds[dept2] +=1;
				
                }else{
				    outsidefrnds[dept2] =1;
			     }
			}
			
		}
  		i += 2;
		j += 2;
	}
	
	var output = {};
	for(var key in deptWise){
			output[key] = {'employee' : deptWise[key], 'of':outsidefrnds[key]};	
	}
    return output;
}

getCompanyData(companyInventory, frndCircle);