$(document).ready(function(){
    $('.pull-me').click(function(){ // We monitoring on click event for .pull-me element
        $('.panel').slideToggle('slow'); // we play animation for .panel
    });
});