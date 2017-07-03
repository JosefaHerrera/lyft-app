$(document).ready(function() {
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

