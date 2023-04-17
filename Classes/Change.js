export class Change {
    changes() {
        let display_class = document.getElementsByClassName("operator");
        let hidden_class = document.getElementsByClassName("operator1");
        if (hidden_class[0].style.display === "inline-block") {
            for (let i = 0; i < 6; i++) {
                display_class[i].style.display = "inline-block";
            }
            for (let i = 0; i < 6; i++) {
                hidden_class[i].style.display = "none";
            }
        }
        else {
            for (let i = 0; i < 6; i++) {
                hidden_class[i].style.display = "inline-block";
            }
            for (let i = 0; i < 6; i++) {
                display_class[i].style.display = "none";
            }
        }
    }
}
