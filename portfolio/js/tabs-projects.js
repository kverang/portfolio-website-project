$(document).ready(function() {
    $("#project-tab-content").find("[id^='tab']").hide(); // Hide all content
    $(".project-name li:first").attr("class","current"); // Activate the first tab
    $("#project-tab-content #tab1").fadeIn(); // Show first tab's content

    $(document).on('click', '.project-name a', function() {
      $('.project-name a').removeClass('current');
      $('.project-name li').removeClass('current');
      $('#project-tab-content #tab1').hide();
      $('#project-tab-content #tab2').hide();

      if ($(this).hasClass('geneva')) {
        $('.project-name a.geneva').addClass('current');
        $('.project-name li.geneva').addClass('current');
        $('#project-tab-content #tab1').fadeIn();
      } else {
        $('.project-name a.kisha').addClass('current');
        $('.project-name li.kisha').addClass('current');
        $('#project-tab-content #tab2').fadeIn();
      }
      
      return false;
    });
});