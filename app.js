let text = document.getElementsByClassName('placeholder');



function add_the_list(e){
    if(e.keyCode == 13){            // while working with event(e), click() does not
        $('#button').click();
    }
    }


$('.placeholder').keyup(add_the_list);

$('#button').click(function(){
    remove = 'remove';
    $('#list').append('<span id = "appended">'+'<li>' + $('.placeholder').val() +'</li>' + '                 '+ '<button id = remove>' + 'remove'+ '</button>'+'</span>'); 
        $('#remove').css('font-weight', 'bold');
        $('li').css('color', 'blue');
        $('li').css('font-size', '220%');
        $('li').css('font-weight', 'bold');
        $('.placeholder').val("");  
        
});

$("#list").on('click','#remove',function(){
    $('#appended').remove();

});





