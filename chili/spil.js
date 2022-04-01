window.onload=function()
{
    var canvas = document.getElementById('spilCanvas');
    var context = canvas.getContext('2d');
    var chiliImg = new Image();
    chiliImg.src = 'chili.png';
    var karamelImg = new Image();
    karamelImg.src = 'guldbar.png';
    var obelImg = new Image();
    obelImg.src = 'hentai.jpg';
    var bordImg = new Image();
    bordImg.src = 'bord.png';
    var obelPng = new Image();
    obelPng.src = 'obel.png';
    var talebobleImg = new Image();
    talebobleImg.src = 'taleboble.png';
    var chiliObelImg = new Image();
    chiliObelImg.src = 'obelJumpscare.png';
    var baggrund = new Image;
    baggrund.src = 'toilet.jpg';
    var count = 13
    var karamelRot = [];
    var pInput = 3

    var spilBool = true;
    var compTur = true;
    var playerTur = false;
    var videre = true;
    var videreCount = 0;

    var title;
    var obelSnak = "Min tur";
    var buttonColor = "#f6fc79";
    var selection = 1;
    var buttonCount = 1;

    var menu = false;
    var slut = false;
    var bordHeight = 140;

    for (var i = 0; i<count+1; i++)
    {
        karamelRot.push(Math.random() * 6);
    }

    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 39 && selection < buttonCount)
        {
            selection++;
        } else if(event.keyCode == 39)
        {
            selection = 1;
        }

        if(event.keyCode == 37 && selection > 1)
        {
            selection--;
        } else if(event.keyCode == 37)
        {
            selection = buttonCount;
        }

        if(event.keyCode == 13 && videreCount == 0 && spilBool)
        {
            videre = true;
        } else if(event.keyCode == 13 && videreCount == 1 && spilBool)
        {
            count-=selection;
            pInput=selection;
            videre = true;
        } else if (event.keyCode == 13 && !menu)
        {
            menu = true;
        } else if(event.keyCode == 13)
        {
            if(selection == 1)
            {
                spilBool = true;
                menu = false;
                count = 13;
                pInput = 3;
                compTur = true;
                playerTur = false;
                videreCount = 0;
                videre = true;
                karamelRot = [];
                for (var i = 0; i<count+1; i++)
                {
                    karamelRot.push(Math.random() * 6);
                }
            } else
            {
                slut = true;
            }
        }
    });


    function spil()
    {
        if(spilBool)
        {
            context.drawImage(obelPng, 150, 30, 200, 150);
            context.drawImage(bordImg, 0, bordHeight, 500, 250);
            drawKarameller();
            context.font = "50px Arial";
            if(compTur)
            {
                selection = 1;
                context.drawImage(obelPng, 150, 30, 200, 150);
                context.drawImage(bordImg, 0, bordHeight, 500, 250);
                drawKarameller();
                title = "computerens tur";
                obelSnak = "min tur. Jeg tager "+(4-pInput);
                compTur = false;
            }
            if(videre && videreCount == 0)
            {
                count -= 4-pInput;
                playerTur = true;
                videre = false;
                videreCount = 1;
            }
            if(count < 1)
            {
                title = "Du tabte!";
                obelSnak = "Du er en taber.";
                spilBool = false;
                videreCount = 2;
                obelJumpScare();
                return;
            }
            if(playerTur)
            {
                context.drawImage(obelPng, 150, 30, 200, 150);
                context.drawImage(bordImg, 0, bordHeight, 500, 250);
                drawKarameller();
                title = "Din tur. Hvor mange\ntager du?";
                obelSnak = title;
                playerTur = false;
            }
            if(videre && videreCount == 1)
            {
                compTur = true;
                videre = false;
                videreCount = 0;
            }
            context.clearRect(0, 0, 500, 500);
            context.drawImage(baggrund, 0, 0, 500, 500);
            if(!videre && videreCount == 0)
            {
                buttonCount = 1;
                if(selection == 1)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(30, 400, 440, 50);
                context.fillStyle = "black";
                context.fillText("ok", 220, 440);
                context.strokeRect(30, 400, 440, 50);

            } else if(!videre && videreCount == 1)
            {
                buttonCount = 3;
                if(selection == 1)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(30, 400, 136, 50);
                if(selection == 2)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(176, 400, 136, 50);
                if(selection == 3)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(322, 400, 136, 50);
                context.fillStyle = "black";
                context.fillText("1", 85, 440);
                context.strokeRect(30, 400, 136, 50);
                context.fillText("2", 231, 440);
                context.strokeRect(176, 400, 136, 50);
                context.fillText("3", 377, 440);
                context.strokeRect(322, 400, 136, 50);
            }
        } else
        {
            if(!menu)
            {
                context.clearRect(0, 0, 500, 500);
                context.drawImage(baggrund, 0, 0, 500, 500);
                buttonCount = 1;
                if(selection == 1)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(30, 400, 440, 50);
                context.fillStyle = "black";
                context.fillText("ok", 220, 440);
                context.strokeRect(30, 400, 440, 50);
            } else
            {
                context.clearRect(0, 0, 500, 500);
                context.drawImage(baggrund, 0, 0, 500, 500);
                title = "spil igen?";
                obelSnak = "Spil igen?";

                buttonCount = 2;
                if(selection == 1)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(10, 400, 235, 50);
                if(selection == 2)
                {
                    context.fillStyle = buttonColor;
                } else
                {
                    context.fillStyle = "white";
                }
                context.fillRect(255, 400, 235, 50);
                context.fillStyle = "black";
                context.fillText("Ja", 100, 440);
                context.strokeRect(10, 400, 235, 50);
                context.fillText("Nej", 340, 440);
                context.strokeRect(255, 400, 235, 50);

            }
        }

        if(slut)
        {
            idle();
            return;
        }
        context.drawImage(talebobleImg, 300, -15, 200, 150);
        context.font = "15px Arial";
        var lines = obelSnak.split('\n');
        var yOffset = 0;
        for (var i = 0; i<lines.length; i++)
        {
            context.fillText(lines[i], 330, 45+yOffset);
            yOffset+=15;
        }

        context.drawImage(obelPng, 150, 30, 200, 150);
        context.drawImage(bordImg, 0, bordHeight, 500, 250);
        context.font = "50px Arial";
        drawKarameller();
        context.fillStyle = "black";
        setTimeout(spil, 1);
    }

    function drawKarameller()
    {
        var yOffset = 50;
        var xOffset = 160;
        for(var i = 0; i<count; i++)
        {
            context.translate(yOffset+80/2, xOffset+80/2);
            context.rotate(Math.PI / karamelRot[i]);
            context.translate(-(yOffset+80/2), -(xOffset+80/2));
            context.drawImage(karamelImg, yOffset, xOffset, 80, 80);
            yOffset+=60;
            if((i+1)%6 == 0)
            {
                xOffset+=50;
                yOffset = 50;
            }
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
    }

    var i = 0;

    function obelJumpScare()
    {
        context.clearRect(0, 0, 500, 500);
        context.drawImage(baggrund, 0, 0, 500, 500);
        context.drawImage(chiliObelImg, 0, 0, 500, 500);
        setTimeout(spil, 2000);
        return;
    }

    function idle()
    {
        context.clearRect(0, 0, 500, 500);
        context.drawImage(baggrund, 0, 0, 500, 500);

        setTimeout(idle, 1);
    }

    spil();
}
