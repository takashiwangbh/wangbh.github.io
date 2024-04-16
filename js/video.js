// 实现轮播效果
var left = 0;
var timer;
run();
function run(){

    if (left <= -1500)
    {
        left = 0;
    }
    list.style.marginLeft = left + 'px';
    var n = (left % 800 == 0) ? n = 1000 : n = 10;
    left -= 2;
    timer = setTimeout(run,n);
}