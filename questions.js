// process.stdout.write("Hello ");
// // writeable stream, write method. sends data out!
// process.stdout.write("World \n\n\n");
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What's your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, activity, language] = answers;
  console.log(`

  Go ${activity} ${name}, you can write ${language} later.

    `);
});
