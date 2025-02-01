let i=1;
while(i<5){
    console.log(i)
    i++;
}

const  sum=function(a,b){
    return a+b;
}
let name="pani";
let hello =function(){
    console.log("hello");
}
 function multiple(fun,count){
    for(i=0;i<count;i++){
        fun();
    }

 }
let greet=function(){
    console.log("hiii")
}
multiple(function()  {console.log("pavani")},1000);
let odd=function(n){
    console.log(!(n%2==0))

}
let even =function(n){
    console.log(n%2==0);
}
function oddOreven(request){
    if(request==odd){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
   
    else if(request==even){
        let even=function(n){
            console.log(n%2==0);

        }
        return even;

    }
    else{
        console.log("wrong reuest")
    }

    }
const calculator ={

   
    add:function(a,b){
        return(a+b);
    },
    sub:function(a,b){
        return(a-b);
    },
    multiplication:function(a,b){
        return (a*b);
    }

}
const mul=(a,b)=>(
    a*b
)
const pani=(c,d)=>(c**d)

console.log("hii everyone");
setTimeout( ()=>{console.log("my name is pavani"); },9000);
console.log("welocome to my world");



