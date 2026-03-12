setTimeout(()=>{
    function printHi(){
        console.log('Hello World ! after 5s');
    }
    printHi()
},5000)

const va = function() {console.log('Hello');}
// setTimeout(va,5000)

// setTimeout function using es6
dat = new Date().toLocaleDateString()
console.log(dat);
setInterval(()=>{
    tim = new Date().toLocaleTimeString()
    console.log(tim);
},1000)
