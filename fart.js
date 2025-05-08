function createFartSmoke() {
  const fart = document.createElement("div");
  fart.className = "fart-smoke";
  fart.style.left = Math.random() * window.innerWidth + "px";
  fart.style.animationDelay = Math.random() * 0.5 + "s";
  document.body.appendChild(fart);

  const sound = document.getElementById("fart-sound");
  if (sound) {
    sound.currentTime = 0; // rewind to start
    sound.play();
  }

  setTimeout(() => {
    fart.remove();
  }, 4000);
}
