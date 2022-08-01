const numeros = [1, 3, 5, 7, 9]
console.log(numeros.length)

const nomes = ['Daniel', 'João', 'Paulo']
console.log(nomes.length)

const identidade = [8091393499, 'Daniel Ribeiro Menna', true]
console.log(identidade.length)

console.log(numeros[0])
console.log(nomes[1])
console.log(identidade[2])

numeros.unshift(0)
console.log(numeros.includes(0))

identidade.push('Venancio Aires')
console.log(identidade.includes('Porto Alegre'))
