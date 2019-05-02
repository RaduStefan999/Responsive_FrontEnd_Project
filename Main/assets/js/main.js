$(document).ready(function(){
    $("#button_one").hover(function(){
        
      $("#main-image").css("background-image", "url(" + "assets/images/sample-project-1.jpg" + ")");
      }, 
      function(){
      $("#main-image").css("background-image", "url(" + "none" + ")");

    });

    $("#button_two").hover(function(){
        
        $("#main-image").css("background-image", "url(" + "assets/images/sample-project-2.jpg" + ")");
        }, 
        function(){
        $("#main-image").css("background-image", "url(" + "none" + ")");
  
    });

    $("#button_three").hover(function(){
        
        $("#main-image").css("background-image", "url(" + "assets/images/sample-project-3.jpg" + ")");
        }, 
        function(){
        $("#main-image").css("background-image", "url(" + "none" + ")");
  
    });

  });