let h2=document.querySelector('h2')
let btn=document.querySelector('button')
let p=document.querySelector('p')
let inp=document.querySelector('input')

function colorChange(){
    console.log(this.innerText);
    this.style.backgroundColor='pink';
}

h2.addEventListener('click',colorChange);
btn.addEventListener('click',colorChange);
p.addEventListener('click',colorChange);
inp.addEventListener('keydown',function(event){
    console.log('key pressed.')
    console.log(event.key)
    console.log(event.code)
})