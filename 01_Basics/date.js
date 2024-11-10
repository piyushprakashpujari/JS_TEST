let myDate=new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());

let myCrate9dDate= new Date(2023,0,23);
//console.log(myCratedDate);
//console.log(myCratedDate.toString());
//console.log(myCratedDate.toDateString());
//console.log(myCratedDate.toLocaleString());
//console.log(myCratedDate.toISOString());

let myCratedDateNew=new Date("01-14-2024")
console.log(myCratedDateNew.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCratedDateNew);
console.log(myCratedDateNew.getTime());

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
     weekday:"short",   
     
    }))


