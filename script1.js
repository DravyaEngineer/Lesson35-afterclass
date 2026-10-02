window.onload = function () {
    var count = 0;
    var appendCount = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    // Check if elements exist to prevent silent failures
    if (!appendCount || !buttonStart || !buttonStop || !buttonReset) {
        console.error("Missing matching HTML elements! Check your element IDs.");
        return;
    }

    // Increase (+)
    buttonStart.onclick = function () {
        count++;
        appendCount.innerHTML = count;
    }

    // Decrease (-)
    buttonStop.onclick = function () {
        count--;
        appendCount.innerHTML = count;
    }

    // Reset (0)
    buttonReset.onclick = function () {
        count = 0;
        appendCount.innerHTML = count;
    }
}