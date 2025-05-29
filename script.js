const correctPassword = "APEN_IN_NL";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("passwordSection").style.display = "none";
    document.getElementById("giftSection").classList.remove("hidden");
    document.getElementById("musicPlayer").classList.remove("hidden");
    launchBalloons();
  } else {
    error.textContent = "Falsches Passwort. Versuche es erneut!";
  }
}

function launchBalloons() {
  const container = document.getElementById("balloonContainer");
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.textContent = "🎈";
    balloon.style.left = Math.random() * 90 + "%";
    container.appendChild(balloon);
    setTimeout(() => container.removeChild(balloon), 4000);
  }
}
