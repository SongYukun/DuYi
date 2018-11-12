// 将数字及大小写字母存进Arr中
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 65; i < 122; i++) {
    if (i > 90 && i < 97) {
        continue;
    }
    arr.push(String.fromCharCode(i));
}

// 创建canvas区域
var canvasStr, value;
function createCanvas() {
    canvasStr = '';
    value = '';
    // 在arr中随机取出6位作为展示在canvas区域的字符串
    for (var i = 0; i < 6; i++) {
        var a = arr[Math.floor(Math.random() * arr.length)]
        canvasStr += a + ' ';
        value += a;
    }
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    var x = myCanvas.width / 2;
    var oImg = new Image();
    oImg.src = './images/bg.jpg';
    oImg.onload = function () {
        // 在canvas内重复图片元素作为背景
        var pattern = ctx.createPattern(oImg, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        // 填充canvas文字内容
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ccc';
        ctx.font = '46px Roboto Slab';
        // 设置文字得倾斜
        ctx.setTransform(1, -0.12, 0.2, 1, 0, 12);
        ctx.fillText(canvasStr, x, 60);
    }
}
createCanvas();
bindevent()
function bindevent() {
    var submit = document.getElementsByClassName('submit')[0];
    var refresh = document.getElementsByClassName('refresh')[0];
    submit.addEventListener('click', function () {
        showResult();
    });
    refresh.addEventListener('click', function () {
        createCanvas();
    })
}


// 展示结果函数   
function showResult() {
    var input = document.getElementsByClassName('input')[0];
    var errorText = document.getElementsByClassName('errorText')[0];
    var test = document.getElementsByClassName('test')[0];
    var inputValue = input.value;
    if (value !== inputValue) {
        errorText.style.display = 'inline-block';
        errorText.innerText = '验证码错误，请重新输入';
        test.style.display= 'inline-block';
        test.style.backgroundImage = 'url("./images/false.png")';
        createCanvas();
    } else {
        test.style.display= 'inline-block';
        test.style.backgroundImage = 'url("./images/true.png")';
        createCanvas();
    }
}