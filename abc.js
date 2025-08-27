// portfolio Page //
// Contact form validation + message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "✅ Your message has been sent successfully!";
      formMessage.style.color = "lightgreen";
      this.reset();
    }
  });
  
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
      if (!storedUser) {
        // No user → go back to login
        window.location.href = "login.html";
      } else {
        document.getElementById("username").textContent = storedUser.name;
      }
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
            });
  