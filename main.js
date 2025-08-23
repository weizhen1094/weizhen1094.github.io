var currScore = 0;
var health = 5;

function getRndInteger(min, max) 
{ return Math.floor(Math.random() * (max - min) ) + min; }

// on click function for cookie/button
function get_cookie(isCookie) 
{
    // display score
    let score = document.createElement('p');
    score.id = 'score-text'; 
    score.innerHTML   = isCookie ? '+1' : '-1';
    score.style.color = isCookie ? 'black' : 'red';
    score.style.left = getRndInteger(37, 63).toString() + '%'; // todo pos of cookie
    //score.style.top = getRndInteger(37, 63).toString() + '%'; 
    score.animate([ {opacity: '100%'}], {duration: 570});
    document.body.appendChild(score);
    //setTimeout(function () { document.body.removeChild(score); }, 650)
    // update total score
    currScore = isCookie ? currScore + 1 : currScore - 1;
    document.getElementById('curr-score-text').innerHTML = 'score: ' + currScore.toString();
}

function spawn_cookies()
{

}

// on click function to start game
function start_game()
{

}

