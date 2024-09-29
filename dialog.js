function showAlertMessage()
{
    alert("I am an alert message");
}

function showConfirmMessage()
{
   var message =  confirm("Are you sure ?");
   if(message)
   {
    document.getElementById("divConfirm").style.display = "inline";
   }
   else{
    document.getElementById("divConfirm").style.display = "none";
   }
  
   
}
function showPromptMessage()
{
  var message =  prompt("Enter your OTP : ");
  alert(message);
}