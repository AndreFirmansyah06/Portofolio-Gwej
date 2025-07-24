function toggleMobile(imgEl) {
  // Cek apakah ini layar mobile
  if (window.innerWidth < 768) {
    const infoEl = imgEl.parentElement.querySelector("[data-info]");

    infoEl.classList.toggle("opacity-0");
    infoEl.classList.toggle("translate-y-2");
    infoEl.classList.toggle("pointer-events-none");
    infoEl.setAttribute(
      "data-active",
      infoEl.classList.contains("opacity-0") ? "false" : "true"
    );
  }

}
