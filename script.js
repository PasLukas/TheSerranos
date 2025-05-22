const correctPassword = "APEN_IN_NL"; // Set your password here

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("passwordSection").style.display = "none";
    document.getElementById("giftSection").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect password. Try again!";
  }
}
