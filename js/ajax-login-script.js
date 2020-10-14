jQuery(document).ready(function($) {

  $('.sign-in').on('submit', function(e){
    $('.status_login').show().text(ajax_login_object.loadingmessage);
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: ajax_login_object.ajaxurl,
      data: { 
        'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
        'username': $('.sign-in #email').val(), 
        'password': $('.sign-in #pass').val(), 
        'security': $('.sign-in #security').val()
      },
      success: function(data){
        $('.status_login').text(data.message);
        if (data.loggedin == true){
          document.location.href = ajax_login_object.redirecturl;
        }
      }
    });
    e.preventDefault();
  });

});