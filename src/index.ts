import functions,{ rl } from "./functions.js"
import text from "./text.js"

rl.write(text.init)
try{
  const answer:number = parseInt(await rl.question(text.setDificult))
  let {attempts,levelDificult} = functions.dificult(answer,text.ErrorOpcion)
  let intenst:number = 0
  const resultado: number = Math.floor(Math.random()*100)
  console.log("\n"+text.startGame(levelDificult))
  while(attempts > 0){
    const res:number = parseInt(await rl.question(text.respuesta))
    const guess = functions.guessNumber(res,resultado)
    if(guess[0] == false){
      rl.write(text.incorrect(res,guess[1]))
      intenst++
      if(intenst === attempts){
        break
      }
      continue
    }else{
      rl.write(text.congratulations(intenst+1))
      process.exit(0)
    }
  }
  rl.write(text.gameOver)
  process.exit(1)

}catch(err:unknown){
  console.log((err as Error).message,"\n")
  process.exit(0)
}
