var countdownGenerator = function (x) {
  var timer = x;

  return function() {

    if(timer === 0){
      console.log("Blast Off!")
    }
    if(timer === 3){
      console.log("T-minus 3...")

    }if(timer === 2){
      console.log("T-minus 2...")

    }if(timer === 1){
      console.log("T-minus 1...")

    }if(timer < 0){
      console.log("Rockets already gone, bub!")
    }timer -=1
    return
  }
}
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!