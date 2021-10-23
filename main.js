let input = 'a whale of a deal!'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for (let i = 0; i < input.length; i++) {
  //console.log('****')
  for (let j = 0; j < vowels.length; j++) {
    //console.log('indice i= ' + i + ' letra= '+ input[i] + 'indice j= ' + j + ' vocal = ' + vowels[j])

    if (input[i] === vowels[j]) {
      //console.log(input[i] + ' es igual a ' + vowels[j]);
      resultArray.push(input[i])

      if (input[i] === 'u') {
        resultArray.push(input[i])
      }

      if (input[i] === 'e') {
        resultArray.push(input[i])
      }
    }
  }
}
//console.log(resultArray)
console.log(resultArray.join('').toUpperCase())
