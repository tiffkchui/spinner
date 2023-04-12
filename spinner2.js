
const sentence = "|/-\\|/-\\|";

const spinner = (i) => {
  if (sentence.length === 0) return;
  process.stdout.write(`\r${sentence[i % sentence.length]}    `);
  setTimeout(() => spinner(i + 1), 100);
};

spinner(0);