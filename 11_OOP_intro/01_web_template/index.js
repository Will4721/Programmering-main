function setup(){
    //variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin constructor
let styles = {
    background: 'black',
    shape:'circle'
}

let  c = new Clock(select('#clock'), styles)
    c.start()
   
}

