$(document).ready(function() {
    $("#tab-content").find("[id^='tab']").hide();
    $("#tabs li:first").attr("id","current");
    $("#tab-content #tab1").show(); 

    $('#tabs a').click(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ 
         return;
        }
        else{
          $("#tab-content").find("[id^='tab']").hide();
          $("#tabs li").attr("id","");
          $(this).parent().attr("id","current");
          $('#' + $(this).attr('name')).show();
        }
    });
});