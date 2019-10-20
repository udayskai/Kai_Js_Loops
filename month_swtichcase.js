"use strict"

// find number of days in a month
let Month = "march";
let Month_days=undefined;
 
switch (Month) {
    case "january":
         Month_days="31/1st month";
        break;
    case "march":
         Month_days="28/2nd";
        break;
    case "march":
        Month_days="31/3rd ";
        break;
    case  "april":
        Month_days="30/4th month";
        break; 
      
    default: Month_days="Enter only First 4 months";
        break;
}

document.write( Month_days);
