
const readline = require('readline'); // collect module

const rl = readline.createInterface({ // I/O unit
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => { //// question stack --> stored in variable
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              
              // Construct the profile description based on user input
              const profileDescription = ` 
${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.
              `; // string concat w/string literals to variable for output
              
              console.log(profileDescription);
              
              rl.close(); // closes the i/o control
            });
          });
        });
      });
    });
  });
});

