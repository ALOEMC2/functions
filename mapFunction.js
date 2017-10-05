var words = ["ground", "control", "to", "major", "tom"];


var map =function(arr,func){

  var newArr = []

  arr.forEach(function(element){

    newArr.push(func(element))


  })

  console.log(newArr);


}






map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


//    return values from above
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
// const arr = ['a', 'b', 'c'];

// arr.forEach(function(element) {
//     console.log(element);
// });

// a
// b
// c