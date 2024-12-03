let randomRed = 0;
let randomGreen = 0;
let randomBlue = 0;

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.createCard();
  }

  createCard() {
    
    randomRed = random(0, 255);
    randomGreen = random(0, 255);
    randomBlue = random(0, 255);

    console.log(randomRed, randomGreen, randomBlue);

    
    this.cardDiv = createDiv();
    this.cardDiv.style(`
      border: 2px solid #333;
      padding: 1rem;
      margin: 1rem;
      border-radius: 8px;
      width: 200px;
      text-align: center;
      font-family: Arial, sans-serif;
      background-color: rgb(${randomRed}, ${randomGreen}, ${randomBlue});
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      color: white;
    `);

    const yearsToRetirement = this.calculateYearsToRetirement();

   
    this.cardDiv.html(`
      <h3>${this.name}</h3>
      <p>Age: ${this.age}</p>
      <p>City: ${this.city}</p>
      <p>Years to Retirement: ${yearsToRetirement}</p>
    `);

    
    select('#container').child(this.cardDiv);
  }

  calculateYearsToRetirement() {
    const retirementAge = 67;
    const yearsToRetirement = retirementAge - this.age;
    return yearsToRetirement > 0 ? yearsToRetirement : 0;
  }
}

function setup() {
  noCanvas(); 


  let persons = [
    new Person("Alice", 30, "Copenhagen"),
    new Person("Bob", 25, "Aarhus"),
    new Person("Charlie", 35, "Odense"),
    new Person("Diana", 70, "Aalborg"),
    new Person("Eve", 40, "Esbjerg")
  ];
}
