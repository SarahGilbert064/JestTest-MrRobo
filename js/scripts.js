//business Logic//


function mrRobo(num) {
  let array = [];
  for(let i = 1; i <= num; i++) {
    if(i.toString().includes("3")) {
      array.push ("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      array.push ("Boop!");
    } else if (i.toString().includes("1")) {
      array.push ("Beep!");
    } else {
      array.push(i);
    }
  }
  return array.join(", ");
};  


// User Interface Logic

$(document).ready(function() {
  $("form#mrRoboger").submit(function(event) {
    event.preventDefault();

    let inputStr = $("input#number").val();
    let newNum = mrRobo(inputStr);
    
    $("#result").show(newNum);
    $("#outputNumber").text(newNum);

  });
});
