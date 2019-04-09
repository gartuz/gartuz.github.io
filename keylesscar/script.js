var age = prompt("How old are you?");

/* Returns Message of cars Powering On or Off depending of Parameter ages  */
function checkDriveAges(ages){
  if(ages === 18){
	   return "Congratulation in your first year of driving. Enjoy de Ride";
  } else if(ages > 18){
	   return "Powering On. Enjoy your Ride";
  }else{
	   return "Sorry!. You are too young to drive this car. Powering off";
   }
}

alert(checkDriveAges(Number(age)));
