document.getElementById("next").addEventListener("click",function(){
	
	function name(){
		var name = $("#input-name").val();

		if(!(/^[a-z][a-z]*/.test(name)) || (name == "")){
  		alert("Please enter a valid Name");
		}
	}
	name();
	function email(){
		var email = $("#input-email").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
  		alert("Please enter a valid Email");
		}
	}
	email();
	function checkbox(){
		var checkbox = $("#checkbox").val();
		var seleccionado = false;
		for(var i=0; i<checkbox.length; i++) {    
		  if(checkbox[i].checked) {
		    seleccionado = true;
		    break;
		  }
		}
		 
		if(seleccionado) {
		  alert("Please accept our Terms and Conditions");
		}
	}
	checkbox();
});

function saveData(){
	var lname = document.getElementsByClassName("name").value;
	var lemail = document.getElementsByClassName("email").value

	localStorage.lData = lname;
	localStorage.lData = lemail;
}

function loadData() {

    var localDataname = localStorage.lname;

    var localDataemail = localStorage.lemail;

    if (lname) {

    document.getElementsByClassName("name").value = localDataname;

    }

    if (lemail) {

    document.getElementsByClassName("email").value = localDataemail;

    }

    }

