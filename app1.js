

const tableBody = document.getElementById('table-body')

let flights = [

  {
    time:"08:11",
    destination:'CHENNAI',
    flight:"CH 211",
    gate:"C 07",
    remarks:"ON TIME"
},
{
    time:"12:00",
    destination:'KERALA',
    flight:"B 501",
    gate:"B 18",
    remarks:"DELAYED"
},

{
    time:"13:45",
    destination:'MUMBAI',
    flight:"MI 100",
    gate:"M 38",
    remarks:"DELAYED"
},
{
    time:"15:45",
    destination:'KOLKATA',
    flight:"KKR 00",
    gate:"K 38",
    remarks:"ON TIME"
},
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")
    const tableIcon = document.createElement("td")
    tableIcon.textContent = "✈"
    tableRow.append(tableIcon)

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div")
        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)


      }
      tableRow.append(tableCell)
    }
    tableBody.append(tableRow)
  }
}
populateTable() 


// the below function is used to generate Random letters

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}
// the below function is used to generate Random numbers

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789"
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
}
// the below function is used to generate Random Time

function generateTime() {
  let displayHour = hour
    //the logic in below if class is we have mentioned the hour as 15 if 24 is greater then 15  we are giving increment using __  

  if (hour < 24) {
    hour++
  }
     //the logic in below if class is if the hour is greater than 24 change the hour as 1 because there is only 24 hours

  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = "0" + hour
  }
  return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
}
// for RANDOM destination:destination[Math.floor(Math.random() * destination.length)]
// this code is used to generate the random destination which is mentioned in the above array   

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = ""
  populateTable()
}


setInterval(shuffleUp, 5000)

