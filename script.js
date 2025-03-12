
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
    
