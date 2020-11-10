// User Interface Logic
import mrRobo from './mrRobo.js'

$(document).ready(function() {
  $("form#mrRoboger").submit(function(event) {
    event.preventDefault();

    let inputStr = $("input#number").val();
    let newNum = mrRobo(inputStr);
    
    $("#result").show(newNum);
    $("#outputNumber").text(newNum);

  });
});
