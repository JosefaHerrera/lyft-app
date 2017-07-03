$(document).ready(function() {


    $("#mex").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/mexico.png");  // o  $(this).attr("src", nuevaImagen);

});


    $("#next-button").hide();

    $('.required').on('keyup', function (){                    
           ToggleSubmitButton();
    }); 

});

function ToggleSubmitButton(){

    $("#next-button").hide();
    var getRequiredLength = $('.required').length;
    var nonempty = $('.required').filter(function(){
        return this.value != ''
    }).length;

    if(getRequiredLength == nonempty){
        $("#next-button").show();
    }
}

