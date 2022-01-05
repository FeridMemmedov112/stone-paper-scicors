
const list = ["kagiz.png", "das.png", "scissor.png"]
const paper = document.getElementById('paper')
const stone = document.getElementById('stone')
const scissor = document.getElementById('scissor')

const computerSelection = document.getElementById('computer-selection')
const writeTheResult = document.getElementById('result')

//klikleme hadisesi burada qeyde alinir
 paper.onclick = makeYourChoice
 stone.onclick = makeYourChoice
 scissor.onclick = makeYourChoice



function makeYourChoice() {
 const computer = randomSelection()
 const mychoice = this.dataset.id

 if (mychoice ==0 && computer ==0) {
   result = 'try again'    
 }
 else if (mychoice ==0 && computer ==1) {
   result ='the paper you win wins'    
 }
  else if (mychoice ==0 && computer ==2) {
    result ='defeated computer wins scissors paper absorbs'  
  }
  else if (mychoice ==1 && computer ==0) {
   result ='bent paper stone you have lost'    
 }
 else if (mychoice ==1 && computer ==1) {
   result ='try again'    
 }
 else if (mychoice ==1 && computer ==2) {
   result ='defeated stone breaks the scissors'    
 }
 else if (mychoice ==2 && computer ==1) {
   result ='you win'    
 }
 else{
   result = 'try again'
 }

  writeTheResult.innerHTML =result

}



function randomSelection(){
   const number = Math.round(Math.random()*2)
   computerSelection.src =`img/${list[number]}`
   return number
}
