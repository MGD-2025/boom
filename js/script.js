const userInput = document.getElementById("userInput"),
      countdown = document.getElementById("countdown"),
      result= document.getElementById("result"),
      restart = document.getElementById("restart")

let time = 5
let userNumber = 0

userInput.addEventListener("change", () => {
  userNumber = userInput.value
  console.log(userNumber)
})

const randomNumber =  () => Math.floor(Math.random() * 3) + 1

function startGame() {
  count()
  const mysteryNumber = new Promise(resolve => {
    setTimeout(() => {
      resolve(randomNumber())
    }, 6000)
  })
  return mysteryNumber
}

startGame().then(number => {
  let mensaje = ""
  if(number == userNumber) {
    mensaje = `<h2 class="green">¡Has salvado el mundo!</h2><p>tu número: ${userNumber} el aleatorio: ${number}</p>`
  } else {
    mensaje = `<h2 class="red">La bomba ha estallado</h2><p>tu número: ${userNumber} el aleatorio: ${number}</p>`
  }
  result.innerHTML = mensaje
})

function count () {
  const intervalo = setInterval(() => {  
    (time === 0) && clearInterval(intervalo)

    countdown.innerHTML = `<p>Cuenta atrás: ${time} segundos<p>`
    time--
  }, 1000) 
}

restart.addEventListener("click", () => {
  location.reload()



})

