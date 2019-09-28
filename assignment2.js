var quotes =  ['" At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren\'t where you want to be, you will always be a failure."- Erin Cummings', 
'“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.”-Steve Jobs',
'"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."- Maya Angelou',
'"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean',
'"Happiness is not something you postpone for the future; it is something you design for the present."-Jim Rohn',
'"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."-Buddha',
'"If you believe in yourself and have dedication and pride - and never quit, you\'ll be a winner. The price of victory is high but so are the rewards." - Bear Bryant'
]
function newQuote () {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('qDisplay').innerHTML=quotes[randomNumber];
}

function newNumber () {
    var a = document.getElementById("dropdown");
    var b = a.options[a.selectedIndex].value;
    var c = document.getElementById("converterText").value;
    var convert;
    if (b==1){
        convert = c/2.205;
    }
    else{
        convert = c*2.205;
    }
    document.getElementById('cDisplay').innerHTML= convert;
}

function numberCrunch () {
    var numbers=document.getElementById('sequenceText').value;
    var numArr=numbers.split(',').map(Number);
    var max =Math.max.apply(null,numArr);
    document.getElementById('maxDisplay').innerHTML=max;
    var min =Math.min.apply(null,numArr);
    document.getElementById('minDisplay').innerHTML=min;
    const add = (a,b) => a+b;
    const sum =numArr.reduce(add);
    document.getElementById('sumDisplay').innerHTML=sum;
    const avg = sum/numArr.length;
    document.getElementById('avgDisplay').innerHTML=avg;
    var rev = numArr.reverse();
    document.getElementById('revDisplay').innerHTML=rev;
}


    
    
