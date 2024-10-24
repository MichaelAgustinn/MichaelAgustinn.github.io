// Slider functionality for certificates
const certificates = [
  {
    src: "mycertificate/certificateCW.jpeg",
    title: "Certificate Coding War 2023",
  },
  {
    src: "mycertificate/certificateTVRI.jpeg",
    title: "Certificate TVRI SulSel",
  },
];

let currentCertificateIndex = 0;

function updateCertificate() {
  const certificateImage = document.getElementById("certificateImage");
  const overlayText = document.getElementById("overlayText");

  certificateImage.src = certificates[currentCertificateIndex].src;
  overlayText.textContent = certificates[currentCertificateIndex].title;
}

document
  .getElementById("nextCertificate")
  .addEventListener("click", function () {
    currentCertificateIndex =
      (currentCertificateIndex + 1) % certificates.length;
    updateCertificate();
  });

document
  .getElementById("prevCertificate")
  .addEventListener("click", function () {
    currentCertificateIndex =
      (currentCertificateIndex - 1 + certificates.length) % certificates.length;
    updateCertificate();
  });

// Initialize the first certificate
updateCertificate();
