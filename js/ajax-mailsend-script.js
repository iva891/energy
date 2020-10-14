jQuery(document).ready(function($) {

  $('.feedback').on('submit', function(e){
    $('.status_mail').show().text(ajax_mailsend_object.loadingmessage);
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: ajax_mailsend_object.ajaxurl,
      data: { 
        'action': 'ajaxmailsend', //calls wp_ajax_nopriv_ajaxlogin
        'name': $('.feedback #name').val(),
        'email': $('.feedback #email').val(), 
        'message': $('.feedback #message').val(), 
        'security_mailsend': $('#security_mailsend').val()
      },
      success: function(data){
        $('.status_mail').text(data.message);
      }
    });
    e.preventDefault();
  });

});