const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}

console.log(person.pets[1].name)

const collections = [1, [2, [4, [5, [6]], 3]]]

console.log(collections[1][1][1][1][0])



console.log(6(6))

function criteriaFn(array){
  var desired=6;
  return (array==desired)
}

