let sign = prompt("Welcome! Are you prepared for battle? YES or NO")

if (sign.toLocaleLowerCase() == "yes") {
    let confirmation = confirm("are you sure?\nEither OK or Cancel.");
    if (confirmation == true) {
        alert("READY")
    }
    else {
        alert("TOO BAD, HERE WE GO")
    }

} else if (sign.toLocaleLowerCase() == "no") {
    alert("TOO BAD, SO SAD")
} else {
    alert("YES YOU ARE")
}
