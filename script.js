import * as sleepy from '/sleepy-operators.js';

const ascii =
  `     _
     | |
 ___ | | ___  ___  _____  _   _
| __|| || _ || _ ||  _  || | | |_____
|__ || || __|| __|| |_| || |_| |_____|
|___||_||___||___||  ___||__   |
                  | |      _|  |
                  |_|     |____|
 _____ _____ ___  ____  ____ | |_  _____  _____ ___
|  _  |  _  | _ ||   _|/ _  || __||  _  ||  _  | __|
| |_| | |_| | __||  | | |_| || |__| |_| || |   |__ |
|_____|  ___|___||__| |_____||____|_____||_|   |___|
      | |
      |_|`;

function help() {
  console.log(`%c ${ascii}`, 'font-weight: bold');
  // TODO: print a helpful demo message
}
globalThis.help = help;
help();

globalThis.sleepy = sleepy;
