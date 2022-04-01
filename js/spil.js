window.onload=function()

{
    var canvas = document.getElementById('spilCanvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById("obelBilled");
    var pipe1 = document.getElementById("pipe1");
    var pipe2 = document.getElementById("pipe2");
    var hentai = document.getElementById("hentai");
    var counterX = 0;
    var counterY = 250;
    var moveRight = true;
    var moveUp = true;
    var x = 2;
    var y = 3;

    var jumpHeight = 75;
    var jumpHeightMax = jumpHeight;
    var ifJump = false;

    var pipeCounter = 500;
    var pipeY = 10;
    var pipeSpeed = 1;

    var point = 0;
    var pointLeft = 1;
    var pointLeftMax = pointLeft;
    var dodText = false;
    var spil = true;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
//        counterY+=75;
        ifJump = true;
    }
});

    var mouseDown = 0;
    document.body.onmousedown = function() { 
      ++mouseDown;
        counterY+=75;
        if(!spil)
        {
            console.log("genstart");
            pipeCounter = 500;
            counterY = 250;
            point = 0;
            dodText = false;

            spil = true;
            fObel();
        }
    }
    document.body.onmouseup = function() {
      --mouseDown;
    }

    function fObel()
    {


        if(spil)
        {
            console.log(pipeSpeed);

            context.clearRect(0, 0, 500, 500);
            context.drawImage(img, 220, 440-counterY, 60, 60);

            if(jumpHeight<=0)
            {
                ifJump = false;
                jumpHeight = jumpHeightMax;
            }

            if(ifJump)
            {
                counterY+=5;
                jumpHeight-=5;
            }
            
            if(counterY>0)
            {
                counterY-=1;
            } else
            {
                counterY=0;
            }
            
            pipeCounter-=pipeSpeed;

            if(pipeCounter<-70)
            {
                pipeCounter = 500;
                pipeY = Math.random() * (100-(-100))+(-100);
                pipeSpeed += 0.06;
                pointLeft = pointLeftMax;
            }
                
            if(215 < pipeCounter && 285 > pipeCounter)
            {
                if(counterY>335-pipeY)
                {
                    spil = false;
                }
                
                if(counterY<165-pipeY)
                {
                    spil = false;
                }
            }

            if(counterY<=0)
            {
                spil = false;
            }

            if(215 < pipeCounter && 285 > pipeCounter && pointLeft>0)
            {
                point+=1;
                pointLeft--;
            }

            context.drawImage(pipe1, pipeCounter, 335+pipeY, 70, 165);
            context.drawImage(pipe2, pipeCounter, 0+pipeY, 70, 165);


            context.fillStyle = "white";
            context.font = "60px Arial";
            context.fillText(point, 230, 400);
            
            if(!spil)
            {
                context.fillText("GAME OVER", 50, 250);
                context.font = "30px Arial";
                context.fillText("r for at genstarte", 130, 300);
            }
            setTimeout(fObel,1);
            

        }
    }
    fObel();
    
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 82) {
        console.log("genstart");
        pipeCounter = 500;
        counterY = 250;
        point = 0;
        dodText = false;
        pipeSpeed=1;
        pointLeft=pointLeftMax;

        spil = true;
        fObel();
    }
});
};
