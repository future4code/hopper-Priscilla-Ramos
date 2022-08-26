//A)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// B) Para transpilar eu daria um TSC dentro da pasta raíz e depois rodaria o node exercicio-4.js 

// C) Rodaria o script npm run testa-ex4, que contem o comando TSC node ./build/exercicio-4.js

// D) Com o comando tsc e o caminho onde estão os projetos ou seus nomes, caso estejam na mesma pasta, 
//separado por espaços  tsc ex1.ts ex2.ts...