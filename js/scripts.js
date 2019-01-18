$(document).ready(function() {
  $("#formOne").submit(function(event){

  var theName = $("input#name").val();
  var theCity = $("#city").val();
  var theExperience = $("#experience").val();
  var theEnd = $("input:radio[name=end]:checked").val();
  var theLanguage = $("input:radio[name=language]:checked").val();

  $(".name").text(theName.charAt(0).toUpperCase()+theName.slice(1));
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
        $("#resultCss").hide();
        $("#resultRuby").hide();
        $("#resultPhp").hide();
        $("#resultJava").hide();
        $("#result").show();
        $("#resultCSharp").show();
      } else if (theLanguage === "java"){
        $("#resultCss").hide();
        $("#resultRuby").hide();
        $("#resultPhp").hide();
        $("#resultCSharp").hide();
        $("#result").show();
        $("#resultJava").show();
      } else if (theLanguage === "php"){
        $("#resultCss").hide();
        $("#resultRuby").hide();
        $("#resultJava").hide();
        $("#resultCSharp").hide();
        $("#result").show();
        $("#resultPhp").show();
      } else if (theLanguage === "ruby"){
        $("#resultCss").hide();
        $("#resultPhp").hide();
        $("#resultJava").hide();
        $("#resultCSharp").hide();
        $("#result").show();
        $("#resultRuby").show();
      }
    } else {
      $("#resultRuby").hide();
      $("#resultPhp").hide();
      $("#resultJava").hide();
      $("#resultCSharp").hide();
      $("#result").show();
      $("#resultCss").show();
    }
  } else {
    alert("Please enter your name.")
  }
  event.preventDefault();
  });

  $(".label").click(function(){
    $("#seeResult").hide();
    $(".label").toggle();
    $("#seeResult").toggle();

  });

  $(".pFrontEnd").click(function(){
    $(".pFrontEnd p").fadeToggle(1000);
  });
  $(".pCSharp").click(function(){
    $(".pCSharp p").fadeToggle(1000);
  });
  $(".pJava").click(function(){
    $(".pJava p").fadeToggle(1000);
  });
  $(".pPhp").click(function(){
    $(".pPhp p").fadeToggle(1000);
  });
  $(".pRuby").click(function(){
    $(".pRuby p").fadeToggle(1000);
  });
  $(".Ccss").click(function(){
    $(".Ccss p").fadeToggle(1000);
  });

});
