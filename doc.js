let isDarkMode = false; // نبدأ بأن الخلفية بيضاء

function light() {
    if (isDarkMode) {
        document.body.style.backgroundColor = "white";
        isDarkMode = false; // نعكس الحالة
    } else {
        document.body.style.backgroundColor = "black";
        isDarkMode = true; // نعكس الحالة
    }
}