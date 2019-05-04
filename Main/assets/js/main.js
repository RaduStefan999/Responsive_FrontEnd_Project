$(document).ready(function(){

    //Navigation

    var $menu = $("#nav_menu");
    var $menu_responsive = $("#responsive_menu");
    var $search = $("#nav_search");
    var $search_responsive = $("#responsive_search");
    var $contact = $("#nav_contact");
    var $contact_responsive = $("#responsive_contact");
    var $referenser = $("#nav_referenser");
    var $referenser_resposnive = $("#responsive_referenser");
    var $sustainability = $("#nav_sustainability");
    var $sustainability_responsive = $("#responsive_sustainability");

    $menu.click(function(){ nav_general($menu); });
    $menu_responsive.click(function(){ nav_general($menu); });
    $search.click(function(){ nav_general($search); });
    $search_responsive.click(function(){ nav_general($search); });
    $contact.click(function(){ nav_general($contact); });
    $contact_responsive.click(function(){ nav_general($contact); });
    $referenser.click(function(){ nav_general($referenser); });
    $referenser_resposnive.click(function(){ nav_general($referenser); });
    $sustainability.click(function(){ nav_general($sustainability); });
    $sustainability_responsive.click(function(){ nav_general($sustainability); });

    function nav_general ($element) {
      $element.toggleClass("active-navi");

      if ($element != $menu) {
        $menu.removeClass("active-navi");
      }
      if ($element != $search) {
        $search.removeClass("active-navi");
      }
      if ($element != $contact) {
        $contact.removeClass("active-navi");
      }
      if ($element != $referenser) {
        $referenser.removeClass("active-navi");
      }
      if ($element != $sustainability) {
        $sustainability.removeClass("active-navi");
      }

    }


    //Main Presentation Effects

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