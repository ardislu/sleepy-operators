import * as sleepy from '/sleepy-operators.js';

const ascii =
`    _
    | |
 ___| | ___  ___  _____  _   _
/ __| || _ || _ ||  _  || | | |_____
|_  | || __|| __|| |_| || |_| |_____|
|__/|_||___||___||  ___||__   |
                 | |      _|  |
                 |_|     |____|
 _____ _____ ___  ____  ____ | |_  _____  ____ ___
|  _  |  _  | _ ||   _|/ _  ||  _||  _  ||  __/ __|
| |_| | |_| | __||  | | |_| || |__| |_| || |  |__ |
|_____|  ___|___||__| |_____||____|_____||_|  |__/
      | |
      |_|`;

function help() {
  console.log(`%c ${ascii}`, 'font-weight: bold');
  // TODO: print a helpful demo message
}
globalThis.help = help;
help();

globalThis.sleepy = sleepy;
