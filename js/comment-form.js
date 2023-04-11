function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var ratingInputs = document.getElementsByName("rating");
  var commentInput = document.getElementById("comment");
  var errorMessage = document.getElementById("error-message");


  if (nameInput.value.length == 0 || emailInput.value.length == 0 || !commentInput.value ) {
    // Show error message
    alert('Please fill out all required fields and select a rating option');
    return false;
  }

  var ratingSelected = false;
  for (var i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      ratingSelected = true;
      break;
    }
  }
  if (!ratingSelected) {
    // Show error message
    alert('Please select a rating option');
    return false;
  }

  // If all required fields are filled out, hide the error message and submit the form
  errorMessage.style.display = "none";
  return true;
}

function sendEmail() {

  var isContinue =validateForm();  

  if (isContinue) {  
  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const responseType = document.getElementById('response-type').value;
  const completeTask = document.getElementById('complete-task').value;
  const comment = document.getElementById('comment').value;
  const rating = document.querySelector('input[name="rating"]:checked').value;

  // Construct the email URL
  const subject = encodeURIComponent('Feedback from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nResponse Type: ' + responseType + '\nComplete Task: ' + completeTask + '\nComment: ' + comment + '\nRating: ' + rating);
  const mailtoLink = "mailto:info@groovgalaxy.com?subject=" + subject + "&body=" + body;

  // Open the user's email client
  window.location.href = mailtoLink; }
}