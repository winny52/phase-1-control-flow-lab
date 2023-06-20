function scuberGreetingForFeet(){}
  // Write your code here!
  function scuberGreetingForFeet(distance){
    let charge;
    if(distance <= 400){
      charge = "This one is on me!";
    }
    else if(distance > 2000 && distance < 2500){
      charge = 'I will gladly take your thirty bucks.';
    }
    else if(distance >= 2500){
      charge = 'No can do.';
    }
    return charge;
  }
  


function ternaryCheckCity(){
  }
  // Write your code here!
  function ternaryCheckCity(destination){
    const place = destination;
    const message = place === "NYC" ? "Ok, sounds good." : "No go.";
    return message;
}

function switchOnCharmFromTip(){
  // Write your code here!

}
function switchOnCharmFromTip(input){
  let result;
  switch (input) {
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
      result = "Bye.";
      break;
  }

  return result;
}

console.log(switchOnCharmFromTip("generous"));
