const table = document.querySelector("table")
const dateInput = document.querySelector(".date-input")
const descriptionInput = document.querySelector(".description-input")
const amountInput = document.querySelector(".amount-input")
const button = document.querySelector("button")
const total = document.querySelector(".total")

button.addEventListener("click", function(){
    let date = dateInput.value
    let description = descriptionInput.value
    let amount = amountInput.value
    const tableRow = document.createElement("tr")
    const dateData = document.createElement("td")
    const descriptionData = document.createElement("td")
    const amountData = document.createElement("td")

    if(date === "" || description === "" || amount === ""){
        return
    }else{
    
    dateData.innerHTML= `${date}`
    descriptionData.innerHTML= `${description}`
    amountData.innerHTML= `${amount}`
    amountData.classList.add("amount")
    
    tableRow.append(dateData)
    tableRow.append(descriptionData)
    tableRow.append(amountData)
    table.append(tableRow)
   

    amountInput.value = ""
    descriptionInput.value = ""
    }

    calcTotal()
})

const calcTotal = function(){
 var firstCells = document.querySelectorAll('td:nth-child(3)')
 var cellValues = []
 let sum = 0
 firstCells.forEach(function(singleCell){
     cellValues.push(singleCell.innerHTML)
 })
 for (let element of cellValues){
     const number = Number.parseFloat(element)
     sum = sum + number
     total.innerHTML = `${sum}`
 }
 
} 


