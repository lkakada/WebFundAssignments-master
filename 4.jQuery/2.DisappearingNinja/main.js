$(document).ready(function() {
    $('.wrapper img').click(function() {
        $(this).hide('slow');
    })
    $('.wrapper button').click(function(){
        $('img').show('slow');
    })
})