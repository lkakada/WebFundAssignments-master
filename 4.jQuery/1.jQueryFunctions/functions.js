$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    // put your code for the remaining functions below
    $('#hideShow #hide').click(function() {
        $('#hideShow p').hide();
    });
    $('#hideShow #show').click(function() {
        $('#hideShow p').show();
    });
    $('#toggle button').click(function() {
        $('#toggle p').toggle();
    })
    $('#hideShow #up').click(function(){
        $('#hideShow p').slideUp();
    })
    $('#hideShow #down').click(function(){
        $('#hideShow p').slideDown();
    })
    $('#slideToggle').click(function(){
        $('#slideToggle p').slideToggle();
    })
    $('#fadeInOut #in').click(function() {
        $('#fadeInOut p').fadeIn();
    })
    $('#fadeInOut #out').click(function() {
        $('#fadeInOut p').fadeOut();
    })
    $('#before button').click(function() {
        $('#before p').before('To insert text before paragraph!!');
    })
    $('#after button').click(function() {
        $('#after p').after('To insert text after paragraph!!');
    })
    $('#append button').click(function() {
        $('#append p').append('To append text to the paragraph!!');
    })
    $('#html button').click(function() {
        $('#html p').html('<h1>To html text to the paragraph!!</h1>');
    })
    $('#text button').click(function() {
        $('#text p').text('To add text to the paragraph!!');
    })
    $('#attr button').click(function() {
        $('#attr img').attr("width","400");
    })
    $('#val button').click(function() {
        $('#val input').val('Kakada Ly');
    })
});