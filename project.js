//validate form input and submit if valid input
function validateAndSubmitForm() {

    //name is required
    if (document.getElementById("your-name").value == "") {
        alert("Please enter your name");
        document.getElementById("your-name").focus();
        return;
    }

    //email is required
    if (document.getElementById("your-email").value == "") {
        alert("Please enter your email");
        document.getElementById("your-email").focus();
        return;
    } else if (validateEmail(document.getElementById("your-email").value) == false) {
        alert("Email is invalid format");
        document.getElementById("your-email").focus();
        return;
    }

    //message is required
    if (document.getElementById("your-message").value == "") {
        alert("Please enter your message");
        document.getElementById("your-message").focus();
        return;
    }

    alert('Thank you for your support');
    window.document.location = "index.html";
}

/*
validate email
Reference: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_email_pattern
*/

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);