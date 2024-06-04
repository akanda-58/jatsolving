
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the form data
      const email = document.querySelector('input[name="email"]').value;
      const password = document.querySelector('input[name="password"]').value;
      const keepSignedIn = document.querySelector('input[name="keep_signed_in"]').checked;

      // Create a JSON object
      const formData = {
        email: email,
        password: password,
        keep_signed_in: keepSignedIn
      };

      try {
        // Perform the POST request
        const response = await fetch("https://api.jat.thibokuijpers.be/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        // Handle the response
        if (response.ok) {
          const responseData = await response.json();
          console.log("Success:", responseData);
          // You can redirect the user or show a success message here
        } else {
          console.error("Error:", response.status, response.statusText);
          // Handle the error response here
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error here
      }
    });
  });

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password-input");
    const passwordToggleIcon = document.querySelector(".password-toggle-icon i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggleIcon.classList.remove("fa-eye");
      passwordToggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      passwordToggleIcon.classList.remove("fa-eye-slash");
      passwordToggleIcon.classList.add("fa-eye");
    }
  }


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input");
    var icon = document.querySelector(".password-toggle-icon i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}