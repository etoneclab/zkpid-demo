window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
    console.log('Event:', event);
}