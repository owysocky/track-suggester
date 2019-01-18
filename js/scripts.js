$(document).ready(function() {
  $("#formOne").submit(function(event){
alert("sUn");
  var theName = $("input#name").val();
  var theCity = $("#city").val();
  var theExperience = $("#experience").val();
alert(theName);
alert(theCity);
alert(theExperience);

  event.preventDefault();
  });

  $(".frontEnd").click(function(){
    $("").hide();
    $(".frontEnd h2").toggle();
    $(".frontEnd p").toggle();
  });
  $(".cSharp").click(function(){
    $(".cSharp h2").toggle();
    $(".cSharp p").toggle();
  });
  $(".java").click(function(){
    $(".java h2").toggle();
    $(".java p").toggle();
  });
  $(".php").click(function(){
    $(".php h2").toggle();
    $(".php p").toggle();
  });
  $(".rubby").click(function(){
    $(".rubby h2").toggle();
    $(".rubby p").toggle();
  });
  $(".css").click(function(){
    $(".css h2").toggle();
    $(".css p").toggle();
  });

alert("sUn");









});
