// ---------- เปิด/ปิดเมนูบนมือถือ ----------

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");

      // อัปเดต aria-expanded เพื่อการเข้าถึง (accessibility)
      menuToggle.setAttribute("aria-expanded", isOpen);

      // เปลี่ยนไอคอนปุ่ม
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  // ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์ (สำหรับหน้าจอมือถือ)
  const navLinks = document.querySelectorAll(".site-nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", false);
        menuToggle.textContent = "☰";
      }
    });
  });

  // ---------- ตรวจสอบฟอร์มติดต่อก่อนส่ง (ถ้ามีในหน้านั้น) ----------

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let isValid = true;

      if (name.value.trim() === "") {
        isValid = false;
      }

      if (email.value.trim() === "") {
        isValid = false;
      }

      if (message.value.trim() === "") {
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
        alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนส่งข้อความ");
      }
    });
  }

});