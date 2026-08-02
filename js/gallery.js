// ---------------------------------------------------------
// Gallery lightbox
// Every element with [data-lightbox-trigger] opens the single
// hidden overlay (#lightbox) with its own image + caption.
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return; // this page has no gallery, nothing to do

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const triggers = document.querySelectorAll("[data-lightbox-trigger]");

  function openLightbox(fullSrc, caption) {
    lightboxImg.src = fullSrc;
    lightboxImg.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("is-open");
    closeBtn.focus();
    document.body.style.overflow = "hidden"; // stop background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  triggers.forEach(function (el) {
    el.addEventListener("click", function () {
      openLightbox(el.dataset.full, el.dataset.caption);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  // click outside the image (on the dark overlay) also closes it
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Escape key closes it
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
});
