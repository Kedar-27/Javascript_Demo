/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

var johnScores = [89, 120, 103];
var mikeScores = [116, 94, 123];
var maryScores = [97, 134, 105];



var johnSum = 0;
var mikeSum = 0;
var marySum = 0;

for (var i = 0; i <= johnScores.length; i++) {
    johnSum += johnScores[i];
}

for (var i = 0; i <= mikeScores.length; i++) {
    mikeSum += mikeScores[i];
}

for (var i = 0; i <= maryScores.length; i++) {
    marySum += maryScores[i];
}

var johnAvg = johnSum / johnScores.length;
var mikeAvg = mikeSum / mikeScores.length;
var maryAvg = marySum / maryScores.length;


if (johnAvg === mikeAvg & johnAvg === maryAvg) {
    console.log('Its a draw');
} else if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('Joh is winner');
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike is winner');
} else {
    console.log('Mary is winner');
}