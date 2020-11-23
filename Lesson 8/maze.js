var start = false;
var hit = false;

$(document).ready(function (){

    $('#start').click(function (){
        start = true;
        hit = false;
        $('#maze .boundary').removeClass('youlose');
        $('#status').text("Start!");
    });

    $('.boundary').mouseover(function (){
        if(start){
            $('#maze .boundary').addClass('youlose');
            hit = true;
            //start = false;
            $('#status').text('Sorry, you lost. :[');
        }
    })

    $('#end').mouseover(function (){
        if(!hit && start){
            start = false;
            alert('You win! :]');
            $('#status').text('You win! :]');
        }else if(hit && start){
            start = false;
            alert('Sorry, you lost. :[');
        }
    })

    $('body').append('<a href="http://webster.cs.washington.edu/jslint?referer"> <img src="http://mumstudents.org/cs472/2014-09/images/w3c-js.png" alt="JavaScript Lint"> </a>');

});