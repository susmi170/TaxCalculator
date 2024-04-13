
$(document).ready(function(){
  $("form").submit(function(event){
  var grossAnualIncomeValue = document.getElementById("grossAnualIncome").value;
  var extraIncomeValue = document.getElementById("extraIncome").value;
  var age = document.getElementById("age").value;
  var deductionsValue = document.getElementById("deductions").value;
  
  var isValid;
 isValid= handleInputNumberValidation(grossAnualIncomeValue,"id1",isValid);
 isValid=handleInputNumberValidation(extraIncomeValue,"id2",isValid);
  isValid=handleInputNumberValidation(deductionsValue,"id3",isValid);


 
  if((age == null || age == "") ){
 
		document.getElementById('id4').style.visibility = "visible";
		event.preventDefault();
		isValid=false;
  }else{
     document.getElementById('id4').style.visibility = "hidden";

  }
  
  if(!(isValid==false) && (parseInt(grossAnualIncomeValue)+parseInt(extraIncomeValue))<parseInt(deductionsValue))
{
	alert("Total deductions can not be more than total income");
	event.preventDefault();
	isValid=false;
}
  if(!(isValid==false)){
	  
  var incomePostTaxDedcution =calculateInhandIncome(grossAnualIncomeValue, extraIncomeValue, deductionsValue,age);
   
   
    alert("Your overall income will be \n"+incomePostTaxDedcution+"\n"+"after tax deduction");
	event.preventDefault();
  }
  
  
	
  });
  //checks input number validations and sets the alert icon if invalid
  function handleInputNumberValidation(inputNumber,id,isValid){
	if(checkIfInputIsNumber(inputNumber)){
 
		document.getElementById(id).style.visibility = "visible";
		event.preventDefault();
		isValid=false;
  }else  if(Math.sign(parseInt(inputNumber))<0){
		alert("Extra income cannot be less that 0");
		event.preventDefault();
		isValid=false;	
  }else{
     document.getElementById(id).style.visibility = "hidden";

  }
  return isValid;
}

//checks if input is a number 
function checkIfInputIsNumber(inputNumber){
if((inputNumber == null || inputNumber == "") || isNaN(inputNumber))
	return true;
return false;
}
  

function calculateInhandIncome(grossAnualIncomeValue, extraIncomeValue, deductionsValue,age) {
  var overallIncome = parseInt(grossAnualIncomeValue)+parseInt(extraIncomeValue)-parseInt(deductionsValue);
   
  if(overallIncome>800000){
	  
  var incomePostTaxDedcution;
  if(age=="<40"){

			incomePostTaxDedcution=overallIncome-(overallIncome-800000)*.3;
  }
  
  else  if(age==">=40 & <60"){
	 
		incomePostTaxDedcution=overallIncome-(overallIncome-800000)*.4;

  }
 
  else  if(age==">=60"){
		incomePostTaxDedcution=overallIncome-(overallIncome-800000)*.1;


  }

  }
  else{
		incomePostTaxDedcution=overallIncome;
  }
  
  return incomePostTaxDedcution;
}






});
