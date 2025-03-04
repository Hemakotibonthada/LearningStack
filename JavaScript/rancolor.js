let btn=document.querySelector('button');

let h2=document.querySelector('h2');
let div=document.querySelector('div');

btn.addEventListener('click',function(){
    console.log('btn clicked!');
    console.log('Color Updated!');
    let k=rancolor();
    
    h2.innerText=k;
    div.style.backgroundColor=k;
    h2.addEventListener('click',function(){
        console.log(`user picked the color of ${k}`);
    })
});

function rancolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`
    return color;
}

h2.addEventListener('click',function(){
    console.log(`user picked the color.`);
})
div.addEventListener('mouseenter',function(){
    console.log('user is inside the div');
})