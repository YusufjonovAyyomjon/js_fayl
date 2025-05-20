// for (let i = 0; i < 5; ++i)console.log(i); // ++ tenglagan veraybil dan oldin kelsa avval 1 ga oshiradi sababi js chapdan o'nga code larni o'qib boradi masalan 1+2=3  1+3=4  1+4=5

// for (let j = 0; j < 5; j++)console.log(j); //++ tenglagan veraybil dan keyin kelsa  +1 shunaqa qo'shadi ya'ni qadamini 1ga oshiradi masalan 2+1 =3  3+1=4  4+1=5
let yosh = +prompt("Iltimos, 100 dan katta son kiriting:");

while (true) {

  if (yosh <= 100) {
    +prompt("100 dan katta son kiriting")
    console.log("100 dan katta son kiriting");
    
    break;
  }
  else if(yosh === null || yosh===""){
    console.log("sz bo'sh stirin kirittingiz");
    break;
  }

  else{
    console.log("sz 100 dan katta son kirittingiz");
    
  }
}