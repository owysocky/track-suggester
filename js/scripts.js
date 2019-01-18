$(document).ready(function() {
  $("#formOne").submit(function(event){
alert("sUn");
  var theName = $("input#name").val();
  var theCity = $("#city").val();
  var theExperience = $("#experience").val();
  var theEnd = $("input:radio[name=end]:checked").val();
  var theLanguage = $("input:radio[name=language]:checked").val();

alert(theName);
alert(theCity);
alert(theExperience);
alert(theEnd);
alert(theLanguage);

  event.preventDefault();
  });

  $(".pFrontEnd").click(function(){
    $(".pFrontEnd h2").toggle();
    $(".pFrontEnd p").toggle();
  });
  $(".pCSharp").click(function(){
    $(".pCSharp h2").toggle();
    $(".pCSharp p").toggle();
  });
  $(".pJava").click(function(){
    $(".pJava h2").toggle();
    $(".pJava p").toggle();
  });
  $(".pPhp").click(function(){
    $(".pPhp h2").toggle();
    $(".pPhp p").toggle();
  });
  $(".pRubby").click(function(){
    $(".pRubby h2").toggle();
    $(".pRubby p").toggle();
  });
  $(".Ccss").click(function(){
    $(".Ccss h2").toggle();
    $(".Ccss p").toggle();
  });

alert("sUn");









});
