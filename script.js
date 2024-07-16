function toggleText(contentId, showBtnId, hideBtnId) {
    var content = document.getElementById(contentId);
    var showBtn = document.getElementById(showBtnId);
    var hideBtn = document.getElementById(hideBtnId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Set to "block" for block-level elements
        showBtn.style.display = "none";
        hideBtn.style.display = "inline";
    } else {
        content.style.display = "none";
        showBtn.style.display = "inline";
        hideBtn.style.display = "none";
    }
}
