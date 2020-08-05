### Rock Paper Scissors

A classic game, nothing new here. 

### Functions so far
Player can choose option
CPU randomly chooses
Works winning logic
Should count scores
Display who won the round
Count the Ties
Next round should reset UI, but keep scores
Reset Game should reset scores and UI after confirmation
If no scores, then should alert('Nothing to reset')

### Future features
Will display funny CPU comments such as: "Ha! I win, you lose" or "You can't beat me"
(can add to an array and pick one at random)
Add visual UI to show where the point went to e.g highlight scorecard, or show a +1 icon
GIF comments from CPU depending on the rounds result (API connect perhaps?)
Add player name
Choose how many games to play up to.
Could figure out when it's the penultimate round and chnage the UI
Add tooltips on hove to show the option name (practice creating tooltips)
Ability to choose emoji skin-tone for player and CPU
Ability to change color scheme
Add timer (if player deosn't choose before timer is up they lose the round?)

### Future future features
Online play. The dream.
Players enter a matching room name
Stop anyone else joining
Show players names to each other (limit charcaters to avoid spam)

### Tools
Prettier `npm i -D prettier` to install as a dev dependency
In scripts, add this:
```
scripts: {
  "format": "prettier \"src/**/*.{js, html}\" --write",
}
```
Then run `npm install -D eslint eslint-config-prettier`
Create new file called `.eslintrc.json`
Add this: This uses the eslint recommended setup and is not opinionated, it allows me to write code freely and will catch some bugs, but not force writing code a specific way. 
```
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node":true
  }
}
```
