$('input[type="submit"]').mousedown(function(){
  $(this).css('background', 'red');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', 'red');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('grey');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('red');
    }
});