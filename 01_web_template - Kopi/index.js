let currentPage = 1
let pages //array med alle elementer med class = page 

let amount = 6;
let category = 12;
let difficulty = 'medium';
let type = 'boolean';



function setup(){
    console.log('P5.js er loaded')
    pages = selectAll('.page')
    //nu kan man se at pages er blevet til en liste med alle class = page ting
    console.log(pages.length)
    noCanvas() // p5.js setup without canvas
    fetchQuizQuestion()
}
async function fetchQuizQuestion() {
   const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
   
   console.log('Fetching quiz question from:', apiUrl)
   
   fetch(apiUrl)
    .then(response => {
      console.log('Response received:', response)
      return response.json()
      
    })
    .then(data => {
      console.log('Data received:', data)
      currentQuestion = data.results[0]
      correctAnswer = currentQuestion.correct_answer
      displayQuestion()
    })
    .catch(error => console.error('Error fetching quiz question:', error))
}

displayQuestion = () => {
    select('#question').html(currentQuestion.question)
    select('#answer').html(correctAnswer)
    select('#category').html(currentQuestion.category)
    select('#difficulty').html(currentQuestion.difficulty)
    select('#type').html(currentQuestion.type)
}




function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}




 
