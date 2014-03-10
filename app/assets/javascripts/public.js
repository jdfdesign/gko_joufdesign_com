//= require jquery_ujs
//= require remote_form
//= require portfolio
//= require jquery.placeholder
//= require jquery.mixitup.min
//= require jquery.fitvids

// make console.log safe to use
window.console || (console = {
  log: function() {}
});

jQuery(function($){
  'use strict';
  var THEME = window.THEME || {};

  /* ==================================================
  	Fix
  ================================================== */

  THEME.fix = function(){
    // fix for ie device_width bug 
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}"));
      document.getElementsByTagName("head")[0].
      appendChild(msViewportStyle);
    }
  };
  
  /* ==================================================
  	Placeholder
  ================================================== */

  THEME.placeholder = function(){
    // enable placeholder fix for old browsers
    $('input, textarea').placeholder();
  };

  /* ==================================================
  	Scroll to Top
  ================================================== */

  THEME.scrollToTop = function(){
  	var didScroll = false;

  	var $arrow = $('#back-to-top');

  	$arrow.click(function(e) {
  		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
  		e.preventDefault();
  	});

  	$(window).scroll(function() {
  		didScroll = true;
  	});

  	setInterval(function() {
  		if( didScroll ) {
  			didScroll = false;

  			if( $(window).scrollTop() > 1000 ) {
  				$arrow.css('display', 'block');
  			} else {
  				$arrow.css('display', 'none');
  			}
  		}
  	}, 250);
  };

  /* ==================================================
     Responsive Video
  ================================================== */

  THEME.video = function(){
  	$('.videoWrapper, .video-embed').fitVids();
  };
/*==================================================
  	Init
==================================================*/

  $(document).ready(function() {
    Portfolio.init();
    THEME.fix(); 
    THEME.scrollToTop();
    THEME.placeholder();
    THEME.video();
    $('[data-image]').each(function( index ) {
      var el = $( this ),
          src = el.attr("data-image");
      el.css("background-image", 'url("' + src + '")');
    });

  });

}); 
