

// let a = 1, b = 1;

// let c = ++a; //++ belgisi raqamlar dan oldin kelsa +nechi son bosa oshani qo'shob ketadi masalan 2+2=4 bolsa 4 ga yana 2 qo'shib ketadi.

// let d = b++; //++ belgisi raqamdan orqada kesa undan keyingi songa qo'shadi.

// console.log(c,d);


// let q = 2;

// let x = 1 + (q *= 2)// bu aval q ni ya'ni 2 * 2 =4 chiqadi va 4 + 1 =5 shunaqa chiqadi consolda
// console.log(x);

// console.log("" + 1 + 0); //bunda strin boladi sababi oldida "" belgisi bo'lgani uchun va  consolda 10 chiqib qoladi + belgisi strin uchun ham ishlaydi.

// console.log("" - 1 + 0); // bunda oldidagi "" qabul qilmaydi chunki - borligi uchun + dan boshqa bronta -, *, / strin qabulqilmaydi consolda -1 chiqadi.

// console.log(true + false); // bunda raqam ishtirok etmagani uchun true ni olib auto ravishta 1 chiqaradi.

// console.log(6 / "3"); // bunda / bo'lgani uchun strin qabul qilmay namber ga aylanib ketadi va console da 2 chiqadi

// console.log("2" * "3"); // bu savolda  * belgisi  strin ni qabul qilmaydi va namber ga aylantirib console da 6 chiqaradi.

// console.log(4 + 5 + "px"); //bu savolda aval 4 va 5 ni qo'shib oladi va yonida strin bo'lgani uchun strin ma'lumot deb yonidan qo'shib qo'yadi masalan 4+5=9 va 9px stringa o'tkaziladi

// console.log("$" + 4 +5); // bunda + belgisi strin ni qabul qilgani uchun strin malumot ga aylanib console da $45 ya'ni yonidan qo'shib qoyadi

// console.log("4" - 2); // buyerda - qatnashganligi uchun namber ga aylanib 4 -2 bo'lib javobi 2 chiqadi 4-2=2 shunaqa bo'ladi

// console.log("4px" - 2); // NaN chiqaradi chunki ""ichida text ketganligi uchun va - bo'lgani uchun - strin ni qabul qilmaydi

// console.log(" -9 " + 5); // buyerda + bo'lgani uchun ma'lumot lar strin ga o'tib yontomondan qo'shilib qoldi

// console.log(" -9 " - 5); // console da -14 chiqadi chunki - bo'lgani uchun.

// console.log(null + 1); //buyerda null ishlamaydi null ma'lumot bomasa keyin ishlaydi buyerda 1 bo'lgani uchun ishlamaydi

// console.log(undefined + 1); // bunda NaN beradi

// console.log(" \t \n " - 2);// topolmadim ??

// console.log(5 > 4); //bunda true chiqadi 5 soni 4 sonidan katta

// console.log("apple" > "pineapple"); // false chiqadi sababi a charCode si  a niki 97   p niki 112 bo'lagani uchun false chiqadi

// console.log("2" > "12"); // charCode si "2" niki 50 bo'ladi  "12"  esa 49 bo'ladi 









// console.log(null || 2 || undefined); // bunda 2 chiqadi chunki || hardoim true ni qidiradi buyerda true 2 soni null va undefined false. 


// console.log( null || 2 && 3 || 4); // bunisida consolda 3 chiqadi cunki || bu belgidan oldinda kelgan true ni oladi va bu qat'iy boladi consolda 2 chiqmaganining sababi || dan keyin kelgani uchun va uni orqasida && belgi bolganini uchun ham

console.log( console.log(1) && console.log(2));// consolda 1 va undefined chiqadi nma uchunligini topolmadim ?

