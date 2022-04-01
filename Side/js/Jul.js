window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var counter = -100;
    var obel = new Image();
    var obel2 = new Image();
    var obel3 = new Image();
    var obel4 = new Image();
    var obel5 = new Image();
    var obel6 = new Image();

    var obelgains = 1;
    var obelpoint = 0;
    var obelfart = 1;

    var ifPic1 = 0;
    var ifPic2 = 0;
    var ifPic3 = 0;
    var ifPic4 = 0;
    var ifPic5 = 0;

    obel.src = "./obel.png";
    obel2.src = "./obel2.jpg";
    obel3.src = "./obel3.png";
    obel4.src = "./obel4.png";
    obel5.src = "./obel5.png";
    obel6.src = "./obel6.png";

    function ObelPic1() {
        if (obelpoint >= 50) {
            obelpoint -= 50
            obelgains += 1;
            ifPic1 += 1;
        }
    }

    function ObelPic2() {
        if (obelpoint >= 100) {
            obelpoint -= 100
            obelgains += 3;
            ifPic2 += 1;
        }
    }

    function ObelPic3() {
        if (obelpoint >= 500) {
            obelpoint -= 500
            obelgains += 15;
            ifPic3 += 1;
        }
    }

    function ObelPic4() {
        if (obelpoint >= 5000) {
            obelpoint -= 5000
            obelgains += 200;
            ifPic4 += 1;
        }
    }

    function ObelPic5() {
        if (obelpoint >= 100000) {
            obelpoint -= 100000
            obelfart += 10
            ifPic5 += 1;
        }
    }

    function ObelPic10() {
        if (obelpoint >= 500) {
            obelpoint -= 500
            obelgains += 10;
            ifPic1 += 10;
        }
    }

    function ObelPic20() {
        if (obelpoint >= 1000) {
            obelpoint -= 1000
            obelgains += 30;
            ifPic2 += 10;
        }
    }

    function ObelPic30() {
        if (obelpoint >= 5000) {
            obelpoint -= 5000
            obelgains += 150;
            ifPic3 += 10;
        }
    }

    function ObelPic40() {
        if (obelpoint >= 50000) {
            obelpoint -= 50000
            obelgains += 2000;
            ifPic4 += 10;
        }
    }

    function ObelPic50() {
        if (obelpoint >= 1000000) {
            obelpoint -= 1000000
            obelfart += 100
            ifPic5 += 10;
        }
    }

    function ObelPic100() {
        if (obelpoint >= 5000) {
            obelpoint -= 5000
            obelgains += 100;
            ifPic1 += 100;
        }
    }

    function ObelPic200() {
        if (obelpoint >= 10000) {
            obelpoint -= 10000
            obelgains += 300;
            ifPic2 += 100;
        }
    }

    function ObelPic300() {
        if (obelpoint >= 50000) {
            obelpoint -= 50000
            obelgains += 1500;
            ifPic3 += 100;
        }
    }

    function ObelPic400() {
        if (obelpoint >= 500000) {
            obelpoint -= 500000
            obelgains += 20000;
            ifPic4 += 100;
        }
    }

    function ObelPic500() {
        if (obelpoint >= 10000000) {
            obelpoint -= 10000000
            obelfart += 1000
            ifPic5 += 100;
        }
    }

    document.getElementById("obelKnap1").onclick = function () { ObelPic1() };
    document.getElementById("obelKnap2").onclick = function () { ObelPic2() };
    document.getElementById("obelKnap3").onclick = function () { ObelPic3() };
    document.getElementById("obelKnap4").onclick = function () { ObelPic4() };
    document.getElementById("obelKnap5").onclick = function () { ObelPic5() };

    document.getElementById("10knap1").onclick = function () { ObelPic10() };
    document.getElementById("10knap2").onclick = function () { ObelPic20() };
    document.getElementById("10knap3").onclick = function () { ObelPic30() };
    document.getElementById("10knap4").onclick = function () { ObelPic40() };
    document.getElementById("10knap5").onclick = function () { ObelPic50() };

    document.getElementById("100knap1").onclick = function () { ObelPic100() };
    document.getElementById("100knap2").onclick = function () { ObelPic200() };
    document.getElementById("100knap3").onclick = function () { ObelPic300() };
    document.getElementById("100knap4").onclick = function () { ObelPic400() };
    document.getElementById("100knap5").onclick = function () { ObelPic500() };

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39) {
            counter += 25;
        }
    });



    function animate() {
        console.log(obelgains);

        obelpoint += obelAdd;
        obelAdd = 0;

        context.fillStyle = "black";
        counter = counter + obelfart;
        context.clearRect(0, 0, 1022, 700);

        setTimeout(animate, 10);
        if (counter > 1050) {
            obelpoint += obelgains;
            counter = 0;
        }

        if (ifPic1 > 0) {
            context.drawImage(obel2, 10, 260, 150, 200)
        }

        if (ifPic2 > 0) {
            context.drawImage(obel3, 170, 260, 150, 200)
        }

        if (ifPic3 > 0) {
            context.drawImage(obel4, 330, 260, 150, 200)
        }

        if (ifPic4 > 0) {
            context.drawImage(obel5, 490, 260, 150, 200)
        }

        if (ifPic5 > 0) {
            context.drawImage(obel6, 650, 260, 150, 200)
        }

        context.fillStyle = "red";
        context.font = "50px Chiller";

        context.drawImage(obel, counter, 0, 150, 200)
        context.fillText("Obelpoint = " + obelpoint, 10, 250)
        context.fillText("Obelgains = " + obelgains, 10, 550)

        context.fillStyle = "red";
        context.font = "50px TimesNewRoman";
        context.fillText(ifPic1, 10, 310)
        context.fillText(ifPic2, 170, 310)
        context.fillText(ifPic3, 330, 310)
        context.fillText(ifPic4, 490, 310)
        context.fillText(ifPic5, 650, 310)
    }
    animate();

    function obelKode(x)
    {
        obelpoint += x;
    }
};

var obelAdd = 0;

function obelKode(x)
    {
        obelAdd += x;
        console.log("obel kode: "+x);
    }
