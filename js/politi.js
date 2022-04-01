window.onload=function()
{
    var canvas = document.getElementById('politiCanvas');
    var context = canvas.getContext('2d');
    var obelPic = document.getElementById('obelPic');
    var road = document.getElementById('road');

    //politi
    var p1 = document.getElementById('p1'); 
    var p2 = document.getElementById('p2'); 
    var p3 = document.getElementById('p3'); 
    var p4 = document.getElementById('p4'); 
    var p5 = document.getElementById('p5'); 
    var p6 = document.getElementById('p6'); 

    var spil = true;

    var pos = 1;
    var currentPos = pos;
    var obelX = 1;

    var pos1 = 30;
    var pos2 = 200;
    var pos3 = 370;

    var spawnSpeed = 700;
    var spawnCountdown = spawnSpeed;
    var copSpeed = 1;

    var points = 0;
    var pointCheck = points

    var witchCop = 1;
    var witchLane = 1;

    var ifP1 = false;
    var ifP2 = false;
    var ifP3 = false;
    var ifP4 = false;
    var ifP5 = false;
    var ifP6 = false;

    var p1Y = -100;
    var p2Y = -100;
    var p3Y = -100;
    var p4Y = -100;
    var p5Y = -100;
    var p6Y = -100;

    var p1Lane = 1;
    var p2Lane = 1;
    var p3Lane = 1;
    var p4Lane = 1;
    var p5Lane = 1;
    var p6Lane = 1;

    function getRandomArbitrary(min, max) 
    {
        return Math.random() * (max - min) + min;
    }
    
    function getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.addEventListener('keydown', function(event)
    {
        if(event.keyCode == 39 && pos<3)
        {
           // if(pos<3)
           // {
           //     pos++;
           // } else
           // {
           //     pos=1;
           // }
            
            pos++;
        }

        if(event.keyCode == 37 && pos>1)
        {
           // if(pos>1)
           // {
           //     pos--;
           // } else
           // {
           //     pos = 3;
           // }
            
            pos--;
        }
    });

    function politi()
    {
        context.clearRect(0, 0, 500, 500);

        context.beginPath();
        context.moveTo(166, 0);
        context.lineTo(166, 500);
        
        context.moveTo(333, 0);
        context.lineTo(333, 500);

        context.stroke();

        context.drawImage(road, 0, 0, 166, 500);
        context.drawImage(road, 166, 0, 166, 500);
        context.drawImage(road, 333, 0, 166, 500);

        context.font = "60px Arial";
        context.fillStyle = "white";
        context.fillText(points, 233, 70);

//        context.drawImage(p1, pos1, 20, 100, 100);
//        context.drawImage(p2, pos1, 125, 100, 100);
//
//        context.drawImage(p3, pos2, 20, 100, 100);
//        context.drawImage(p4, pos2, 125, 100, 100);
//
//        context.drawImage(p5, pos3, 20, 100, 100);
//        context.drawImage(p6, pos3, 125, 100, 100);
        if(spil)
        {
            switch(pos)
            {
                case 1:
                    obelX = pos1;
                    break;
                case 2:
                    obelX = pos2;
                    break;
                case 3:
                    obelX = pos3;
                    break;
                default:
                    console.log("invalid position: "+currentPos);
                    break;
            }

            if(pointCheck<points && spawnSpeed>50)
            {
                spawnSpeed-=90;

                pointCheck++;
            }

            if(spawnCountdown>0)
            {
                spawnCountdown--;
            }

            if(spawnCountdown<=0)
            {
                witchCop = getRandomInt(1, 6);

                witchLane = getRandomInt(1,3)

                switch(witchCop)
                {
                    case 1:
                        if(!ifP1)
                        {
                            ifP1 = true;
                            p1Lane = witchLane;
                        }
                        break;
                    case 2:
                        if(!ifP2)
                        {
                            ifP2 = true;
                            p2Lane = witchLane;
                        }
                        break;
                    case 3:
                        if(!ifP3)
                        {
                            ifP3 = true;
                            p3Lane = witchLane;
                        }
                        break;
                    case 4:
                        if(!ifP4)
                        {
                            ifP4 = true;
                            p4Lane = witchLane;
                        }
                        break;
                    case 5:
                        if(!ifP5)
                        {
                            ifP5 = true;
                            p5Lane = witchLane;
                        }
                        break;
                    case 6:
                        if(!ifP6)
                        {
                            ifP6 = true;
                            p6Lane = witchLane;
                        }
                        break;
                    default:
                        console.log("invalid cop: p"+witchCop);
                        break;
                }
                spawnCountdown = spawnSpeed;
            }

            if(ifP1)
            {
                switch(p1Lane)
                {
                    case 1:
                        context.drawImage(p1, pos1, p1Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p1, pos2, p1Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p1, pos3, p1Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p1Lane);
                        break;
                }

                p1Y+=copSpeed;
            }

            if(p1Y>=510)
            {
                ifP1=false;
                p1Y=-100;
                points++;
                copSpeed++;
            }

            if(ifP2)
            {
                switch(p2Lane)
                {
                    case 1:
                        context.drawImage(p2, pos1, p2Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p2, pos2, p2Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p2, pos3, p2Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p2Lane);
                        break;
                }

                p2Y+=copSpeed;
            }

            if(p2Y>=510)
            {
                ifP2=false;
                p2Y=-100;
                points++;
            }

            if(ifP3)
            {
                switch(p3Lane)
                {
                    case 1:
                        context.drawImage(p3, pos1, p3Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p3, pos2, p3Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p3, pos3, p3Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p3Lane);
                        break;
                }

                p3Y+=copSpeed;
            }

            if(p3Y>=510)
            {
                ifP3=false;
                p3Y=-100;
                points++;
            }

            if(ifP4)
            {
                switch(p4Lane)
                {
                    case 1:
                        context.drawImage(p4, pos1, p4Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p4, pos2, p4Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p4, pos3, p4Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p4Lane);
                        break;
                }

                p4Y+=copSpeed;
            }

            if(p4Y>=510)
            {
                ifP4=false;
                p4Y=-100;
                points++;
            }

            if(ifP5)
            {
                switch(p5Lane)
                {
                    case 1:
                        context.drawImage(p5, pos1, p5Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p5, pos2, p5Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p5, pos3, p5Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p5Lane);
                        break;
                }

                p5Y+=copSpeed;
            }

            if(p5Y>=510)
            {
                ifP5=false;
                p5Y=-100;
                points++;
            }

            if(ifP6)
            {
                switch(p6Lane)
                {
                    case 6:
                        context.drawImage(p6, pos1, p6Y, 100, 100);
                        break;
                    case 2:
                        context.drawImage(p6, pos2, p6Y, 100, 100);
                        break;
                    case 3:
                        context.drawImage(p6, pos3, p6Y, 100, 100);
                        break;
                    default:
                        console.log("invalid lane: " + p6Lane);
                        break;
                }

                p6Y+=copSpeed;
            }

            if(p6Y>=510)
            {
                ifP6=false;
                p6Y=-100;
                points++;
            }

            switch(pos)
            {
                case 1:
                    currentPos=pos1;
                    break;
                case 2:
                    currentPos=pos2;
                    break;
                case 3:
                    currentPos=pos3;
                    break;
                default:
                    console.log("invalid position: "+pos);
            }
            context.drawImage(obelPic, currentPos, 400, 100, 100);

            if(pos==p1Lane && p1Y>300)
            {
                spil=false;
            }
            
            if(pos==p2Lane && p2Y>300)
            {
                spil=false;
            }

            if(pos==p3Lane && p3Y>300)
            {
                spil=false;
            }            

            if(pos==p4Lane && p4Y>300)
            {
                spil=false;
            }

            if(pos==p5Lane && p5Y>300)
            {
                spil=false;
            }

            if(pos==p6Lane && p6Y>300)
            {
                spil=false;
            }
       }

        if(!spil)
        {
            context.fillText("GAME OVER!", 80, 290);
            context.font = "40px Arial";
            context.fillText("control+r for genstart", 80, 400);
        }

        setTimeout(politi, 1);
    }

    politi();
}
