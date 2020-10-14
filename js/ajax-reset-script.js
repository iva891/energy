jQuery(document).ready(function($) {

  $('#reset_pass').on('submit', function(e){
    $('.status_reset').show().text(ajax_reset_object.loadingmessage);
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: ajax_reset_object.ajaxurl,
      data: { 
        'action': 'ajaxreset', //calls wp_ajax_nopriv_ajaxlogin
        'email': $('#reset_pass #email-new').val(), 
        'security_reset': $('#security_reset').val()
      },
      success: function(data){
        $('.status_reset').text(data.message);

        if (data.loggedin == true){
          
        }
      }
    });
    e.preventDefault();
  });

});