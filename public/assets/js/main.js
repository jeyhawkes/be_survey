function show(form) {
    form.className += " active"
}

function hide(form) {
    form.className = form.className.replace(" active", "")
}

function uncheck(form, checkbox) {
    var children = form.getElementsByClassName("form-check-input");

    if (children[0].type != "radio") {
        return
    }

    for (var child in children) {

        if (children[child] != checkbox)
            children[child].checked = false;
    }
}

function showDropdownChoice() {


    if (children[0].type != "radio") {
        return
    }

    for (var child in children) {

        if (children[child] != checkbox)
            children[child].checked = false;
    }
}

function getRadio(children, othertext) {
    for (var child in children) {

        if (children[child].checked) {
            if (children[child].value == "other") {
                if (othertext.value) {
                    return ["other"]
                }
                // textbox must have value
                break
            }
            return [children[child].value];
        }
    }

    return null
}

function getCheck(children, othertext) {
    let arr = []
    for (var child in children) {

        if (children[child].checked) {
            if (children[child].value == "other") {
                if (othertext.value) {
                    arr.push("other")
                    continue
                }
                // textbox must have value
                break
            }
            arr.push(children[child].value);
        }
    }

    return (arr.length != 0) ? arr : null
}

function getValue(form) {
    let children = form.getElementsByClassName("form-check-input");
    let othertext = form.getElementsByTagName("textarea")[0];

    switch (children[0].type) {
        case "radio":
            return getRadio(children, othertext)
        case "checkbox":
            return getCheck(children, othertext)
    }

    return null
}


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


window.onload = function() {
    var xchildren = document.getElementsByClassName("form-check-input");

    for (var child in xchildren) {
        xchildren[child].onclick = function() {
            uncheck(this.parentNode.parentNode, this)
        }
    }


    // 
    var side = getSide()
    if (side) {

        fetch(questions_path)
            .then((response) => response.json())
            .then((json) => convert(json, side));

        document.getElementById("q_01_next").onclick =
            document.getElementById("q_02_next").onclick =
            document.getElementById("q_03_next").onclick =
            document.getElementById("q_04_next").onclick =
            document.getElementById("q_05_next").onclick =
            document.getElementById("q_06_next").onclick =
            document.getElementById("q_07_next").onclick = function() {
                next(this)
            }
    }

}


function formAbout() {
    let data = {}

    data["side"] = getSide()

    var xchildren = document.getElementById("form_about").getElementsByClassName("form-control");
    for (i = 0; i < xchildren.length; i++) {
        q = xchildren[i].name
        v = xchildren[i].value
        data[q] = v
    }

    return JSON.stringify(data)
}

function getOtherText(q) {
    othertext = q.getElementsByTagName("textarea")[0];
    return othertext.value;
}

function formAnswers() {
    let data = {}
    for (i = 1; i < 8; i++) {
        let q = "q_0" + i
        let v = getValue(document.getElementById(q))

        if (v == null) {
            data[q] = ""
            continue
        }

        let v_out = "";
        for (let i = 0; i < v.length; i++) {
            if (v_out.length > 0) v_out += ";"
            if (v[i] == "other") {
                v_out += "other:" + getOtherText(document.getElementById(q));
                continue
            }
            v_out += v[i]
        }
        data[q] = v_out
    }

    return JSON.stringify(data)
}

function formFeedback() {
    let data = {}

    var x = document.getElementById("form4Example3")
    data["feedback"] = x.value

    return JSON.stringify(data)
}

function getSide() {
    if (window.location.pathname.includes("buyside")) return "Buyside";
    if (window.location.pathname.includes("sellside")) return "Sellside";
    if (window.location.pathname.includes("other")) return "Otherside";

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