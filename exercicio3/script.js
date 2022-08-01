const numeros = [1, 3, 5, 7, 9]
const numerosCopia = numeros.slice()
const nomes = ['Daniel', 'João', 'Paulo']
const nomesCopia = nomes.slice()
const identidade = [8091393499, 'Daniel Ribeiro Menna', true]
const identidadeCopia = identidade.slice()
numerosCopia.push(11)
console.log(numeros)
console.log(numerosCopia)
nomesCopia.pop()
console.log(nomes)
console.log(nomesCopia)
identidadeCopia.splice(1, 2)
console.log(identidade)
console.log(identidadeCopia)
