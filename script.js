let numbers2 = [];
let size = 0;
let average = 0;

//core logic to get the average and sum of array
function findAverage(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
    } 
    average = sum / arr.length;
    document.getElementById('sum').innerHTML += sum;
    document.getElementById('average').innerHTML += average;
  } 

//generates the array created on the site by the user
function startArray(num){
    size = document.getElementById('user').value;
    for (let i=0;i<size;i++){
        numbers2[i] = parseInt(prompt("Please enter a number:"));
    }
    document.getElementById('array').innerHTML += numbers2;
}

