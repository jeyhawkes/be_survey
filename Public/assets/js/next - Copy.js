function Answer(id, next, last) {
    this.id = id
    this.next = next
    this.last = last
    return this
}

function Question(id, answers) {
    this.id = id
    this.answers = answers

    return this
}

let Questions = {
    "q_01": new Question("q_01", {
        "a": new Answer("a", "q_04", null),
        "b": new Answer("b", "q_02", null)
    }),
    "q_02": new Question("q_02", {
        "a": new Answer("a", "q_08", "q_01"),
        "b": new Answer("b", "q_08", "q_01"),
        "c": new Answer("a", "q_08", "q_01"),
        "d": new Answer("b", "q_08", "q_01"),
        "other": new Answer("a", "q_08", "q_01")
    }),
    "q_04": new Question("q_04", {
        "a": new Answer("a", "q_08", "q_01"),
        "b": new Answer("b", "q_08", "q_01"),
        "c": new Answer("a", "q_08", "q_01"),
        "d": new Answer("b", "q_08", "q_01"),
        "other": new Answer("a", "q_08", "q_01")
    }),
}


function show(form) {
    form.className += " active"
}


function hide(form) {
    form.className = form.className.replace(" active", "")
}

function uncheck(form, checkbox) {
    var children = form.getElementsByClassName("form-check-input");

    for (var child in children) {

        if (children[child] != checkbox)
            children[child].checked = false;
    }
}

function getcheck(form) {
    var children = form.getElementsByClassName("form-check-input");

    for (var child in children) {

        if (children[child].checked)
            return children[child].value;
    }

    return null
}

function next(ele, q) {

    value = getcheck(ele.parentNode.parentNode)
    if (value == null) {
        return false
    }

    qx = Questions[q]
    x = document.getElementById(q)

    next = qx["answers"][value]["next"]
    show(document.getElementById(next))


    hide(x)

}

function next02(ele, q) {
    a = document.getElementById("a_radio_02")
    b = document.getElementById("b_radio_02")
    c = document.getElementById("c_radio_02")
    d = document.getElementById("d_radio_02")
    other = document.getElementById("other_radio_02")

    check = a.checked || b.checked || c.checked || d.checked || other.checked

    if (check) {
        document.getElementById("q_08").className += " active"
    }

    hide(x)
}


function next04(ele, q) {
    if (!hascheck(ele.parentNode.parentNode)) {
        return false
    }

    document.getElementById("q_08").className += " active"
}



document.getElementById("a_radio_01").onclick = function() {
    uncheck(this.parentNode.parentNode, this)
}

document.getElementById("b_radio_01").onclick = function() {
    uncheck(this.parentNode.parentNode, this)
}

/*
document.getElementById("a_radio_02").onclick = 
document.getElementById("b_radio_02").onclick = 
document.getElementById("c_radio_02").onclick =
document.getElementById("d_radio_02").onclick =
document.getElementById("e_radio_02").onclick = function(){
	document.getElementById("q_02").className += " active"
}


document.getElementById("a_radio_04").onclick = 
document.getElementById("b_radio_04").onclick = 
document.getElementById("c_radio_04").onclick =
document.getElementById("d_radio_04").onclick =
document.getElementById("e_radio_04").onclick = 
document.getElementById("f_radio_04").onclick = function(){
	document.getElementById("q_08").className += " active"
}
*/

function submitForms() {
    // document.getElementById("form_01").submit()
    // document.getElementById("form_02").submit()
    //document.getElementById("form_03").submit()
    //document.getElementById("form_04").submit()
    //document.getElementById("form_05").submit()
    //document.getElementById("form_06").submit()
    //document.getElementById("form_07").submit()
    // document.getElementById("form_08").submit()

    document.getElementById("form_main").submit()

}