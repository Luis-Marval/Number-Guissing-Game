const init:string = "\n¡Bienvenidos al juego de adivinar números!\nEstoy pensando en un número entre 1 y 100.\n"

const setDificult:string  = "\nPlease select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n    \nEnter your choice: "

const ErrorOpcion:string  = "La opcion seleccionara no existe"

const respuesta:string = "Introduce tu respuesta: "

const gameOver:string = "Game over, ya no te quedan mas intentos\n"

const startGame = (dificult:string):string =>{
  return `¡Genial! Has seleccionado el nivel de dificultad ${dificult}.\nEmpecemos el juego!\n`
}

const incorrect = (number:number,diferent:string):string =>{
  return `¡Incorrecto! El número es ${diferent} que ${number} \n\n`
}

const congratulations = (num:number):string =>{
  return `¡Felicitaciones! Adivinaste el número correcto en ${num} intentos.`
}

export default{
  init,setDificult,ErrorOpcion,respuesta,gameOver,incorrect,congratulations,startGame
}