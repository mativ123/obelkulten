window.onload=function()
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById("obelBilled");
    var counterX = 0;
    var counterY = 0;
    var moveRight = true;
    var moveUp = true;
    var x = 2;
    var y = 3;

    function animate()
    {
        if (moveRight)
        {
            counterX+=x;
        } else
        {
            counterX-=x;
        }

        if (moveUp)
        {
            counterY+=y;
        } else
        {
            counterY-=y;
        }

        if(counterX > 180)
        {
            moveRight = false;

            x = Math.random()*3;
            y = Math.random()*3
        } else if(counterX < 0)
        {
            moveRight = true;

            x = Math.random()*3;
            y = Math.random()*3
        }

        if (counterY >= 180)
        {
            moveUp = false;
        } else if(counterY<=0)
        {
            moveUp = true;
        }
        
        context.clearRect(0, 0, 200, 200);
        context.drawImage(img, counterX, counterY, 20, 20);
        context.drawImage(img, counterX, counterY, 20, 20);
        
        setTimeout(animate,1);
    };

    animate();
};

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        console.log("1");
    }
    else if(event.keyCode == 39) {
        console.log("2");
    }
});
