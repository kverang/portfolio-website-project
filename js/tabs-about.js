$(document).ready(function() {
    $("#about-tab-content").find("[id^='tab']").hide(); // Hide all content
    $(".about-name li:first").attr("class","current"); // Activate the first tab
    $("#about-tab-content #tab1").fadeIn(); // Show first tab's content

    $(document).on('click', '.about-name a', function() {
      $('.about-name a').removeClass('current');
      $('.about-name li').removeClass('current');
      $('#about-tab-content #tab1').hide();
      $('#about-tab-content #tab2').hide();

      if ($(this).hasClass('geneva')) {
        $('.about-name a.geneva').addClass('current');
        $('.about-name li.geneva').addClass('current');
        $('#about-tab-content #tab1').fadeIn();
      } else {
        $('.about-name a.kisha').addClass('current');
        $('.about-name li.kisha').addClass('current');
        $('#about-tab-content #tab2').fadeIn();
      }
      
      return false;
    });
});