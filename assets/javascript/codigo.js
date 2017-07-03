$(document).ready(function() {
    var codigoAleatorio = ((Math.floor(Math.random() * 999 + 100)));
    alert("LAB-"+ codigoAleatorio);

    localStorage.aleatorio = codigoAleatorio;

    $("#enviar-code").click(function() {
        var code = $("#num-codigo").val();
        if (code == localStorage.aleatorio) {
        	alert("Código ingresado");
             window.location.href = 'signup2.html'
        } else {
            alert("Código incorrecto");
        }
    });
});
