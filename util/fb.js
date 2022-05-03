export const initFbsdk = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function() {
      FB.init({
        appId : '921406831677703',
        cookie : true,
        xfbml : true, // parse social plugins on this page
        version : 'v10.0' // use graph api version 2.8
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })
}
