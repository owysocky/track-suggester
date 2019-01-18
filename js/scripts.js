$(document).ready(function() {
  $("#formOne").submit(function(event){

  var theName = $("input#name").val();
  var theCity = $("#city").val();
  var theExperience = $("#experience").val();
  var theEnd = $("input:radio[name=end]:checked").val();
  var theLanguage = $("input:radio[name=language]:checked").val();

  $(".name").text(theName);
  if(theCity === "Seattle"){
    $(".cityS").show();
  } else {
    $(".cityP").show();
  }
  if(theExperience === "yes"){
    $(".experienceY").show();
  } else {
    $(".experienceN").show();
  }

  if(theName){
    if(theEnd === "backEnd"){
      if(theLanguage === "cSharp"){
        $("#result").show();
        $("#resultCSharp").show();
      } else if (theLanguage === "java"){
        $("#result").show();
        $("#resultJava").show();
      } else if (theLanguage === "php"){
        $("#result").show();
        $("#resultPhp").show();
      } else if (theLanguage === "ruby"){
        $("#result").show();
        $("#resultRuby").show();
      }
    } else {
      $("#result").show();
      $("#resultCss").show();
    }
  } else {
    alert("Please enter your name.")
  }



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
  $(".pRuby").click(function(){
    $(".pRuby h2").toggle();
    $(".pRuby p").toggle();
  });
  $(".Ccss").click(function(){
    $(".Ccss h2").toggle();
    $(".Ccss p").toggle();
  });











});
