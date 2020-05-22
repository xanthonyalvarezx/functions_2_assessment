//Addition
function add(x, y) {

  return x + y
}
add(2, 4)
console.log(add(2, 4))



//Multiplication
function multiply(a, b) { // function which multiplies a,b which = 5,3

  let total = 0 // total = 0
  for (let i = 0; i < b; i++) { // for i = 0 when < b which is 3 incriment i by 1
    total = add(a, total) // add a which is 5 to the total which is 0 making it 5 then 10 then 15
  }
   // console log the total which should be 5 * 3 = 15
  return total
}
console.log(multiply(5,3))
multiply(5, 3) // multiply 5 and 3



//Power/Exponent

function power(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result = multiply(x, result)
  }
  console.log(result)
  return result
}
power(2, 8)


//factoral

function factoral (z){
  
  let final = 5
for (let i = 1; i < z; i++){
 final = multiply(final, i)

}
console.log(final)
return final
}
factoral(5)

//fibonacci
function fibonacci(f){
let fib1 = 0
let fib2 = 1
let nextNum
for(let i = 2; i < f; i++){
  nextNum = add(fib1,fib2)
  fib1 = fib2
  fib2 = nextNum
  
}
console.log(nextNum)
return nextNum
}
fibonacci(8)

















