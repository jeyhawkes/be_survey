function SetAnswers(answersJson) {
    const json = answersJson
    const questions = JSON.parse(json)

    for (question in questions) {
        if (questions[question]) {
            answer = Questions[question].GetAnswer(questions[question])
            row = document.getElementById(question + "_row")
            row.className += " active-table-row"
            row.cells[0].innerText = Questions[question]["text"]

            a = Questions[question].GetAnswer(answer)
            row.cells[1].innerText = answer.id + " - " + answer.text
        }
    }
}

if (window.location.pathname.includes("Results")) {
    window.onload = function() {


        function loadResults(json) {
            const params = new URLSearchParams(window.location.search);
            side = params.get("side")

            convert(json, side)

            answers = params.get("answers")
            SetAnswers(answers)
        }

        fetch('./assets/js/qestions.json')
            .then((response) => response.json())
            .then((json) => loadResults(json));
    }
}