document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const toggleDarkMode = document.getElementById("toggleDarkMode");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Harap lengkapi semua kolom sebelum mengirim.");
        return;
      }

      // Tampilkan notifikasi lembut
      showToast(`Terima kasih, ${name}! Pesan kamu telah dikirim.`);

      form.reset();
    });
  }

  // Toggle dark mode
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Simpan preferensi ke localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Terapkan tema tersimpan saat load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Fungsi toast sederhana
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "#323232";
  toast.style.color = "#fff";
  toast.style.padding = "1rem 1.5rem";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  toast.style.zIndex = "1000";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
