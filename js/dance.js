function dance() {
    // $("#fun-zone").fadeOut();
    $("#fun-zone").children('.letter').remove();
    const phrase = $("#input").val().toLowerCase();
    phrase.split('').forEach(letter => {
        if ("abcdefghijklmnopqrstuvwxyz0123456789!?@$&".includes(letter)) {
            if (letter == "?") { letter = "qm" }
            $("#fun-zone").append($("<img>").addClass("letter").attr("src", "img/" + letter + ".gif"));
        }
    });
    $("#fun-zone").fadeIn();
}