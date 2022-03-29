// SelectionSort Visualization
// Walter Livingston

// Based on QuickSort Visualization
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/143-quicksort.html
// https://editor.p5js.org/codingtrain/sketches/vic6Qzo-j
// https://youtu.be/eqo2LxRADhU
// https://www.geeksforgeeks.org/selection-sort/

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
  selectionSort(values, 0, values.length);
}

async function selectionSort(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  
  if (start >= end) {
    return;
  }
  
  for(let i = 0; i < end - 1; i++){
    let minIndex = i;
    states[i] = 0;
    for(let j = i+1; j < end; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
        states[i] = -1;
        states[i+1] = 0;
      }
      states[i] = -1;
    }
    await swap(arr, i, minIndex)
    states[i+1] = -1;
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

async function swap(arr, a, b) {
  await sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}