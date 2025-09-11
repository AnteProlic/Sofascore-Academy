const submit = document.getElementById("play-button")
submit.disabled = true
const form = document.getElementById("menu-form")
const select = document.getElementById("category-select")
const questionText = document.getElementById("question-text")

let sessionToken = ""

document.getElementById("menu-button").onclick = () => {
    document.getElementById("quiz-container").style.display = "none"
    document.getElementById("menu-container").style.display = "flex"
}

let stageWrap
let stage

// Creates progress tracking points (1-15) for answered questions
for (var i = 0; i < 15; i++) {
    stageWrap = document.createElement("div")
    stageWrap.className = "stage-wrap"
    stage = document.createElement("div")
    stage.id = `stage-${i+1}`
    stage.className = "stage"
    stage.innerHTML = i+1
    stageWrap.appendChild(stage)
    document.getElementById("progress-tracker").appendChild(stageWrap)
    if (i === 4 || i === 9) {
        line = document.createElement("div")
        line.className = "line"
        document.getElementById("progress-tracker").appendChild(line)
    }
}

let category = ""
let questionNumber = 0 // 0-14

// Shuffles array of answeres randomly
function shuffleArray(array) {
    let res = array.length - 1
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))

        var temp = array[i]
        array[i] = array[j]
        array[j] = temp 

        if (i === res) {
            res = j
        } else if (j === res) {
            res = i
        }
    }
    return res
}

// Disables onclick events on answer buttons
function disableAnswers(n) {
    for (var j = 0; j < n; j++) {
        document.getElementById(`answer-${j+1}`).onclick = (e) => {
            e.preventDefault()
        }
    }
}

// Restarts quiz and resets the session using session token
async function restartQuiz() {
    questionNumber = 0
    try {
        url = `https://opentdb.com/api_token.php?command=reset&token=${sessionToken}`
        const response = await fetch(url)
        if (response.ok) {
            console.log("session restarted")
        }
    } catch(error) {
        console.log(error)
    }
    getQuestion()
}

// Get's all categories and places them in select element as options in menu
async function getAllCategories() {
    // Fetching a session token (prevents repeating questions when fetching quiz questions)
    try {
        const response = await fetch("https://opentdb.com/api_token.php?command=request")
        if (response.ok) {
            const res = await response.json()
            sessionToken = res.token
        }
    } catch(error) {
        console.log(error)
    }

    // Fetches all categories from the API and places them as options in select element
    const url = 'https://opentdb.com/api_category.php'
    try {
        const response = await fetch(url)
        if (response.ok) {
            document.getElementById("loading-message").style.display = "block"
            const res = await response.json()
            let categories = res.trivia_categories.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            const select = document.getElementById("category-select")

            let option = document.createElement("option")
            option.value = ""
            option.innerHTML = "Any Category"
            select.appendChild(option)

            categories.forEach(category => {
                option = document.createElement("option")
                option.value = `category=+${category.id}&`
                option.innerHTML = category.name
                select.appendChild(option);
            })
        }

        select.onchange = () => {
            submit.disabled = false
        }

        form.onsubmit = (event) => {
            event.preventDefault()
            category = select.value
            document.getElementById("menu-container").style.display = "none"
            document.getElementById("quiz-container").style.display = "flex"
            getQuestion(questionNumber)
        }

        document.getElementById("menu-container").style.display = "flex"
        await new Promise(resolve => setTimeout(resolve, 1000))
        document.getElementById("loading-message").style.display = "none"
        document.getElementById("menu-container").style.visibility = "visible"

    } catch (error) {
        console.error(error)
    }
}

getAllCategories()

// Fetches a single question from the API
async function getQuestion() {
    // Changes style on progress tracking elements
    if (questionNumber != 0) {
        let stage = document.getElementById(`stage-${questionNumber}`)
        stage.style.color = "white"
    }
    stage = document.getElementById(`stage-${questionNumber+1}`)
    stage.style.color = "#EDBF37"

    // Sets up answer opacity to 0 so it can fade-in when answers load 
    for(var i = 0; i < 4; i++) {
        document.getElementsByClassName("answer")[i].style.opacity = "0"
    }

    // Depending on question number, difficulty increases
    let difficulty
    switch (Math.floor(questionNumber/5)) {
        case 0:
            difficulty = "easy"
            break
        case 1:
            difficulty = "medium"
            break
        case 2:
            difficulty = "hard"
            break
    }
    
    // Fetching question based on selected category and difficulty (using the session token)
    const url = `https://opentdb.com/api.php?amount=1&${category}difficulty=${difficulty}&type=multiple&token=${sessionToken}`

    try {
        document.getElementById("question-container").style.display = "none"
        document.getElementById("loading-message").style.display = "block"
        while(true) {
            const response = await fetch(url)

            if (response.ok) {
                document.getElementById("loading-message").style.display = "none"
                document.getElementById("question-container").style.display = "flex"
                const res = await response.json()

                const result = res.results[0]
                questionText.innerHTML = result.question

                const answers = result.incorrect_answers.slice()
                answers.push(result.correct_answer)

                let correct = shuffleArray(answers)
                console.log(result.correct_answer)
                console.log(correct)
                
                let id
                let current
                
                disableAnswers(answers.length)

                for (let i = 0; i < answers.length; i++) {
                    id = `answer-${i+1}`
                    current = document.getElementById(id)
                    current.innerHTML = answers[i]
                    current.style.cssText = `transition: opacity 2s ease-in; transition-delay: ${2*i}s; `
                    current.style.opacity = "1"
                }

                await new Promise(resolve => setTimeout(resolve, 8000))

                document.getElementById("play-again-button").disabled = false

                // Style changes and setup for new question (or new game) depending on the answer
                for (let i = 0; i < answers.length; i++) {
                    document.getElementById(`answer-${i+1}`).onclick = (e) => {
                        document.getElementById(`answer-${correct+1}`).style.backgroundColor = "#51941E"
                        if (i !== correct) {
                            e.target.style.backgroundColor = "red"
                        } else if (questionNumber === 14 && i === correct) {
                            alert("YOU WIN! Congratulations!\nFeel free to play again or return to menu.")
                        } else {
                            questionNumber++
                            document.getElementById("next-button").disabled = false
                        }
                        disableAnswers(answers.length)
                    }
                }

                break

            } else {
                console.log("hi")
                await new Promise(resolve => setTimeout(resolve, 5000))
                continue
            }
        }
    } catch (error) {
        console.error(error)
    }    
}

// "Play again" button restarts quiz
document.getElementById("play-again-button").onclick = () => {
    stage = document.getElementById(`stage-${questionNumber+1}`)
    stage.style.color = "white"
    restartQuiz()
}

// "Next question" button fetches a new question and loads it
document.getElementById("next-button").onclick = () => {
    for (var i = 0; i < 4; i++) {

    }
    document.getElementById("play-again-button").disabled = true
    document.getElementById("next-button").disabled = true
    getQuestion()
}
