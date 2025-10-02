document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if(email === "admin@salonclick.com" && pass === "1234"){
    alert("Bienvenido Admin!");
    window.location.href = "home.html";
  } else {
    alert("Credenciales inválidas");
  }
});
