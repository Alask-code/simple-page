function hideDevelopmentMessage() {
    var message = document.querySelector(".development")
    setTimeout(() => {
        message.style.display = " none"
    }, 3000);
}
function init() {
    const appControl = {
        "Name": "WebBoard!",
        "author": "Alask-Code",
        "version": "0.1",
        "versionName": "Very early development."
    }

}
document.addEventListener("DOMContentLoaded", () => {
    hideDevelopmentMessage()
})