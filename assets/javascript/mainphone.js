$(document).ready(function() {
    $("#next_button").hide();

    $('.required').on('keyup', function () {                    
           ToggleSubmitButton();
    }); 
});

function ToggleSubmitButton()
{
    $("#next_button").hide();
    var getRequiredLength = $('.required').length;
    var nonempty = $('.required').filter(function() {
        return this.value != ''
    }).length;

    if(getRequiredLength ==  nonempty){
        $("#next_button").show();
    }

}