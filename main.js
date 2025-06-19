var totalScore = 0;

function getRndInteger(min, max) 
{ return Math.floor(Math.random() * (max - min) ) + min; }

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
    setTimeout(function () { document.body.removeChild(score); }, 650)
    // update total score
    totalScore = isCookie ? totalScore + 1 : totalScore - 1;
    document.getElementById('total-score-text').innerHTML = 'total score: ' + totalScore.toString();
}