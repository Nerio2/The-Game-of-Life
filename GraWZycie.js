var x = 50;
var y = 50;
var interval
function render()
{
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            document.write("<div onclick=\"zaznacz(this)\" class=\"TGLnz\" id=\"" + i + "x" + j + "\"></div>");
            if (j == x - 1) document.getElementById(i + "x0").style.clear = "both";
        }
    }
}

function zaznacz(obj)
{
    if (obj.className != "TGLzz")
        obj.className = "TGLzz";
    else obj.className = "TGLnz";
}

function ruch()
{
    var calosc = new Array(50);
    for (var i = 0; i < 50; i++)
        calosc[i] = new Array(50);
    var nowe = new Array(50);
    for (var i = 0; i < 50; i++)
        nowe[i] = new Array(50);
    for (var i = 0; i < x; i++)
    {
        for (var j = 0; j < y; j++)
        {
            if (document.getElementById(i + "x" + j).className != "TGLzz")
                calosc[i][j] = 0;
            else calosc[i][j] = 1;
        }
    }
    for (var i = 0; i < x; i++)
    {
        for (var j = 0; j < y; j++)
        {
            var sasiedzi = 0;
            if (i > 0 && j > 0 && calosc[i - 1][j - 1] == 1) sasiedzi++;
            if (i > 0 && calosc[i - 1][j] == 1) sasiedzi++;
            if (i > 0 && j < 49 && calosc[i - 1][j + 1] == 1) sasiedzi++;
            if (j > 0 && calosc[i][j - 1] == 1) sasiedzi++;
            if (j < 49 && calosc[i][j + 1] == 1) sasiedzi++;
            if (i < 49 && j > 0 && calosc[i + 1][j - 1] == 1) sasiedzi++;
            if (i < 49 && calosc[i + 1][j] == 1) sasiedzi++;
            if (i < 49 && j < 49 && calosc[i + 1][j + 1] == 1) sasiedzi++;

            if (calosc[i][j] == 0 && sasiedzi == 3) nowe[i][j] = 1;
            else if (calosc[i][j] == 1 && sasiedzi > 3 || sasiedzi < 2) nowe[i][j] = 0;
            else if (calosc[i][j]==1) nowe[i][j] = 1;
        }
    }
    for (var i = 0; i < x; i++)
    {
        for (var j = 0; j < y; j++)
        {
            if (nowe[i][j] == 1) document.getElementById(i + "x" + j).className = "TGLzz";
            else document.getElementById(i + "x" + j).className = "TGLnz";
        }
    }
}

function auto(a)
{
    var j = parseInt(document.getElementById("time").value);
    if (!isNaN(j))
    {
        clearInterval(interval);
        interval = setInterval(function () { ruch() }, 1 / j * 1000);
        automat = true;
    }
    else clearInterval(interval);
    if (a) clearInterval(interval);
    
}

function stopauto()
{
    clearInterval(interval);
}