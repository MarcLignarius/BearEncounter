# Bear Encounter

#### _JavaScript, 05.31.2019_

#### By _Marc Davies and Reese Lee_

## Description

* _This program creates a hungry bear and a hiker._
* _The hiker must shoot at the bear to wound it, and hopefully scare it away._
* _The hiker can feed the bear to keep it at a distance._
* _See specs below for more information._

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| If user clicks "Shoot Bear", the bear's Health Points will drop between 0 and 50 | Click Shoot Bear | Health Points: 100 => 60*|
| If bear's Health Points reach zero, the bear is wounded and walks away | Health Points <= 0 | "You have wounded the bear, and it is now retreating. YOU LIVE ANOTHER DAY."|
| If user does nothing, bear's Satisfaction Level goes down by 1 every second. | User does nothing | Satisfaction Level: 10 => 9 after 1 second.|
| If user clicks "Feed trail mix", the bear's Satisfaction Level will go up by 3.  | Click Feed trail mix | Satisfaction Level: 10 => 13|
| If user clicks "Feed granola bar", the bear's Satisfaction Level will go up by 5.  | Click Feed granola bar | Satisfaction Level: 10 => 15|
| If user clicks "Feed sandwich", the bear's Satisfaction Level will go up by 10.  | Click Feed sandwich | Satisfaction Level: 10 => 20|
| If user clicks "Feed carcass", the bear's Satisfaction Level will go up by 20.  | Click Feed carcass | Satisfaction Level: 10 => 30 |
| If bear's Satisfaction Level reaches zero, the bear kills the user. | Satisfaction Level: 0 | "YOU ARE OUT OF AMMO AND FOOD. You are now bear food. Sorry. Sucks to be you." |

_*Number is random and may vary but should not exceed 50._

## Installation and Setup
* If you don't have it installed, download and install Node.js 12.3.1
* `$ git clone https://github.com/MarcLignarius/BearEncounter.git` This will clone the repository to your local machine.
* `$ npm install` This will allow you to have access to the CLI (command line interface) for webpack.
* `$ npm run build`
This will automatically build the bundle once. The entry file is `./src/script/index.js`, with production ready code (minified).
* `$ npm run start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring which can be stopped with the key combination `Ctrl + C` within the terminal.

## Known Bugs
There are no known bugs as of last update.

## Support and contact details
_Please contact me at marcdaviesriot@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used
This application was built in Atom using JavaScript, Node.js 12.3.1, jQuery 3.4.1, Bootstrap v4.3.1 and a custom css file. For unit testing, Jasmine framework and Karma task runner are both used.

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Marc Davies_**
