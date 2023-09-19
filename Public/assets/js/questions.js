var Questions = []

function Answer(id, text, next, last) {
    this.id = id
    this.text = text
    this.next = next
    this.last = last
}

function Question(id, text, answers) {
    this.id = id
    this.text = text
    this.answers = answers
}

Question.prototype.GetAnswer = function(answer) {
    return this.answers[answer]
}

function convert(jsonData, jsonKey) {
    questionlist = jsonData[jsonKey]

    for (question in questionlist) {
        answerlist = questionlist[question]["answers"]

        console.log(question)
        let answers = {}
        let q_next = questionlist[question]["next"] || null
        let q_last = questionlist[question]["last"] || null
        let q_text = questionlist[question]["text"]
        for (answer in answerlist) {
            let a_next = answerlist[answer]["next"] || null
            let a_last = answerlist[answer]["last"] || null
            let a_text = answerlist[answer]["text"]
            if (!a_next) a_next = q_next
            if (!a_last) a_last = q_last
            answers[answer] = new Answer(answer, a_text, a_next, a_last)
        }
        Questions[question] = new Question(question, q_text, answers)
    }
    console.log(Questions)
}