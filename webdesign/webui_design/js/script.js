$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready;
  
  // for development =========================================================
  $('#note-dev-trigger').click(function() {
    $('#note').toggle();
  });
  $('#layer-dev-trigger').click(function() {
    $('#layer').toggle();
  });
  $('#layer-close').click(function() {
    $('#layer').toggle();
  });
  $('#grid-dev-trigger').click(function() {
    $('#grid-layer').toggle();
  });
  // /for development ========================================================
  
  $('#settings-trigger').click(function() {
    $('#layer').toggle();
    var layerContentType = $(this).attr('href');
  });
  
  // Toggle Configuration manu in widget
  $('.trigger-config').click(function() {

      // Add hight-lighting for active function
      if ($(this).hasClass('widget-config-active')) {
        $(this).removeClass('widget-config-active');
      } else {
        $(this).addClass('widget-config-active');
      }
    
    if ($(this).parent().parent().parent().next().hasClass('config-menu')) {
      $(this).parent().parent().parent().next().slideToggle('fast');
    };
  });
  
  $('.widget-searchbar').click(function() {
    $(this).parent().parent().parent().next().next().slideToggle('fast');
    if ($(this).hasClass('widget-searchbar-active')) {
      $(this).removeClass('widget-searchbar-active');
    } else {
      $(this).addClass('widget-searchbar-active');
    };
    
  });
  
  $('#show-details-trigger').click(function() {
    $('.show-details').toggle();
    $('.hide-details').toggle();
    $('#vote-info').slideToggle('fast');
  });
  
  // Close Config-Menu
  $('.config-close').click(function() {
    $(this).parent().slideUp('fast');
  });
  
  // ========================================================================
  // Widget
  // $('.keyword-list li a:not(.switch-trigger)').click(function() { // this works too
  $('a.open-dialogue').click(function() {
      displayDetailLayer(this);
  });
  
  
  function displayDetailLayer (e) { // Display or Hide Detail-Dialogue (Layer)
    
    var triggerID = $(e).attr('id');
    var detailLayerTitle =  $('.widget-detail-layer').attr('title');
    
    if (triggerID == detailLayerTitle) {
      $('.widget-detail-layer').fadeOut('fast').attr('title', '');
    } else {
      
      var repoName = $(e).html(); // use as H2 in Dialogue
      
      var minTop = 50;
      var minLeft = 180;
      var tipTop = minTop - 3;
      var thisPos = $(e).offset();
      var thisTop = thisPos.top - minTop;
      var thisLeft = thisPos.left - minLeft;

      $('.widget-detail-layer').fadeIn('fast').css({top: thisTop, left: thisLeft}).addClass('active-layer').attr('title', triggerID); // show dialogue on right position, add identifier (class & title)
      $('.widget-detail-layer .right-tip').css({backgroundPosition: 'left ' + tipTop + 'px' }); // set dialogue tip
      $('.widget-detail-layer h2:first').html(repoName); // set reop name in first H2
    };
    
  }

  $('.close-trigger').click(function() { // close dilaogue when close-button onclick
    $(this).parents('.active-layer').fadeOut('fast');
  });
  
  
  
});