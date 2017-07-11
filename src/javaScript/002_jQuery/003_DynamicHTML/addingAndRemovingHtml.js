$(document).ready(function(){
    var updateButtons = function (htmlRemoved) {
        // Setting 'disable' attribute by element class selection:
        $('.enNoHTML').prop('disabled', !htmlRemoved);
        $('.enWithHTML').prop('disabled', htmlRemoved);
    };

    var updateParagraph = function (paragraphPos) {
        if (paragraphPos === 0) {
            // We move element 'p' before '#div1':
            $('#div1').before($('p'));
        } else {
            // We move element 'p' after '#divN':
            $('#div' + paragraphPos).after($('p'));
        }
    };

    var paragraphPos = 0;

    // We define onClick callbacks for buttons:
    $('#btnCreate').click(function() {
        paragraphPos = 0;
        // That's how we can add some HTML into document (before '#div1' element):
        $('#div1').before("<p>Hello, I am movable paragraph!</p>");
        updateButtons(false);
    });

    $('#btnMoveDown').click(function() {
        paragraphPos = (paragraphPos + 1) % 4;
        updateParagraph(paragraphPos);
    });

    $('#btnMoveUp').click(function() {
        paragraphPos = (paragraphPos <= 0) ? 3 : (paragraphPos - 1);
        updateParagraph(paragraphPos);
    });

    $('#btnRemove').click(function() {
        // That's how we can remove specified element from document:
        $('p').remove();
        updateButtons(true);
    });

    updateButtons(true);
});