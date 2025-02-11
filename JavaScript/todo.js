// let db=[];
// let userip=prompt("Please Enter a Input");
// while(true){
//     if (userip.toLowerCase()=="list"){
//         console.log("-------------------------");
//         console.log("User Entered List For View the Lists");
//         for(let i=0;i<db.length;i++){
//             console.log(i+":"+db[i]);
//         }
//         userip=prompt("Please Enter a Input");
//     }
//     else if(userip.toLowerCase()=="add"){
//         console.log("-------------------------");
//         console.log("User Entered add For Adding New List");
//         let newtodo=prompt("Please Enter a New Todo");
//         db.push(newtodo);
//         console.log("Added New Todo");
//         console.log("-------------------------");
//         userip=prompt("Please Enter a Input");
//     }
//     else if(userip.toLowerCase()=="del"){
//         console.log("-------------------------");
//         console.log("User Entered Delete For Deleting the List");
//         let index=prompt("Enter the Index of Todo to Delete");
//         db.splice(index,1);
//         console.log("Deleted Todo");
//         console.log("-------------------------");
//         userip=prompt("Please Enter a Input");
//     }
//     else if(userip.toLowerCase()=="quit"){
//         console.log("-------------------------");
//         console.log("User Entered Quit For Exiting the App");
//         console.log("Exiting the App");
//         console.log("-------------------------");
//         break;
//     }
//     else{
//         console.log("-------------------------");
//         console.log("Invalid Input");
//         console.log("-------------------------");
//         userip=prompt("Please Enter a Input");
//     }
// }

// const student={
//     name:"Hemakoti Bonthada",
//     age:25,
//     interests:['Coding','Reading','Writing','Sleeping'],
//     marks:78.85,
//     maritialStatus:"Married",
//     spouse:"Tejasri"
// };

// const post={
// username:"Hemakoti.bonthada",
// content:"Hello World, Now I'm Free from Social Media and But This Is The Post Which I Want To Share About My Status.",
// comments:["Wow","Nice","Good","Superb","Excellent",'Pakkaki Poi Adukomma'],
// likes:1,
// shares:1,
// tags:["#NoSocialMedia","#NoFacebook","#NoInstagram","#NoTwitter"],
// location:"India",
// reposts:0
// };

// // let maxnum=prompt("Please Enter a Maximum Number or to Quit the Game Enter quit or q: ");
// // //maxnum=parseInt(maxnum);
// // let rnum=Math.floor(Math.random()*maxnum)+1;
// // while(maxnum!='q'){
// //     let Guess=prompt("Please Guess The Number and Enter");
// //     //Guess=parseInt(Guess);
// //     if (rnum==Guess){
// //         console.log("Congrats You Guessed The Correct Number");
// //         break;
// //     }
// //     else if(Guess=="quit" || Guess=="q"){
// //         break;
// //     }
// //     else{
// //         console.log("Your Guess the Wrong number please try again");
// //     }
    
// // }


// // function poem(k){
// //     if (k=="jony"){
// //         console.log("Johny Johny Yes Papa");
// //         console.log("Eating Sugar No Papa");
// //         console.log("Telling Lies No Papa");
// //         console.log("Open Your Mouth Ha Ha Ha");
// //     }
// //     else if(k=="twinkle"){
// //         console.log("Twinkle Twinkle Little Star");
// //         console.log("How I Wonder What You Are");
// //         console.log("Up Above The World So High");
// //         console.log("Like A Diamond In The Sky");
// //     }
// //     else{
// //         console.log("Invalid Input");
// //     }

// // }
// // let n=prompt("Please Enter a Poem Name");
// // poem(n);
// let majors={};
// let minors={};
// let count=0;
// id();
// createuser();

// function isadult(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function id(count){
//     let newusercount=`user${count}`;
//     return newusercount;
// }

// function createuser(){
//         let uname=prompt("Please Enter your name: ");
//         let age=prompt("Enter your age : ");
//         if (isadult(age)){
//             console.log("User is eligible to have access.");
//             majors[id(count)]={name:uname,age:age};
//             console.log(majors);
//             count++;
//         }else{
//             console.log("user not eligible to have access.");
//             minors[id(count)]={name:uname,age:age};
//             console.log(minors);
//             count++;
//         }
// }
// let uname=prompt("Please Enter your name: ");
// let age=prompt("Enter your age : ");
// id();
// if (isadult(age)==true){
//     console.log("User is eligible to have access.");
//     majors[id(count)]={name:uname,age:age};
//     console.log(majors);
//     count++;
// }else{
//     console.log("user not eligible to have access.");
// }


// function MultiplicationTable(num){
//     for(let i=1;i<=20;i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// let num=prompt("Please Enter the Table Number that you wanna see: ");
// MultiplicationTable(num);


// function sumofPrime(n){
//     let sum=0;
//     for (let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }

// let n=prompt("Please Enter the Number That You Wanna Know The Prime Sum: ");
// console.log(sumofPrime(n));

// const Hema=function(a,b){
// console.log("Hemakoti Bonthada Here.!"+ a*b);
// }
// Hema(10,20);
// function Hemakoti(a,b){
//     for(let i=0;i<b;i++){
//         a(i);
//     }
// }
// const a=function(i){
//     console.log(`This is a High order Function and it's going to be run on n Times and the value of n is ${i} for this time`);
// }

// let b=prompt("Please enter how many times function needs to be run!")
// Hemakoti(a,b);

// function oddeventest(req){
//     if (req=="odd"){
//         return function(n){
//             console.log(!((n%2)==0));
//         }
//     }
//     else if(req=="even"){
//         return function(n){
//             console.log((n%2)==0);
//         }
//     }
//     else{
//         console("Please Enter proper input which is Either even or odd only.");
//     }
// }

// const calculator=
// {
//  add:function(a,b){
//     return a+b;
//  },
//  sub:function(a,b){
//     return a-b;
//  },
//  mul:function(a,b){
//     return a*b;
//  },
//  div:function(a,b){
//     return a/b;
//  }
// }


// const Hema={
//    full_name:"Hema Koteswar Naidu",
//    profession:"Software Engineer(TCS), DevOps(Microsoft) || CEO Of Infinity Innovations and Solutions Pvt Ltd.",
//    age:25,
//    location:"Hyderabad",
//    getmybio(){
//       let mydetails=("I am "+this.full_name+" I'm Working as"+this.profession+" My Age is: "+this.age+" Now i'm in "+this.location);
//       console.log(mydetails)
//       try{
//          if (this.age>20){
//             console.log("Nuvvu Peddodivi Aipoyav Basu..!");
//          }
//       }
//          catch(err){
//             console.log("Nuvvu This Key Word Use Cheyyale Ga ??");
//             console.log(err);
//          }
//    }
// }
// console.log("This is a Print Statment");
// Hema.getmybio();

// console.log("This is a Print Statment-2");


// const arrow=(n)=>{
//    console.log("This is a Arrow Function: ");
//    return n**10;
// }


// const hema=(n,m)=>(n**m);

// console.log("Hey There!");
// setTimeout(()=>{console.log("This is 1st Second");},1000);
// setTimeout(()=>{console.log("This is 2nd Second");},2000);
// setTimeout(()=>{console.log("This is 3rd Second");},3000);
// setTimeout(()=>{console.log("Hemakoti Here..");},4000);
// console.log("Hemakoti Here will print after 4 seconds: -.");


// console.log("Hey There!");
// setTimeout(testfunction,3000);
// let n=25;
// function testfunction(){
//     console.log("This is a Test Function That needs to delay for 3 sec");
// }

// const funname=(n)=>{
//     console.log("This is hemakoti bonthada");
//     if (n>=20){
//         console.log(`Your Age is Greater than or Equal To 20 and Your Entered Age is ${n}`);
//     }
// }

// // const funwithreturn=n=>(n**10);
// try{
//     console.log(`This is the value of a in the Normal Function class: ${this.a}`);
//     console.log(this);
// }catch(err){
//     console.log("This is a Catch Block");
//     console.log(err);
// };
// let a=33;
// const Hemakoti={
//     a:10,
//     k: function(){
//         a=44;
//         console.log(`This is the value of a in the Normal Function class: ${this.a}`);
//     },
//     t:()=>{
//         console.log(`This is the value of a in arrow function class: ${this.a}`);  
//     },
//     getinfo1:
//     function(){
//     setTimeout(()=>{
//         console.log(this);
//         console.log("This is Arrow Function!")
//         console.log(this.a);
//     },1500);
//     },
//     getinfo2:
//     function(){
//         setTimeout(function(){
//             console.log("This is Normal Function!")
//             console.log(this);
//             console.log(this.a);
//         },1500);
//         },
// }



// let hema=setInterval(testfunction,1500);
// let koti=setInterval(funname,1500);
// console.log(`This is the id for hema function : ${hema}`);
// console.log(`This is the id for koti function : ${koti}`);

//Hemakoti;
const sqareofn=(n)=>{
    return (n**2);
};
const sqaonfn=(n)=>(n**2);


// let hw=setInterval(()=>{
//     console.log("Hello World");
// },2000);
// setTimeout(()=>{
//         clearInterval(hw);
//     },10000);
const student=[{
        name:"Hemakoti Bonthada",
        age:25,
        interests:['Coding','Reading','Writing','Sleeping'],
        marks:78.85,
        maritialStatus:"Married",
        spouse:"Tejasri"
    },
    {
        name:"Tejasri Bonthada",
        age:23,
        interests:['Coding','Reading','Writing','Sleeping'],
        marks:98.85,
        maritialStatus:"Married",
        spouse:"Hemakoti Bonthada"
    },
    {
        name:"Pavani Ganta",
        age:23,
        interests:['Coding','Reading','Writing','Sleeping'],
        marks:90,
        maritialStatus:"Single",
        spouse:"NA"
    }
]
// console.log("Traditional Method");
// for (el of student){
//     console.log(el.name);
//}
// for (let i=0;i<student.length();i++){
//     console.log(student.name);
// }

// console.log("by calling function name method");
// function names(name){
//     console.log(name.name);
// }
// student.forEach(names);

// console.log("By Passing Function Method");
// student.forEach(function(names){
//     console.log(names.name);
// });

// console.log("by using Arrow Function Method");
// student.forEach((student)=>{
//     console.log(student.name);
// });

// let z=[];
// numbers.forEach(function(el){
//     console.log(el);
//     z+=(el**el)+" ,";
// });
// let k=numbers.map(function(el){
//     console.log(el);
//     return el**el;
// });
// let gpa=numbers.map((el)=> (el/10));
// gpa.forEach(function(el){
//     console.log(`${el}`)});

// let fil=numbers.filter((el)=>{
//     return el <56;
// })
let num=[10,22,33,100,2000,343,2333,44,55,5555,10000];
let str="Hemakotibonthada";
// let everychecking=numbers.every((el)=>(el%2==0));
// console.log(everychecking); 
// let sumchecking=numbers.some((el)=>(el%2==0));
// console.log(sumchecking); 
//  let sum=numbers.reduce((res,el)=>(res+el));
// console.log(sum);
max=-1;
// for (let i=0 ; i<numbers.length;i++){
//     if (max<numbers[i]){
//         max=numbers[i];
//     }
// }
// let answer=numbers.reduce((max,el)=>{
//     if ((el%10)==0){
//         console.log(el);
//            return el;
//       }
// })
// let min=10000;
//  min=numbers.reduce((min,el)=>{
//     if (min>el){
//            return el;
//       }else{
//        return min;
//       }
// })
// console.log(`this is the minumum value in the array ${min}`);
// function def(a,b=2){
//     return a+b;
// }
even=[];
odd=[]
for (let i=0,j=0;i<=100;i++){
    if(i%2==0){
    even[j]=i;
    j++;
    }
}
for (let i=0,j=0;i<=100;i++){
    if(i%2!=0){
    odd[j]=i;
    j++;
    }
}
let my={
    name:"Hema Koteswar Naidu",
    mail:"Hemakotibonthada@gmail.com",
    username:"Hemakoti.bonthada",
    password:"Pakkaki poi aduko",
    city:"HYD"
};

let {username:user,password:pass,city}=my;
let my1={...my,ph:9966123105,...even};
Math.min();

function sum(...args){
    return args.reduce((res,el)=>(res+el));
}

let pillulu=["Hema Koteswar Naidu",'Teja Naidu','Pavani Ganta','RamZan Shaik']
let [stupid, topper,...others]=pillulu;


