import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJOgYLZjMd0XdSfScQiygpK2PKVSzNWVo",
  authDomain: "ngoconnect-66a95.firebaseapp.com",
  projectId: "ngoconnect-66a95",
  appId: "1:705852263502:web:d1eb59c846ec0315edc71f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target["confirm-password"].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
});