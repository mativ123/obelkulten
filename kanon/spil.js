window.onload=function()
{
    var canvas = document.getElementById('scorchedCanvas');
    var context = canvas.getContext('2d');

    var cannonball = new Image();
    cannonball.src = 'cannonball.png';
    var cannonBase = new Image();
    cannonBase.src = 'cannon-base.png';
    var cannonShooter = new Image();
    cannonShooter.src = 'cannon-shooter.png';
    var backgroundImg = new Image();
    backgroundImg.src = 'background.jpg';
    var abe = new Image();
    abe.src = 'abe.png';

    var ballX = 0;
    var ballY = 200;
    var xSpeed = 1;
    var ySpeed = 1;

    var power = document.getElementById("power");
    var angle = document.getElementById("angle");
    var arcSlider = document.getElementById("arcNumber");
    
    var skydBool = false;
    var powerPercent;
    var powerSub;
    var powerVal;

    var rollingSlowdown = 10;

    var posString = "X: "+Math.round(ballX)+", Ball Y"+Math.round(ballY);
    var speedString;
    var tempX;
    var tempY;

    var cannonShooterWidth;
    var cannonShooterHeight;
    var cannonBaseWidth = 100;
    var cannonBaseHeight;
    var cannonShooterPosX;
    var cannonShooterPosY;
    var cannonBasePosY;
    var cannonBasePosX = 10;

    var cannonBallSize = 25;
    
    var arcListX = [];
    var arcListY = [];
    var first = true;
    var arcCount = -1;
    var stoppedFlying = true;
    var colorList = [];
    var drawLines = false;

    var abePos;
    var abeWidth;

    function skydFunc()
    {
        ballX = cannonShooterPosX+cannonShooterWidth/3;
        ballY = cannonShooterPosY-cannonShooterHeight/3;
        powerVal = power.value/20;
        //her laver jeg tallene jeg får fra sliderne og laver dem om til procent (1.1111 er bare 100/90)
        powerPercent = (angle.value*1.1111)/100;
        powerSub = powerVal*powerPercent;

        ySpeed = powerVal-(powerVal-powerSub);
        xSpeed= powerVal-powerSub;
        stoppedFlying = false;
        
        cannonShooterWidth = cannonBaseWidth*1.24;
        cannonShooterHeight = cannonShooterWidth*0.24;
        cannonBaseHeight = cannonBaseWidth*0.625;
        cannonBasePosY = canvas.height-cannonBaseHeight;

        cannonShooterPosX = cannonBasePosX+8;
        cannonShooterPosY = cannonBasePosY-13;

        skydBool = true;
        if(first)
        {
            first = false;
        } else
        {
            arcListX.push([]);
            arcListY.push([]);
            arcCount++;
            stoppedFlying = false;
            colorList.push(randomHexGen());
            arcRecord();
            drawLines = true;
        }
    }

    document.getElementById("skydKnap").onclick = function () { skydFunc() };
    var powerOutput = document.getElementById("powerText");
    powerOutput.innerHTML = "power: "+50;
    power.oninput = function()
    {
        powerOutput.innerHTML = "power: "+this.value;
    }

    var angleOutput = document.getElementById("angleText");
    angleOutput.innerHTML = "degress: "+0+"°";
    angle.oninput = function()
    {
        angleOutput.innerHTML = "degress: "+this.value+"°";
    }

    var arcNumberTextOutput = document.getElementById("arcNumberText");
    arcNumberTextOutput.innerHTML = 2+" arcs";
    arcSlider.oninput = function()
    {
        arcNumberTextOutput.innerHTML = this.value+" arcs";
    }


    function main()
    {
        if(skydBool)
        {
            posString = "X: "+Math.round(ballX)+"m, Y: "+Math.round(800-ballY)+"m";

            //context.drawImage(backgroundImg, 0, 0, 2000, 1125);
            context.clearRect(0, 0, 2000, 800);
            if(drawLines)
            {
                drawArcs();
            }
            context.drawImage(cannonball, ballX, ballY, cannonBallSize, cannonBallSize);
            context.save();
            context.translate(cannonShooterPosX+cannonShooterWidth/2, cannonBasePosY+cannonShooterHeight/2);
            context.rotate(-angle.value*Math.PI/180);
            context.translate(-(cannonShooterPosX+cannonShooterWidth/2), -(cannonBasePosY+cannonShooterHeight/2));
            context.drawImage(cannonShooter, cannonShooterPosX, cannonShooterPosY, cannonShooterWidth, cannonShooterHeight);
            context.restore();
            context.drawImage(cannonBase, cannonBasePosX, cannonBasePosY, cannonBaseWidth, cannonBaseHeight);
            context.drawImage(abe, 100, 100, 100, 100);
            context.font = "30px Arial";
            if(ballY<30)
            {
                context.fillText(posString, ballX, 30); 
                context.fillText(speedString, ballX, 60);
            } else if(ballX>canvas.width-300)
            {
                context.fillText(posString, canvas.width-300, ballY); 
                context.fillText(speedString, canvas.width-300, ballY-30);
            } else
            {
                context.fillText(posString , ballX, ballY-10); 
                context.fillText(speedString, ballX, ballY-40);
            }

            ySpeed-=0.00982;
            ballX+=xSpeed;
            

            if(ballY < canvas.height-cannonBallSize)
            {
                ballY-=ySpeed;
            } else
            {
                stoppedFlying = true;
                if(xSpeed>0)
                {
                    xSpeed -= rollingSlowdown/1000;
                } else
                {
                    xSpeed = 0;
                }

                stoppedFlying = true;
            }
        }
        setTimeout(main, 1);
    }

    function arcRecord()
    {
        arcListX[arcCount].push(ballX);
        arcListY[arcCount].push(ballY);

        if(!stoppedFlying)
        {
            setTimeout(arcRecord, 1);
        }
    }

    function drawArcs()
    {

        if(arcSlider.value > arcCount)
        {
            var arcsToDraw = arcCount+1;
        } else
        {
            var arcsToDraw = arcSlider.value;
        }
        for(var x = 0; x<arcsToDraw; x++)
        {
            context.lineWidth = 5;
            context.strokeStyle = colorList[arcCount-x];
            context.beginPath();
            context.moveTo(cannonShooterPosX+cannonShooterWidth/3, cannonShooterPosY-cannonShooterHeight/3);
            for(var i = 0; i<arcListX[arcCount-x].length; i++)
            {
                context.lineTo(arcListX[arcCount-x][i]+cannonBallSize/2, arcListY[arcCount-x][i]+cannonBallSize/2)
            }
            context.stroke();
        }
    }

    function speedDef()
    {
        var distance = Math.sqrt(Math.pow((ballX-tempX), 2) + Math.pow((ballY-tempY), 2));
        var velocity = Math.round(distance/0.001);
        speedString = velocity+"m/s";

        tempX = ballX;
        tempY = ballY;

        setTimeout(speedDef, 1);
    }

    function randomHexGen()
    {
        var hexString = "#";
        var hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','E','F'];

        for(var i = 0; i<6; i++)
        {
            var randNum = Math.floor(Math.random() * 15);
            hexString = hexString+hexChars[randNum];
        }

        return hexString;
    }
    main();
    speedDef();
}
