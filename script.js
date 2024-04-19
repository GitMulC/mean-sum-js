function findAverage(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
    } 
    return sum / arr.length; 
  } 
   
  let numbers = [1, 2, 3, 4, 5]; 
  let average = findAverage(numbers); 
  console.log(average); // This will output 3