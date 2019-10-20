"use strict"


let Array_Name=["India", "Pakistan", "China","SriLanka", "Bangladesh", "Nepal"," Bhutan"];


// for of data 
for(let Result_Array of Array_Name){
    document.write(` <h1>${Result_Array} </h1> <br/> `);
    // document.write( "</br>");
}


//for in - use for data position
for(let Result_Array in Array_Name){
    document.write(` <h1>${Result_Array} </h1> <br/> `);
    // document.write( "</br>");
}
"</br>"





//  While loop 1.
let i=0;
while (i< Array_Name.length) {

    console.log(Array_Name[i]);
    i++;
    i++;
}

// 2. 
// let i=0;
// while (i<100) {

//     console.log();
//     i++;
//     i++;
// }


// break ;
let Array_Name1=["Inddddddia", "Pakdddddistan", "Chdddina","SriddddddLanka", "Bangddddladesh", "Neddpal"," Bhutan"];
let result3=undefined;
for(result3 of Array_Name1){
    console.log(result3);
    
    if(result3=="Chdddina"){
        console.log(" we end here ");
        break;
    }

}

// continue 
let Array_Name2=[1,2,3,5,4,7,8,9,0,0,5,2,3];
let result5=undefined;
for(result5 of Array_Name2){
    
    
    if(result5[i]===0){
        console.log("no zero");
        continue;
    }
console.log(result5);
}