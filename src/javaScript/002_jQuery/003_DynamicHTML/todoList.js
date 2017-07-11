$(document).ready(function(){
    $('#button').click(function () {
        // Getting text input from checkListItem:
        var toAdd = $('input[name=checkListItem]').val();

        // Appending HTML to the current content of '.list':
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
});

// We subscribe to click-events for all '.item' elements
// (even if it's not created yet):
$(document).on('click', '.item', function(){
    $(this).remove();
});