/*
alert is a JavaScript function that will create a pop-up window with text inside it.
*/
//alert('Hello JavaScript!');

/*
The Document Object Model, commonly referred to as the DOM', is the term for elements
in an HTML file. Elements are any HTML code denoted by HTML tags, like <div>, <a>, or <p>.
We can select an HTML element with JavaScript by selecting its class attribute, like this:
*/
var skillset = document.getElementsByClassName('skillset');
//alert(skillset);

function main () {
    /*
    We can wrap any CSS selector, like class, id, or tag, with $('.example-class') to select it with jQuery:

    */
    var $skillset = $('.skillset'); // Note: It is a common convention to name variables that hold jQuery selectors with a dollar sign '$'
    //alert($skillset);

    /*
    We can hide elements with jQuery with a function named hide:
    */
    $skillset.hide();

    /*
    'fadeIn' will fade an element in over a period of time in milliseconds:
    */
    $skillset.fadeIn(1000);

    $('.projects').hide();
    /*
    In order to make an element clickable, we need to write jQuery that listens to an element for a click event.
    jQuery can do this with an event listener function named on('click').
    This function will wait for a click event, and when one occurs, it will execute a provided function.

    The syntax looks like this:

        $('.example-class').on('click', function() {
          // execute the code here when .example-class is clicked.
        });

    */
    $('.projects-button').on('click', function() {
        /*
        'toggle' will hide or show an element, each time it is triggered. The syntax looks like this:
        */
        //$('.projects').toggle();

        /*
        .toggleClass is a function that will toggle a CSS class on the jQuery selector it's connected to.
        If the element has the class applied to it, toggleClass will remove it, and if the element does
        not have the class, it will add it.
        */
        //$('.projects-button').toggleClass('active');

        /*
        We can select the specific element we clicked on with the jQuery selector $(this).

        The syntax looks like this:
        $('.example-class').on('click', function() {
          $(this).toggleClass('active');
        });

        $(this) selects the clicked element. If there are multiple elements with a class of .example-class,
        this will only toggle the class of the one that is clicked on.
        Notice that $(this) does not require quotes around it, since it is not a CSS class.
        Instead, this is a JavaScript keyword.

        $(this) behaves just like our other selectors. We can attach toggleClass or toggle to it in the same way:
        */
        $(this).toggleClass('active');

        /*
        jQuery has a function named next to help us select elements that are next to another element.
        If we have this in our HTML:
        <div class='item-one'> ... </div>
        <div class='item-two'> ... </div>

        If we wanted to hide item-two, we could write:
        $('.item-one').next().hide();

        We can attach next to any jQuery selector to select the next direct element.
        Then, we can attach any jQuery function to next(). In this case, we attached hide,
        which would hide the next element after the $('.item-one') element.
        */
        //$(this).next().toggle();
        $(this).next().slideToggle(400); /* The will toggle visibility with slide animation of 400 ms */

        /*
        We can change the text of an element with the jQuery function text. It's syntax looks like this:
        $('.my-selector').text('Hello world!');
        text attaches directly to a jQuery selector.

        Inside of text's parentheses, we can provide text that will become the text of our DOM element.
        The text we supply will replace any existing text, and if the element has no pre-existing text,
        text will add it.
        */
        $(this).text('Projects Viewed');
    });
}

/*
jQuery has a built in function to check if the page is ready before it will run our code.
jQuery calls back to the main function, when the page completely loaded:
*/
$(document).ready(main);