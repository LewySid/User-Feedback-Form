// Select the div where submitted feedback will be displayed
document.addEventListener("DOMContentLoaded", function () {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const feedback = document.getElementById("feedback");
    const form = document.getElementById("feedbackForm");
    const feedbackDisplay = document.getElementById("feedback-display");

// Character counter
    const counter = document.createElement("p");
    counter.innerText = "Characters: 0";
    feedback.parentElement.appendChild(counter);

    feedback.addEventListener("input", function () {
        counter.innerText = "Characters: " + feedback.value.length;
    });

// Tooltip message
    const tooltip = document.createElement("p");
    tooltip.style.position = "absolute";
    tooltip.style.background = "black";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px 8px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.fontSize = "12px";
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);

// Move tooltip with cursor
    form.addEventListener("mousemove", function (event) {
        tooltip.style.left = event.pageX + 10 + "px";
        tooltip.style.top = event.pageY + 10 + "px";
    });

// Mouseover
    form.addEventListener("mouseover", function (event) {
        if (event.target.id === "name") {
            tooltip.innerText = "Enter your full name";
            tooltip.style.display = "block";
        }

        if (event.target.id === "email") {
            tooltip.innerText = "Enter your email";
            tooltip.style.display = "block";
        }

        if (event.target.id === "feedback") {
            tooltip.innerText = "Write your feedback";
            tooltip.style.display = "block";
        }
    });

// Mouseout
    form.addEventListener("mouseout", function (event) {
        if (
            event.target.id === "name" ||
            event.target.id === "email" ||
            event.target.id === "feedback"
        ){
            tooltip.style.display = "none";
        }
    });

// Display submitted feedback
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        feedbackDisplay.innerHTML =`<p><strong>Name:</strong> ${name.value}</p>
                                    <p><strong>Email:</strong> ${email.value}</p>
                                    <p><strong>Feedback:</strong> ${feedback.value}</p>`;
        form.reset();
        counter.innerText = "Characters: 0";
    });

// Prevents background clicks
    form.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});