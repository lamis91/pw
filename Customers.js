function changeBackground() {
    var selectElement = document.getElementById("countryselect");
    var selectedValue = selectElement.value;
    var bodyElement = document.body;
     if (selectedValue === "italy") {
      bodyElement.style.backgroundImage = "url('italia.jpg')";
    } else if (selectedValue === "Croatia") {
      bodyElement.style.backgroundImage = "url('kk.jpg')";
    }
    else if(selectedValue==="Egypt"){
      bodyElement.style.backgroundImage="url('R.jpeg')";
    }
    else if(selectedValue==="Germnay"){
      bodyElement.style.backgroundImage="url('download.jpeg')";
    }
   
  } 
  
 /* function submitForm() {
    var form = document.getElementById("Customers-form");
    var isValid = true;

    // Check if all required fields are filled
    var requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach(function (field) {
      if (!field.value.trim()) {
        isValid = false ;
        // You can add a visual indicator for the user that the field is required
        field.style.border = "1px solid red";
      } else {
        // Reset the border style if the field is filled
        field.style.border = "";
      }
    });

    if (isValid) {
      var x = document.getElementById("submit-btn");
      x.innerText = "Form Submitted Successfully";
    } else {
      // If any required field is not filled, display an error message
      var message = document.getElementById("message");
      message.innerText = "Please fill in all required fields.";
    }
  }*/



 