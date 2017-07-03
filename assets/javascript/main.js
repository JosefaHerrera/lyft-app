/**/

$("#edit").click( function(){

	

});



function guardarDatos(){
	localStorage.nombre=document.getElementById("nombre").value;
	localStorage.password=document.getElementById("password").value;

	if((localStorage.nombre.length == 0) && (localStorage.password.length == 0)){

	alert("Debes ingresar tu nombre y tu password")
	}

}

function recuperarDatos(){
	if((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElementById("datos").innerHTML = 
		"Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
	}else if((localStorage.nombre.length == 0) && (localStorage.password.length == 0)){

	alert("Debes ingresar tu nombre y tu password")
	}else{

		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	}
}