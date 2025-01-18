function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(10, 5)); // Output: 15
//Alternative solution using a default value
function foo2(a, b) {
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo2(null, 5)); //Output: 5
console.log(foo2(10, null)); //Output: 10
console.log(foo2(10, 5)); //Output: 15