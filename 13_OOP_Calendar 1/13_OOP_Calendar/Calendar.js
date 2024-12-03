console.log('OOP is here')

class Door {
  //kaldes ved oprettelse af nye objekter 
  constructor(containerDiv, day, content, doorSound) {
    this.parentDiv = containerDiv
    this.day = day
    this.content = content 
    this.doorSound = doorSound
    this.createDoor()
  }
    
  //intern funktion - kaldes internt med this.function()
  createDoor(){
    this.doorDiv = createDiv(this.day)
    this.doorDiv.style(`
      height:12rem;
      width:12rem;
      background:crimson;
      color:white;
      font-size:3rem;
      display:grid;
      place-items:center;
      cursor:pointer;
      transition: all .7s ease-in-out;  
      position:relative;

    `)
    this.parentDiv.child(this.doorDiv)
    this.doorDiv.mousePressed( () => this.openDoor() )
  }

  openDoor(){
    this.doorDiv.style(`
      background: url(${this.content});
      color:transparent;
      background-size:cover;
      pointer-events:none;  
    `)
    this.doorSound.play()
  }

}

class VideoDoor extends Door {
  constructor(containerDiv, day, sound, videoURL){
    console.log(videoURL)
    super(containerDiv, day, sound, null)
    this.videoURL = videoURL
    this.videoURL = this.videoURL + '?autoplay=1&mute=1&rel=1'
  }

  openDoor(){
    this.doorDiv.style(`
        background:none;
        
      `)
      this.addVideoBackground()
  }
  addVideoBackground(){
    let video = createElement('iframe')
    video.attribute('src', this.videoURL)
    video.style(`
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
    `) 
    this.doorDiv.child(video)
  }
}

