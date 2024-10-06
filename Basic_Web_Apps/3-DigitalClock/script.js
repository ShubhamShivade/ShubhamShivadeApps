const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    // console.log(Date.now());
    // console.log((Math.random()+1))
    clock.innerHTML = date.toLocaleTimeString();
},1000)
