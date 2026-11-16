
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

let userName = "";

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const userMsg = document.createElement("div");
    userMsg.className = "msg user-msg";
    userMsg.textContent = "You: " + text;

    messages.appendChild(userMsg);

    const reply = document.createElement("div");
    reply.className = "msg support-msg";

    if (userName === "") {

        userName = text;

        reply.textContent =
            "Support: Hello, " + userName +
            "! Nice to meet you. How can I help you today?";

        input.placeholder = "Type your message...";

    } else {

        reply.textContent =
            "Support: Thank you, " + userName +
            "! We will assist you shortly.";
    }

    messages.appendChild(reply);

    messages.scrollTop = messages.scrollHeight;

    input.value = "";

    input.focus();

});
