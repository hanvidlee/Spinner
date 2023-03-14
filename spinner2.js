process.stdout.write('hello from spinner1.js... \rheyyy\n');
const sticks = "|/-\\|/-\\"
let delay = 100
for (let stick of sticks) {
  setTimeout(() => {
    process.stdout.write(`\r${stick}   ` );
  }, delay);
  delay += 200
}


// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);