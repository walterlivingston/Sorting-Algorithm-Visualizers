// InsertionSort Visualization
// Walter Livingston

// Based on QuickSort Visualization
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/143-quicksort.html
// https://editor.p5js.org/codingtrain/sketches/vic6Qzo-j
// https://youtu.be/eqo2LxRADhU
// https://www.geeksforgeeks.org/insertion-sort/

let values = [];
let w = 10;

let states = [];

function setup() {
  createCanvas(800, 200);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  insertionSort(values)
}

async function insertionSort(arr){
  let len = arr.length;
  
  for(let i = 1; i < len; i++){
    let key = arr[i];
    let j = i - 1;
    
    states[i] = 0
    
    while(j >= 0 && arr[j] > key){
      states[j] = 1;
      arr[j + 1] = arr[j];
      j--;
    }
    await sleep(50);
    arr[j + 1] = key;
    states[i] = 1;
  }
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}