let classContainer
let doorSound

function preload() {
  doorSound = loadSound('./assets/doorSound.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  //let door = new Door(calendarContainer, "12", './assets/jul.jpg', doorSound)

  for( door of dataStructure ){
    new Door(calendarContainer, door.day, door.content, doorSound)
  }

  let test = new VideoDoor(calendarContainer, '5', doorSound, "https://www.youtube.com/embed/ZFt83Q3GOok?si=Crtk8u15Y7dA_1Us")
}