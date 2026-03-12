function main(cb) {
    console.log('Operation 1');
    document.getElementById('demo').innerHTML += `Operation 1<br>`;
    setTimeout(()=>{
        console.log('Operation End');
        document.getElementById('demo').innerHTML += `Operation end`;
    },2000)
    
    console.log('Operation 2');
    document.getElementById('demo').innerHTML += `<br>Operation 2<br>`;

    cb()
}
function fun(result) {
    console.log('Final Answer',result);
    document.getElementById('demo').innerHTML += `<br>Final Answer `;
}
// main(fun)



// Write a js code that display ”Hello” with increasing font size in interval of 50ms in blue colour and it should stop when font size reaches to 50px.
function incrSize() {
    var a = document.getElementById('hello');
    a.style.color = 'blue';
    inc = 0;
    cs = 20;
    setInterval(()=>{
        if (a.style.fontSize==='50px') {
            return
        }
        cs+=inc;
        a.style.fontSize = cs+'px';
        inc+=10;
    },1000)
}

function incrSizeClick() {
    document.getElementById('btn').style.display = "none";
    var a = document.getElementById('hello2');
    inc = 0;
    cs = 20;
    setInterval(()=>{
        if (a.style.fontSize==='50px') {
            return
        }
        cs+=inc;
        a.style.fontSize = cs+'px';
        inc+=10;
    },1000)
}
incrSize()


// Time run addition done
var timer;
function reset() {
    clearInterval(timer);
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    a.value = 2;
    b.value = 5;
    document.getElementById('result').innerHTML = Number(a.value)+Number(b.value);
}
function run() {
    clearInterval(timer);
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    timer = setInterval(()=>{
        document.getElementById('result').innerHTML = a+b;
        console.log(a+b);
        a+=1;
        b+=1;
    },1000)
}


var timer1;
var isStop;
function increaseFont() {
    isStop = false;
    clearInterval(timer1);
    var size = parseInt(document.getElementById('hello3').style.fontSize.split('p')[0]);
    var inc = 0;
    timer1 = setInterval(()=>{
        if ((size===200) || (isStop===true)){
            return
        }
        size += inc;
        document.getElementById('hello3').style.fontSize = size + 'px';
        inc+=15;
    },100)
}
function stopIncDec() {
    isStop = true;
    clearInterval(timer1)
}
function decreaseFont() {
    isStop = false;
    clearInterval(timer1);
    var size = parseInt(document.getElementById('hello3').style.fontSize.split('p')[0]);
    var inc = 0;
    timer1 = setInterval(()=>{
        if ((size===20) || (isStop===true)){
            return
        }
        size -= inc;
        document.getElementById('hello3').style.fontSize = size + 'px';
        inc+=10;
    },100)
}