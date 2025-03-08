/*document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let message = document.getElementById("message").value;
    let statusMessage = document.getElementById("formStatus");

    console.log("Sending email...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("City:", city);
    console.log("Country:", country);
    console.log("Message:", message);

    if (!name || !email || !phone || !city || !country || !message) {
        statusMessage.style.color = "red";
        statusMessage.innerText = "Please fill all fields before submitting.";
        return;
    }

    // Sending email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dr.eladeeps@gmail.com",
        Password: "Doctor@123", // Replace with correct SMTP password
        Port: "2525", // Try 587 if 2525 doesn't work
        To: "edupromentors@outlook.com",
        From: "dr.eladeeps@gmail.com",
        Subject: "New Contact Form Submission",
        Body: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    }).then(() => {
        console.log("Email sent successfully!");
        statusMessage.style.color = "Royalblue";
        statusMessage.innerText = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }).catch((error) => {
        console.error("Email sending error:", error);
        statusMessage.style.color = "red";
        statusMessage.innerText = "Failed to send message. Check console.";
    });
});

*/

// Import Firebase services
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ikq8rwZvybQCut5MrtPI2WQzUGmdSj8",
  authDomain: "edupromentors.firebaseapp.com",
  projectId: "edupromentors",
  storageBucket: "edupromentors.appspot.com",
  messagingSenderId: "378498356754",
  appId: "1:378498356754:web:99af23fdcb3e438c06eacb",
  measurementId: "G-8Q93K7NZ1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Function to add a user to Firestore
async function addUser(name, email) {
  try {
    const docRef = await addDoc(collection(db, "users"), { name, email });
    console.log("User added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Function to sign up a user
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}

// Function to sign in a user
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
}

// Export Firebase services
export { app, db, auth, analytics, addUser, signUp, signIn };



document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let form = this;

    // Send the form data using Fetch API
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            swal("Success!", "Your message has been sent successfully!", "success");
            form.reset(); // Clear the form fields
        } else {
            swal("Error!", "Something went wrong. Please try again.", "error");
        }
    })
    .catch(error => {
        swal("Error!", "Could not send your message. Try again later.", "error");
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".slider");
        let index = 0;
        const totalSlides = document.querySelectorAll(".slider img").length;
    
        function changeSlide() {
            index = (index + 1) % totalSlides;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    
        setInterval(changeSlide, 3000); // Move every 3 seconds
    });
    