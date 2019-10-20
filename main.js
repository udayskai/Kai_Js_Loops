"use strict"

  
 // square
for( let count1=0; count1<5;count1++)
{
   for( let count2=0;count2<5;count2++)
   {
        document.write( "*");
   }
   document.write("<br/>");
}
document.write("<br>");
document.write("<br>");


//pyramid  right assinding
for(let count3=0;count3<5;count3++){

    for(let count4=0;count4<=count3;count4++) {
         document.write("*");
    }
    document.write("<br/>");
}
document.write("<br>");
document.write("<br>");



//pyramid  right 
for(let count5=0;count5<5;count5++){

    for(let count6=5;count6>count5;count6--) {
         document.write("*");
    }
    document.write("<br/>");
   
}

//password length checker
let age="xxx0@s";
if(age.length>=8||age.includes("@")&&age.length>5 ){
     console.log("Correct")
}
else{
   console.log("To short or not contain @")
}


