/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

// peso / (altura * altura) 

let paciente  = [
    {
      name: "Rakan",
      age: 24,
      weight: 53,
      height: 175,
    },
    {
      name: "Xayah",
      age: 21,
      weight: 70,
      height: 163,
    },
    {
      name: "Lux",
      age: 23,
      weight: 56,
      height: 171,
    },
  ]


  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }
  

  function patientIMC(patient) {
    alert(`
     Paciente ${patient.name} possui o IMC de 
     ${ IMC(patient.weight, patient.height ) }
    `)
    }
    
   for (let patient of paciente) {
    patientIMC(patient)
  }




//Exemplo1
/*

let paciente  = [
    {
      name: "Rakan",
      age: 24,
      weight: 53,
      height: 175,
    },
    {
      name: "Xayah",
      age: 21,
      weight: 70,
      height: 163,
    },
    {
      name: "Lux",
      age: 23,
      weight: 56,
      height: 171,
    },
  ]


function patientIMC(patient) {
alert(`
 Paciente ${patient.name} possui o IMC de 
 ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
`)
}


patientIMC(paciente[0])
patientIMC(paciente[1])
patientIMC(paciente[2])
*/


//Exemplo2 
/*
let paciente  = [
  {
    name: "Rakan",
    age: 24,
    weight: 53,
    height: 175,
  },
  {
    name: "Xayah",
    age: 21,
    weight: 70,
    height: 163,
  },
  {
    name: "Lux",
    age: 23,
    weight: 56,
    height: 171,
  },
]

function patientIMC(patient) {
  return `
   Paciente ${patient.name} possui o IMC de 
   ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `)
  }
  
 for (let patient of paciente) {
  let IMCmassage = patientIMC(patient)
  alert (IMCmassage)
}

*/


//Exemplo3
/*
let paciente  = [
  {
    name: "Rakan",
    age: 24,
    weight: 53,
    height: 175,
  },
  {
    name: "Xayah",
    age: 21,
    weight: 70,
    height: 163,
  },
  {
    name: "Lux",
    age: 23,
    weight: 56,
    height: 171,
  },
]

function patientIMC(patient) {
  alert(`
   Paciente ${patient.name} possui o IMC de 
   ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `)
  }
  
 for (let patient of paciente) {
  patientIMC(patient)
}
*/




//Apenas um exemplo aleatório
/*

//criação
function liquidificador (fruta1, fruta2){
  const suco = fruta1 + fruta2
  return suco
}

//execução
le meuSuco = liquidificador("maçã", "banana")
//agora eu tenho uma variavel que esta recebendo o retorno da função


alert(meuSuco)

*/






/*
alert(`
 Paciente ${paciente[0].name} possui o IMC de 
 ${(paciente[0].weight / ((paciente[0].height / 100) ** 2)).toFixed(2)}
`)
*/

