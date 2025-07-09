document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");
  const clickCounter = document.getElementById("clickCounter");
  const completeMessage = document.getElementById("completeMessage");
  let clickCount = 0;
  const maxClicks = 5;
  whatsappBtn.addEventListener("click", function () {
    if (clickCount >= maxClicks) return;
    clickCount++;
    clickCounter.textContent = `Click count: ${clickCount}/${maxClicks}`;
    const message = encodeURIComponent(
      "Hey Buddy, Join Tech For Girls Community"
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
    if (clickCount === maxClicks) {
      completeMessage.style.display = "block";
    }
  });
  const fileUpload = document.getElementById("fileUpload");
  const fileName = document.getElementById("fileName");
  fileUpload.addEventListener("change", function () {
    if (this.files.length > 0) {
      fileName.textContent = this.files[0].name;
    } else {
      fileName.textContent = "No file selected";
    }
  });
  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    if (!name || !phone || !email || !college) {
      alert("Please fill all required fields");
      return;
    }
    if (fileUpload.files.length === 0) {
      alert("Please upload a document");
      return;
    }
    alert(
      "Registration submitted successfully!\n\n" +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `College/Department: ${college}\n` +
        `Document: ${fileUpload.files[0].name}`
    );
  });
});
