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
//this keyword

const student = {
    name: 'pavani',
    age: 23,
    eng: 95,
    math: 97,
    os: 95,
    getAvg() {
        let avg = (this.eng + this.math + this.os) / 3;
        console.log(`${this.name} got avg marks ${avg}`); 
    }
};
const number=(e)=>{
    return e*e;
}

const  hw=(()=>{
    console.log("hello world");

},2000);
let arr=[1,2,3,4,5];
let num=function(m){
    console.log(m);
}
arr.forEach(num);
let arr1=[
    {
        name:'teju',
        age:23,
        study:'MCA'

    },
    {
        name:'isu',
        age:23,
        study:'MCA'
    },
    {
        name:'pavani',
        age:23,
        study:'MCA'
    }
];

arr1.forEach((data)=>{
    console.log(data);
    
});
arr1.forEach((data)=>{
    console.log(data.name);
    console.log(data.age);

});
arr1.forEach((data)=>{
    console.log(`length of ${data.name}:`, data.name.length)

    });
    //array size
    for(i=0;i<arr1.length;i++){
        console.log("array size");
        console.log(arr1.length);
    }
 
console.log("map function");
let s =[1,2,3,4];
let double=s.map(function(el){
return el*2;

});
console.log(double);
console.log("****");
let n= [1,3,4,6,7,9,10];
let ans = n.filter((el)=>{
   return el>5;

});
console.log(ans);
console.log("**************");
 let array = [5,3,8,7,10];
max=1;
for(let i=0;i<array.length;i++){
    if(max<array[i]){
       max=array[i];
    }
}
console.log(max);






