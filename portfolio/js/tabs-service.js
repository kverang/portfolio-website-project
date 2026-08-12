$(document).ready(function() {
    $("#service-tab-content").find("[id^='tab']").hide(); // Hide all content
    $(".service-name li:first").attr("class","current"); // Activate the first tab
    $("#service-tab-content #tab1").fadeIn(); // Show first tab's content

    $(document).on('click', '.service-name a', function() {
      $('.service-name a').removeClass('current');
      $('.service-name li').removeClass('current');
      $('#service-tab-content #tab1').hide();
      $('#service-tab-content #tab2').hide();

      if ($(this).hasClass('geneva')) {
        $('.service-name a.geneva').addClass('current');
        $('.service-name li.geneva').addClass('current');
        $('#service-tab-content #tab1').fadeIn();
      } else {
        $('.service-name a.kisha').addClass('current');
        $('.service-name li.kisha').addClass('current');
        $('#service-tab-content #tab2').fadeIn();
      }
      
      return false;
    });
});