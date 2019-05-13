$(document).ready(function(){

    //Navigation

    var $content = $("#content");


    var $menu = $("#nav_menu");
    var $menu_responsive = $("#responsive-navigation-menu");
    var $nav_section_menu = $("#nav-section-menu");

    var $search = $("#nav_search");
    var $nav_section_search = $("#nav-section-search");

    var $contact = $("#nav_contact");
    var $nav_section_contact = $("#nav-section-contact");

    var $referenser = $("#nav_referenser");
    var $nav_section_referenser = $("#nav-section-referenser");

    var $sustainability = $("#nav_sustainability");
    var $nav_section_sustainability = $("#nav-section-sustainability");


    $menu.click(function(){ nav_general($menu, $nav_section_menu); });
    $menu_responsive.click(function(){ nav_general($menu, $nav_section_menu); });

    $search.click(function(){ nav_general($search, $nav_section_search); });

    $contact.click(function(){ nav_general($contact, $nav_section_contact); });

    $referenser.click(function(){ nav_general($referenser, $nav_section_referenser); });

    $sustainability.click(function(){ nav_general($sustainability, $nav_section_sustainability); });



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


    //Sustainability

    var $accreditation_button_1 = $("#accreditation-button-1");
    var $accreditation_button_2 = $("#accreditation-button-2");
    var $accreditation_button_3 = $("#accreditation-button-3");

    var $accreditation_text_1 = $("#accreditation-text-1");
    var $accreditation_text_2 = $("#accreditation-text-2");
    var $accreditation_text_3 = $("#accreditation-text-3");

    $accreditation_button_1.click(function(){ sustainability_general($accreditation_button_1, $accreditation_text_1); });
    $accreditation_button_2.click(function(){ sustainability_general($accreditation_button_2, $accreditation_text_2); });
    $accreditation_button_3.click(function(){ sustainability_general($accreditation_button_3, $accreditation_text_3); });

    function sustainability_general ($element, $target) {
      $element.toggleClass("active-accreditation-button");

      if ($element != $accreditation_button_1) {
        $accreditation_button_1.removeClass("active-accreditation-button");
        $accreditation_text_1.addClass("hidden");
      }
      if ($element != $accreditation_button_2) {
        $accreditation_button_2.removeClass("active-accreditation-button");
        $accreditation_text_2.addClass("hidden");
      }
      if ($element != $accreditation_button_3) {
        $accreditation_button_3.removeClass("active-accreditation-button");
        $accreditation_text_3.addClass("hidden");
      }

      if ($element.hasClass("active-accreditation-button")) {
        $target.removeClass("hidden");
      }
      else {
        $target.addClass("hidden");
      }


    }


    //Main Presentation Effects

    $("#button_one").hover(function(){

        $("#main-image").css("background-image", "url(" + "assets/images/sample-project-1.jpg" + ")");
        $("#button_one").toggleClass("active-action-buttons");
      }, 

      function(){

        $("#main-image").css("background-image", "url(" + "none" + ")");
        $("#button_one").toggleClass("active-action-buttons");

    });

    $("#button_two").hover(function(){
        
          $("#main-image").css("background-image", "url(" + "assets/images/sample-project-2.jpg" + ")");
          $("#button_two").toggleClass("active-action-buttons");
        }, 

        function(){

          $("#main-image").css("background-image", "url(" + "none" + ")");
          $("#button_two").toggleClass("active-action-buttons");
  
    });

    $("#button_three").hover(function(){
        
          $("#main-image").css("background-image", "url(" + "assets/images/sample-project-3.jpg" + ")");
          $("#button_three").toggleClass("active-action-buttons");
        }, 

        function(){

          $("#main-image").css("background-image", "url(" + "none" + ")");
          $("#button_three").toggleClass("active-action-buttons");
  
    });

  });