document.querySelector('.switch').addEventListener('mouseup', function() {
    var prices = document.getElementsByClassName('card__price');
    for(var i = 0; i < prices.length; i++)
    {
        var element = prices[i];
        var classList = element.classList;
        classList.toggle('card__price--hidden');
    }
});