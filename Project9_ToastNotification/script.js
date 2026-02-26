// const buttons = document.querySelectorAll("button");
const toastContainer = document.querySelector("#toastBox");
let successMsg = "Sucessfully Submitteed.";
let errorMsg = "Please fix the error!";
let invalidMsg = "Invalid Output, check again.";

function showToast(msg) {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    // Decide type based on the message text
    if (msg === successMsg) {
        notif.classList.add("toast-success");
    } else if (msg === errorMsg) {
        notif.classList.add("toast-error");
    } else if (msg === invalidMsg) {
        notif.classList.add("toast-invalid");
    }

    // Add message text and timer bar
    notif.innerHTML = `
        <span class="toast-text">${msg}</span>
        <div class="toast-timer"></div>
    `;

    toastContainer.appendChild(notif);

    // Remove after 3 seconds (matches CSS timer animation)
    setTimeout(() => {
        notif.remove();
    }, 3000);
}
