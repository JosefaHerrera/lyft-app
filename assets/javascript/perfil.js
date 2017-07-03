/**/
$(document).ready(function(){

	$( "#modal-info" ).toggleClass( "hide" ); //ocultar modal

	$("#edit-profile").click(function(){
		$("#modal-info").toggleClass("hide"); // mostrar modal al hacer click en edit

	})

	$("#guardar").click(function(){ // guardar los datos

		localStorage.ciudad=document.getElementById("ciudad").value;
		localStorage.musica=document.getElementById("musica").value;
		localStorage.bio=document.getElementById("bio").value;


		if((localStorage.ciudad != undefined) && (localStorage.musica != undefined)){

			$(".city").replaceWith("<p>" + localStorage.ciudad + "</p>");
			$(".music").replaceWith("<p>" + localStorage.musica + "</p>");
			$(".about").replaceWith("<p>" + localStorage.bio + "</p>");

		$("#modal-info").toggleClass("hide"); // cerrar modal
		}else { 
			alert("Debes ingresar tu nombre y tu password")
			}

	})

	$("#cancelar").click(function(){ // cerrar modal sin cambios
		$("#modal-info").toggleClass("hide");
	})

}); // ./ready

	


//--------------------------------------------
