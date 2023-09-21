function next(ele) {
    let p = ele.parentNode.parentNode
    let value = getValue(p)
    if (value == null) {
        return false
    } else if (typeof value == "object") {
        value = value[0]
    }

    let qx = Questions[ele.value]
    let x = document.getElementById(ele.value)

    let next_q = qx["answers"][value]["next"]
    show(document.getElementById(next_q))

    hide(x)
}

function validAbout() {
    valid = true
    var xchildren = document.getElementById("form_about").getElementsByClassName("form-control");
    for (i = 0; i < xchildren.length; i++) {
        if (xchildren[i].getAttribute("optional")) {
            continue
        }
        if (!xchildren[i].value) {
            valid = false
        }
    }

    return valid
}

function GoToQuestions(about) {
    if (validAbout()) {
        hide(document.getElementById("q_about"))
        show(document.getElementById("q_01"))
    }
}


var side = getSide()
if (side) {
    fetch('./../private/qestions.json')
        .then((response) => response.json())
        .then((json) => convert(json, side));
} else {
    let bso = document.getElementById("bso_01_next")

    if (bso) {
        bso.onclick = function() {
            ra = document.getElementById("a_radio_01")

            rb = document.getElementById("b_radio_01")

            rc = document.getElementById("c_radio_01")

            if (ra.checked) {
                window.location.replace("./Buyside");
            }

            if (rb.checked) {
                window.location.replace("./Sellside");
            }

            if (rc.checked) {
                window.location.replace("./Other");
            }
        }
    }
}

function getSide() {
    if (window.location.pathname.includes("buyside")) return "buyside";
    if (window.location.pathname.includes("sellside")) return "sellside";
    if (window.location.pathname.includes("other")) return "otherside";
    return null
}

function submitForms() {
    about = formAbout()
    answers = formAnswers()
    feedback = formFeedback()


    document.getElementById("form_main_about").value = about
    document.getElementById("form_main_answers").value = answers
    document.getElementById("form_main_feedback").value = feedback
    document.getElementById("form_main").submit()
}

success = document.getElementById("success_submit")
if (success) {
    success.onclick = function() {
        window.location.replace("./FurtherReading.html");
    }
}