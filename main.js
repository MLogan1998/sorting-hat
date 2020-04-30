
const prinToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}


const showForm = (event) => {
  let domString = '';

  domString += `<form class="form-inline">
                <div class="form-group mb-2">
                <h3>Student</h3>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                <label for="inord2" class="sr-only">text</label>
                <input type="text" id ="studentName"class="form-control" placeholder="Matt Logan">
                </div>
                <button type="submit" id="student" class="btn btn-primary mb-2">Sort</button>
                </form>
               `
  prinToDom('#formContainer', domString)
  document.querySelector('#student').addEventListener('click', buildStudentObj);
}


const whichHouseAmI = () => {
  let randomNumber = Math.floor((Math.random() * 4) + 1);
  // console.log(randomNumber)
  switch (randomNumber) {
    case 1:
      return ("Gryffindor");
      break;
    case 2: 
      return ('Hufflepuff');
      break;
    case 3:
      return ('Slytherin');
      break;
    case 4:
      return ('Ravenclaw');
      break;
  }
}

const buildStudentObj = () => {
  let studentInfo = [];
  studentInfo.house = whichHouseAmI();
  studentInfo.student = document.querySelector('#studentName').value;
  cardArr.push(studentInfo);
  buildHouseCard();
}

let cardArr = [];

const buildHouseCard = () => {
  let domString = '';
  for(let i = 0; i < cardArr.length; i++) {
    
    if(cardArr[i].student == false) {
      domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Enter Your Name</h5>
                    <p class="card-text">Cant assign a house without a name!</p>
                    </div>
                    </div>
                  `
    } else {
              domString += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="card-title">${cardArr[i].student}</h5>
                            <p class="card-text">${cardArr[i].house}</p>
                            <a href="#" class="btn btn-primary">Expel</a>
                            </div>
                            </div>
                          `
   }
}
  prinToDom('#cardContainer', domString)
}

const clickEvents = () => {
  document.querySelector('#sort').addEventListener('click', showForm);
 
}

const init = () => {
  clickEvents()
}

init()
console.log(cardArr);
