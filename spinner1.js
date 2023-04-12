
const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${sentence[i++]}    `); //calls on sentence 
  if (i === sentence.length) process.stdout.write('\n');
  if (i < sentence.length) spinner();
}, 300);

const sentence = "|/-\|/-\|"; //the animation sequence
let i = 0;

spinner();
