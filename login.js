import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// 🔥 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJOgYLZjMd0XdSfScQiygpK2PKVSzNWVo",
  authDomain: "ngoconnect-66a95.firebaseapp.com",
  projectId: "ngoconnect-66a95",
  appId: "1:705852263502:web:d1eb59c846ec0315edc71f"
};

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Login function
window.loginUser = async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Set userName to localStorage
    localStorage.setItem("volunteezyUserName", user.displayName || email); // Using email if displayName is not available

    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to home/dashboard
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};