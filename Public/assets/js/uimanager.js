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

function getRadio(children) {
    for (var child in children) {

        if (children[child].checked) {
            if (children[child].value == "other") {
                othertext = form.getElementsByTagName("textarea")[0];
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

function getCheck(children) {
    let arr = []
    for (var child in children) {

        if (children[child].checked) {
            if (children[child].value == "other") {
                othertext = form.getElementsByTagName("textarea")[0];
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
    var children = form.getElementsByClassName("form-check-input");

    switch (children[0].type) {
        case "radio":
            return getRadio(children)
        case "checkbox":
            return getCheck(children)
    }

    return null
}

window.onload = function() {
    var xchildren = document.getElementsByClassName("form-check-input");

    for (var child in xchildren) {
        xchildren[child].onclick = function() {
            uncheck(this.parentNode.parentNode, this)
        }
    }

}