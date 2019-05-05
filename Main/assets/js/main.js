$(document).ready(function(){

    //Navigation

    var $content = $("#content");


    var $menu = $("#nav_menu");
    var $menu_responsive = $("#responsive_menu");
    var $nav_section_menu = $("#nav-section-menu");

    var $search = $("#nav_search");
    var $search_responsive = $("#responsive_search");
    var $nav_section_search = $("#nav-section-search");

    var $contact = $("#nav_contact");
    var $contact_responsive = $("#responsive_contact");
    var $nav_section_contact = $("#nav-section-contact");

    var $referenser = $("#nav_referenser");
    var $referenser_resposnive = $("#responsive_referenser");
    var $nav_section_referenser = $("#nav-section-referenser");

    var $sustainability = $("#nav_sustainability");
    var $sustainability_responsive = $("#responsive_sustainability");
    var $nav_section_sustainability = $("#nav-section-sustainability");


    $menu.click(function(){ nav_general($menu, $nav_section_menu); });
    $menu_responsive.click(function(){ nav_general($menu, $nav_section_menu); });

    $search.click(function(){ nav_general($search, $nav_section_search); });
    $search_responsive.click(function(){ nav_general($search, $nav_section_search); });

    $contact.click(function(){ nav_general($contact, $nav_section_contact); });
    $contact_responsive.click(function(){ nav_general($contact, $nav_section_contact); });

    $referenser.click(function(){ nav_general($referenser, $nav_section_referenser); });
    $referenser_resposnive.click(function(){ nav_general($referenser, $nav_section_referenser); });

    $sustainability.click(function(){ nav_general($sustainability, $nav_section_sustainability); });
    $sustainability_responsive.click(function(){ nav_general($sustainability, $nav_section_sustainability); });



    function nav_general ($element, $target) {
      $element.toggleClass("active-navi");

      if ($element != $menu) {
        $menu.removeClass("active-navi");
        $nav_section_menu.addClass("hidden");
      }
      if ($element != $search) {
        $search.removeClass("active-navi");
        $nav_section_search.addClass("hidden");
      }
      if ($element != $contact) {
        $contact.removeClass("active-navi");
        $nav_section_contact.addClass("hidden");
      }
      if ($element != $referenser) {
        $referenser.removeClass("active-navi");
        $nav_section_referenser.addClass("hidden");
      }
      if ($element != $sustainability) {
        $sustainability.removeClass("active-navi");
        $nav_section_sustainability.addClass("hidden");
      }

      if ($element.hasClass("active-navi")) {
        $target.removeClass("hidden");
        $content.addClass("hidden");
      }
      else {
        $target.addClass("hidden");
        $content.removeClass("hidden");
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