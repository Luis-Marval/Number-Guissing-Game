#!/usr/bin/env node
import{createInterface as l}from"node:readline/promises";import{stdin as m,stdout as f}from"node:process";var r=l({input:m,output:f});function d(e,t){switch(e){case 1:return{attempts:10,levelDificult:"facil"};case 2:return{attempts:5,levelDificult:"medio"};case 3:return{attempts:3,levelDificult:"dificil"}}throw new Error(t)}function g(e,t){if(isNaN(e))throw Error("No se ingreso un numero");return e>t?[!1,"menor"]:e<t?[!1,"mayor"]:[!0,"igual"]}var s={dificult:d,guessNumber:g};var p=`
\xA1Bienvenidos al juego de adivinar n\xFAmeros!
Estoy pensando en un n\xFAmero entre 1 y 100.
`,b=`
Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
    
Enter your choice: `,v="La opcion seleccionara no existe",w="Introduce tu respuesta: ",h=`Game over, ya no te quedan mas intentos
`,E=e=>`\xA1Genial! Has seleccionado el nivel de dificultad ${e}.
Empecemos el juego!
`,x=(e,t)=>`\xA1Incorrecto! El n\xFAmero es ${t} que ${e} 

`,y=e=>`\xA1Felicitaciones! Adivinaste el n\xFAmero correcto en ${e} intentos.`,n={init:p,setDificult:b,ErrorOpcion:v,respuesta:w,gameOver:h,incorrect:x,congratulations:y,startGame:E};r.write(n.init);try{let e=parseInt(await r.question(n.setDificult)),{attempts:t,levelDificult:a}=s.dificult(e,n.ErrorOpcion),i=0,u=Math.floor(Math.random()*100);for(console.log(`
`+n.startGame(a));t>0;){let o=parseInt(await r.question(n.respuesta)),c=s.guessNumber(o,u);if(c[0]==!1){if(r.write(n.incorrect(o,c[1])),i++,i===t)break;continue}else r.write(n.congratulations(i+1)),process.exit(0)}r.write(n.gameOver),process.exit(1)}catch(e){console.log(e.message,`
`),process.exit(0)}
