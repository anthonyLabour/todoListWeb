

function logIn()
{

	
		window.location.replace("home.html")


  

}


function  validateForm()
{
	if(document.forms["loginForm"]["userName"].value == "" && document.forms["loginForm"]["password"] == "")
	{

		return true;
	}

	return false;

}