
console.log('Ola Javascript')

var userName = 'henrique'

document.getElementById('user-name').innerHTML = userName

//variaveis//

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

//operadores matematicos//

//var n1 = 5
//var n2 = '5'
//var total  = n1 + n2
//console.log(total)

//var v1 = 5
//var v2 = 5

//ar resultado = v1 == v2
//console.log(resultado)

//function soma(n1, n2) {
//console.log(n1+n2)
//}
//soma(10, 5)

//function boasVindas(nome) {
  //  alert(nome + ', seja bem vindo(a)')
//}

//boasVindas('henrique')

// function soma(n1, n2){
//     return n1 + n2
// }

// var resultado = soma(n1+ n2)
//     console.log(resultado)

//controle de fluxos//

//Sendo um cliente correntista do banco 
//Posso sacar dinheiro em caixas eletronicos
//Para poder comprar em lugares que não aceitam o cartão de debito ou credito 

//Cenario 1: Saque com sucesso
//Dado que meu saldo é de 1000 Reais 
//Quando faço um saque de 500 Reais
//Então o valor do saque deve ser deduzido do meu saldo


//Cenario 2: Saque com valor superior ao saldo
//Dado que meu saldo é de 1000 Reais
//Quando faço um saque de 1001 Reais
//Então nçao deve deduzir do meu saldo 
//E deve mostrar uma mensagemd e alerta informando o valor é superior ao saldo

//Cenario 3: Saque com valor maximo
//Dado que meu saldo é de 1000 Reais
//E o valor máximo por operação é de 700 Reais
//Quando faço um saque no valor de 701 Reias
//Então noa deve deduzir do meu saldo 
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo 

//Arrays//

//var gaveteiro = ['meias', 'Gravatas', 'Documentos', 'Salgadinhos']

//console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader' ]

// personagens.push('C3pO')
// personagens.push('R2d2')

// //personagens.pop()

// personagens=personagens.filter(function(p){ 
//     return p !=='Darth Vader'
// })
// ]
// console.log(personagens)

//Controles de repitção//

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader','R2d2' ]

// personagens.forEach(function(p){
//   console.log(p)
// })

// for (var i in personagens) {
//   console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//   console.log(i)
//   //codigo vai ser executadi até a condição retornar false 
// }

//Objetos//

// var Yoda = {
//   nome: 'mestre yoda',
//   idad: 100,
//   jedi: true,
//   mostrarIdade: function() {
//       console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//   }
// }
// console.log(Yoda)
// Yoda.mostrarIdade()

//Constantes//

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)