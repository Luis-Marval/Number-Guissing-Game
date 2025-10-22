import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const rl = createInterface({input,output})

interface difficult {
  attempts:number,
  levelDificult:string
}

function dificult(answer:number,messageError:string):difficult{
  switch(answer){
    case 1: return {attempts:10,levelDificult:"Facil"}
    case 2: return {attempts:5,levelDificult:"Medio"}
    case 3: return {attempts:3,levelDificult:"Dificil"}
  }
  throw new Error(messageError)
}

function guessNumber(input:number,guess:number):[boolean,string]{
  if(isNaN(input)){
    throw Error("No se ingreso un numero")
  }
  if(input > guess){
    return [false,"menor"]
  }
  if(input < guess){
    return [false,"mayor"]
  }
  return [true,"igual"]
}


export default {
  dificult,guessNumber
}