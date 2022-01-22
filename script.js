
const submitButton = document.getElementById("submit");
const input = document.getElementById("username");

input.addEventListener("keyup", (e) =>{
	const value = e.currentTarget.value;
	if(value === ""){
		submitButton.disabled = true;
		submitButton.style.backgroundColor="#4632a8";
	}else{
		submitButton.style.backgroundColor="#4632a8";
		submitButton.disabled = false;
		
	}
})
	
var password = document.forms['form']['password'];
var pass_error = document.getElementById('pass_error');
password.addEventListener('textInput', pass_Verify);

function validated(){	
	if (password.value.length < 8) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function pass_Verify(){
	if (password.value.length >= 8) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

