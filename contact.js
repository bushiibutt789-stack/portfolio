// ---------------------------------------------------------
// Contact form submission
// Sends the form data to Formspree using fetch() so the page
// doesn't reload, then shows a success or error message.
// Formspree does the actual "backend" work of emailing you —
// this script just talks to it.
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    status.className = "form-status"; // reset classes
    status.textContent = "Sending…";
    status.classList.add("is-visible");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Thanks — your message is on its way.";
        status.classList.add("form-status--success");
        form.reset();
      } else {
        status.textContent =
          "Something went wrong sending that. Please email me directly instead.";
        status.classList.add("form-status--error");
      }
    } catch (err) {
      status.textContent =
          "Something went wrong sending that. Please email me directly instead.";
      status.classList.add("form-status--error");
    }
  });
});
