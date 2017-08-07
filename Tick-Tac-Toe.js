/*

* Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
* Implement win detection with a functional rather than iterative style.
* Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

Implementation instructions
=======================
* Create the project from scratch. Don't just clone an existing project.
* This includes writing configuration files for any dependencies and test framework setup.
* You should have a reasonably thorough suite of unit tests using a real unit test framework.
* Use the editor of your choice.
* Init a git repo for this project.
* Push the repo up to github.
* Make small commits as you go to illustrate your thought process and be able to back out changes easily.
* Don't forget to push your final solution up to Github.
* Add a professional-looking README file with installation and usage instructions.

Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead. 

Submission instructions
====================
Upon completion of your work, submit a link to the repository via this form.
*/



//first make a board 

var boardNums = {
 1: ' ',
 2: ' ',
 3: ' ',
 4: ' ',
 5: ' ',
 6: ' ',
 7: ' ',
 8: ' ',
 9: ' '
}
var buildBorad = function(position, mark) {
  boardNums[position] = mark.toUpperCase();
};

var printBoard = function() {
  console.log('\n' +
    ' ' + boardNums[1] + ' | ' + boardNums[2] + ' | ' + boardNums[3] + '\n' +
    ' ---------\n' +
    ' ' + boardNums[4] + ' | ' + boardNums[5] + ' | ' + boardNums[6] + '\n' +
    ' ---------\n' +
    ' ' + boardNums[7] + ' | ' + boardNums[8] + ' | ' + boardNums[9] + '\n'
  );
};

console.log('printBoard', printBoard())

var winCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var whoWins = function(player) {
  var count = 0;
  //keep track of each player's move and count 
  for (var i = 0; i < winCombo.length; i++) {
    for (var j = 0; j < winCombo[i].length; j++) {
      if (boardNums[winCombo[i][j]] === player) {
        //meaning player wins ...yayy!!!
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
  }
  //meaning that player did not win
  return false;
}


console.log(whoWins('shey'));
