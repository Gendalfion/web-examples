$(document).ready(function () {
    var $circle = $('.circle');
    // In this script we apply various animations through .effect method, supplied by jQuery UI library
    $circle.draggable(); // Make our div draggable

    $circle.dblclick(function () {
        $(this).effect('bounce', {times: 3}, 500);
        $(this).effect('explode');
    });
    $circle.effect('slide');

    $('#menu').accordion();
});