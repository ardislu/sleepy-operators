import * as sleepy from '/sleepy-operators.js';

globalThis.sleepy = sleepy;

const ascii =
`    _
    | |
 ___| | ___  ___  _____  _   _
| __| || _ || _ ||  _  || | | |_____
|_  | || __|| __|| |_| || |_| |_____|
|___|_||___||___||  ___||___  |
                 | |      __| |
                 |_|     |____|
 _____ _____ ___  ___  ____ | |_  _____  ____ ___
|  _  |  _  | _ ||  _|/ _  ||  _||  _  ||  __/ __|
| |_| | |_| | __|| | | |_| || |__| |_| || |  |__ |
|_____|  ___|___||_| |_____||____|_____||_|  |___|
      | |
      |_|`;

globalThis.help = function help() {
  console.log(`%c ${ascii}`, 'font-weight: bold');
  console.log('🥱 Hello! Type functions() to display all the sleepy-operators.');
}
help();

globalThis.functions = function functions() {
  console.table({
    'help()': 'Print the introduction message.',
    'functions()': 'Print all the sleepy-operators.',
    'sleepy.sort(number[])': 'Sleepily sort an array of numbers.',
    'sleepy.sum(number[])': 'Sleepily sum together an array of numbers.'
  });
}

document.querySelector('div.yawn').addEventListener('click', e => {
  console.log('👏 You found an easter egg!');
});
