//Using the for loop and string method repeat().

const startTime = performance.now();

for (let i = 1; i < 8; i++) {
  console.log("#".repeat(i));
}

const endTime = performance.now();
console.log(`Time to execute took ${endTime - startTime} milliseconds`);

//using the while loop, array structure and other string method join()

const startTime2 = performance.now();

let i = [];
let j = 1;

while (j < 8) {
  i.push("#");
  console.log(i.join(""));
  j++;
}

const endTime2 = performance.now();
console.log(`Time to execute took ${endTime2 - startTime2} milliseconds`);
