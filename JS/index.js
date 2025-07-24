function toggleMobile(imgEl) {
  // Cek apakah ini layar mobile
  if (window.innerWidth < 768) {
    const infoEl = imgEl.parentElement.querySelector("[data-info]");
    infoEl.classList.toggle("hidden");
  }
}
