document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    e.stopPropagation();
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  const main = document.querySelector("main");
  main.style.opacity = 0;
  setTimeout(() => {
    main.style.transition = "opacity 1s";
    main.style.opacity = 1;
  }, 100);

  // Slider functionality
  const images = [
    { src: "myproject/project1.png", desc: "Ini Adalah Project Webdesa Saya." },
    {
      src: "myproject/project2.png",
      desc: "Ini Adalah Project Membuat Tampilan UI Android Di Figma.",
    },
    {
      src: "myproject/project3.png",
      desc: "Project Mengembangkan Aplikasi Sahabat Ternak.",
    },
    {
      src: "myproject/project4.png",
      desc: "Project Membuat Tampilan UI Untuk Aplikasi Baca Komik.",
    },
  ];

  let currentIndex = 0;

  const projectImage = document.getElementById("project-image");
  const descriptionElements = document.querySelectorAll(".description");

  function updateSlide() {
    projectImage.src = images[currentIndex].src;
    descriptionElements.forEach((desc, index) => {
      desc.classList.toggle("active", index === currentIndex);
    });
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  });

  // Initialize the first slide
  updateSlide();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Reset pesan kesalahan
    errorMessage.textContent = "";

    // Validasi
    if (!name || !email || !message) {
      errorMessage.textContent = "Semua field harus diisi!";
      return;
    }

    // Jika semua validasi berhasil
    alert("Form berhasil dikirim!");
    // Di sini Anda dapat menambahkan logika untuk mengirim data ke server jika diperlukan
  });
