// User Interface Logic
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
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
