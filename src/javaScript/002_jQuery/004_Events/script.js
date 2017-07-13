$(document).ready(function() {
    const $img = $('img');
    const $img_sizeX = $img.width();
    const $img_sizeY = $img.height();

    // Handling document events:
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $img.animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $img.animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $img.animate({left: "+=10px"}, 'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $img.animate({top: "+=10px"}, 'fast');
                break;
        }
    });

    $(document).click(function (event) {
       console.log(event.pageX  + " " + event.pageY);
        $img.css('left', event.pageX - $img_sizeX/2);
        $img.css('top', event.pageY - $img_sizeY/2);

        if (!$img.is(':visible')) {
            $img.fadeIn('slow');
        }
    });

    // Handling double click event for mouse:
    $img.dblclick(function () {
        $(this).fadeOut('fast');
    });
});