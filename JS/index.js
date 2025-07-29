window.va =
  window.va ||
  function () {
    (window.vaq = window.vaq || []).push(arguments);
  };

window.si =
  window.si ||
  function () {
    (window.siq = window.siq || []).push(arguments);
  };

function toggleMobile(imgEl) {
  // Cek apakah ini layar mobile

  const infoEl = imgEl.parentElement.querySelector("[data-info]");

  infoEl.classList.toggle("opacity-0");
  infoEl.classList.toggle("translate-y-2");
  infoEl.classList.toggle("pointer-events-none");
  infoEl.setAttribute(
    "data-active",
    infoEl.classList.contains("opacity-0") ? "false" : "true"
  );

  const blurImage = imgEl.closest(".group");
  const capture = blurImage.querySelector(".gambar");
  if (capture) {
    capture.classList.toggle("blur-xs");
  }
}
