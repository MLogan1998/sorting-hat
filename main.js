
const prinToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}


const showForm = (event) => {
  let domString = '';

  domString += `<h3>Student Name:</h3>
                <form class="form-inline" action="javascript:void(0);" >
                <div class="form-group mb-2">
                <div class="form-group mx-sm-3 mb-2">
                <label for="inord2" class="sr-only">text</label>
                <input type="text" id ="studentName"class="form-control" placeholder="Full Name">
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
  let studentInfo = {};
  studentInfo.house = whichHouseAmI();
  studentInfo.student = document.querySelector('#studentName').value;
  studentInfo.studentID = 'id' + (new Date()).getTime();
  cardArr.push(studentInfo);
  buildHouseCard(cardArr);
  document.getElementById("studentName").value='';
}

let cardArr = [];

const buildHouseCard = (obj) => {
  let domString = '';
  for(let i = 0; i < cardArr.length; i++) {
    
    if(cardArr[i].student == false) {
      domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Enter Your Name</h5>
                    <p class="card-text">Can't assign a house without a name!</p>
                    <button type="submit" id="${obj[i].studentID}" class="btn btn-primary mb-2 expel">Let Me Try Again</button>
                    </div>
                    </div>
                  `
    } else {
              domString += `<div class="card  ${obj[i].house}" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="card-title">${obj[i].student}</h5>
                            <p class="cardp card-text">${obj[i].house}</p>
                            <button type="submit" id="${obj[i].studentID}" class="btn btn-primary mb-2 expel">Expel</button>
                            </div>
                            </div>
                          `
    }
  }
  prinToDom('#cardContainer', domString)
  const buttons = document.querySelectorAll('.expel');
  for(let i = 0; i < buttons.length; i++)buttons[i].addEventListener('click', expelStudent);
}


let voldemortsArmy = [];

const buildEvilEmpire = () => {
  let domString = '';

  for (let i = 0; i < voldemortsArmy.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${voldemortsArmy[i].student}</h5>
                  <p class="card-text">Voldermort's Army</p>
                  </div>
                  </div>
                `
  }
  prinToDom('#vArmy', domString);
}


const expelStudent = (event) => {
let tempCardArr = cardArr;

for(let i = 0; i < cardArr.length; i++) {
  if (event.target.id === cardArr[i].studentID) {
    // console.log('Student ID', cardArr[i].studentID);
    // console.log('Event target ID  +', event.target.id);
    voldemortsArmy.push(cardArr[i]);
    tempCardArr.splice(i,1);
    }
  }
  // console.log('harrys army ',tempCardArr);
  // console.log('voldemorts army ',voldemortsArmy);
  buildHouseCard(tempCardArr);
  buildEvilEmpire();
  console.log('cardArr ', cardArr);
}

const clickEvents = () => {
  document.querySelector('#sort').addEventListener('click', showForm);
}

const init = () => {
  clickEvents()
}

init()
