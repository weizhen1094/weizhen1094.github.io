function get_cookie(isCookie) 
{
    // display score
    let score = document.createElement('p');
    score.id = 'score-text'; 
    score.innerHTML   = isCookie ? '+1' : '-1';
    score.style.color = isCookie ? 'black' : 'red';
    document.body.appendChild(score);
}