function scuberGreetingForFeet(f){
  // Write your code here!
  let greeting;
  if(f<=400){
    greeting ='This one is on me!';
    
  }
  if(f>400 && f<=2000){
    greeting = 'That will be twenty bucks.';
  }
  if(f>2000 && f<2500){
    greeting = 'I will gladly take your thirty bucks.';
  }
  if(f>2500){
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  if(city=='NYC'){
    result = 'Ok, sounds good.';
  }else{
    result = 'No go.';
  }
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  if(tip=='generous'){
    response = 'Thank you so much.';
  }
  else if(tip=='not as generous'){
    response = 'Thank you.';
  }else{
    response = 'Bye.';
  }
  return response;
}