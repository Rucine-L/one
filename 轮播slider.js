function $(id) {
return document.getElementById(id);
}
window.onload = function() {
let oLeft = $("left");
let oRight = $("right");
let index = 0;
let timer = null;
let pic = $("pic").getElementsByTagName("li");
let num = $("num").getElementsByTagName("li");
let oDiv = $("wrap");
oRight.onclick = function() {
index++;
if (index >= pic.length) {
index = 0;
}
change(index);
}
oLeft.onclick = function() {
index--;
if (index < 0) {
index = pic.length - 1;
}
change(index);
}
oDiv.onmouseover = function() {
clearInterval(timer);
}
oDiv.onmouseout = function() {
timer = setInterval(run, 2000,"yes"); //鼠标移出后重新开始定时器
}
timer = setInterval(run, 4000,"no"); //定时器
function run(a) { //用于定时器的函数
index++;
// 验证timer的
console.log(a);
if (index >= pic.length) {
index = 0;
}
change(index);
}
for (let i = 0; i < num.length; i++) {
num[i].index = i;
num[i].onmouseover = function() {
change(this.index);
}
}
function change(curindex) { //用于切换图片的函数
for (let i = 0; i < pic.length; i++) {
pic[i].style.display = "none";
num[i].className = "";
}
pic[curindex].style.display = "block";
num[curindex].className = "active";
// index = curindex;
}
}
