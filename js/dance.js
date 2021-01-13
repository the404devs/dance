function dance() {
    // $("#fun-zone").fadeOut();
    $("#fun-zone").children('.letter').remove();
    const phrase = $("#input").val().toLowerCase();
    if (phrase.trim() == "") {
        alert("Please put some actual text as input!");
        $("#fun-zone").fadeOut();
        return;
    }
    phrase.split('').forEach(letter => {
        if ("abcdefghijklmnopqrstuvwxyz0123456789!?@$&".includes(letter)) {
            if (letter == "?") { letter = "qm" }
            $("#fun-zone").append($("<img>").addClass("letter").attr("src", "img/" + letter + ".gif"));
        }
    });
    $("#fun-zone").fadeIn();
}