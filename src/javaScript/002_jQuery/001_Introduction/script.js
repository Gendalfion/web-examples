$(document).ready(function() {
    // We select all 'div's by CSS-like selector:
    var div = $('div');

    // Adding callbacks to div element:
    div.mouseenter(function() {
        $(this).fadeTo('fast', 1.0);
    });

    div.mouseleave(function() {
        $(this).fadeTo('slow', 0.25);;
    });

    div.click(function() {
        $(this).toggle(1000);
    });
});
