$(document).ready(function() {

    $("#chile").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/chile.png");
    $("#inputt").attr("placeholder", "+56")
    $("#code").text("+56")

});

    $("#mex").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/mexico.png");
    $("#inputt").attr("placeholder", "+52")
    $("#code").text("+52")

});
    $("#peru").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/peru.png");
    $("#inputt").attr("placeholder", "+51")
    $("#code").text("+51")

});
    $("#arg").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/argentina.png");
    $("#inputt").attr("placeholder", "+54")
    $("#code").text("+54") 

});
    $("#col").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/colombia.png");
    $("#inputt").attr("placeholder", "+57")
    $("#code").attr("+57")
});
    $("#ecu").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/ecuador.png");
    $("#inputt").attr("placeholder", "+593")
    $("#code").attr("+593")
});
    $("#bra").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/brasil.png");
    $("#inputt").attr("placeholder", "+55")
    $("#code").attr("+55")

});
    $("#bol").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/bolivia.png");
    $("#inputt").attr("placeholder", "+591")
    $("#code").attr("+591")

});
    $("#uru").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/uruguay.png");
    $("#inputt").attr("placeholder", "+598")
    $("#code").attr("+598")

});
    $("#vene").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/venezuela.png");
    $("#inputt").attr("placeholder", "+58")
    $("#code").attr("+58")

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

/*Cambiar segundo attr por TEXT para que se cambie el codigo de pais*/