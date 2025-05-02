function sendContactDetails(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("comment").value
    };

    emailjs.send("service_t1oae05", "template_whzc56s", templateParams)
        .then(() => {
            alert("Message sent successfully!.");
        })
        .catch(() => {
            alert("Failed to send message. Please try again later.");
        });
}