let numbers2 = [];
let size = 0;
let average = 0;

function findAverage(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
    } 
    average = sum / arr.length; 
    console.log(sum);
    document.getElementById('sum').innerHTML += sum;
    console.log(average);
    document.getElementById('average').innerHTML += average;
  } 


function startArray(num){
    size = document.getElementById('user').value;
    console.log(size);
    for (let i=0;i<size;i++){
        numbers2[i] = parseInt(prompt("Please enter a number:"));
    }
    console.log(numbers2);
    document.getElementById('array').innerHTML += numbers2;
}

