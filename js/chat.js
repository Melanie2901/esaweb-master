
function openForm() {
    document.getElementById("myForm").style.display = "block";
    setTimeout(function () {
        document.getElementById("text").focus();
    }, 100);
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function send() {
    var text = document.getElementById("text").value;
    if (text !== "") {
        openInNewTab(`https://api.whatsapp.com/send?phone=1-829-575-5172&text=${text}`);
        cleanCart();
    }
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function cleanCart() {
    document.getElementById("text").value = "";
}


