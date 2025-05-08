function createFartSmoke() {
  const fart = document.createElement("div");
  fart.className = "fart-smoke";

  // Random horizontal position
  fart.style.left = Math.random() * window.innerWidth + "px";

  // Optional: random delay or scale variation
  fart.style.animationDelay = Math.random() * 0.5 + "s";

  document.body.appendChild(fart);

  setTimeout(() => {
    fart.remove();
  }, 4000);
}

setInterval(createFartSmoke, 1200);
