let a = 3, b = 9, s = 27, c=81;
function data (param1, param2,param3,param4){
   let summ = param1+param2+param3+param4;
   return summ / 4;
}

console.log(data (a,b,s,c))


// ===========================================


function data (param1, param2,param3,param4){
   let summ = param1*param2*param3*param4;
   return summ ** (1/4);
}

console.log(data (a,b,s,c))