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

const calculator=
{
 add:function(a,b){
    return a+b;
 },
 sub:function(a,b){
    return a-b;
 },
 mul:function(a,b){
    return a*b;
 },
 div:function(a,b){
    return a/b;
 }
}