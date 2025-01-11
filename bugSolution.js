function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; //Safe access to length only if x is a string or an array 
  } else {
    return -1; // Or throw an error, handle unexpected input types
  }
}
