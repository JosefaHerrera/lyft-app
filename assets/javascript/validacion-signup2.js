document.getElementById("next").addEventListener("click",function(){
	
	function name(){
		var name = document.getElementsByClassName("name").value;
		if(!(/^[a-z][a-z]*/.test(name)) || (name == "")){
  		alert("Please enter a valid Name");
		}
	}
	name();
	function email(){
		var email = document.getElementsByClassName("email").value;
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  		alert("Please enter a valid Email");
		}
	}
	email();
	function checkbox(){
		var checkbox = document.getElementById("checkbox");
		var seleccionado = false;
		for(var i=0; i<checkbox.length; i++) {    
		  if(checkbox[i].checked) {
		    seleccionado = true;
		    break;
		  }
		}
		 
		if(!seleccionado) {
		  alert("Please accept our Terms and Conditions");
		}
	}
	checkbox();
})