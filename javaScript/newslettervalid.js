function checkNewsletter() {
  // getting refrences to error text span and newsletter input field
  const errText = document.getElementById("newsletter-err-text");
  const newsletterInput = document.getElementById("newsletter");
  const newsletterLabel = newsletterInput.value;

  // setting the intial styling of the span tag.
  // considering that the span is error
  errText.style.display = "none";
  errText.innerHTML = "Please enter a valid email!";
  errText.style.color = "red";

  //   checking to see if the newsletter input feild is an empty field. or newsletter contains a @ symbol and a . symbol
  if (
    newsletterLabel == "" ||
    !newsletterLabel.includes("@") ||
    !newsletterLabel.includes(".")
  ) {
    // showing the error label
    errText.style.display = "block";
    // calling the cleartext function after 10 seconds
    setTimeout(clearText, 10000);
    // returning now so that the code below doesnt run
    return;
  }

  // if all validations are correct
  errText.innerHTML = "Added Your email to the newsletter"; //setting success message
  errText.style.color = "green"; //setting success color
  errText.style.display = "block"; //showing span
  newsletterInput.value = " "; // clearing input
  setTimeout(clearText, 10000);
}

function clearText() {
  document.getElementById("newsletter-err-text").style.display = "none";
}
