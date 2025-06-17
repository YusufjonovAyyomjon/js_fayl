// console.log(true || false); //  console.log true chiqadi chunki || belgisi faqat true qiymatni qidiradi
// console.log(2 || 0); //  console.log 2 chiqadi chunki || belgisi faqat true qiymatni qidiradi
// console.log(false || 0); // console.log 0 chiqadi chunki || belgisida ikkala tomonham false bosa oxirgi qiymatni oladi
// console.log(1 || 4); // console.log 1 chiqadi chunki || belgisi faqat true qiymatni qidiradi agar ikki tomoniham true bolsa 1 chi qiymatni oladi
// console.log("salom" || ""); // console.log salom chiqadi chunki || belgisi faqat true qiymatni qidiradi


// =======================================================


// console.log("salom" && "alik"); // console.log da alik chiqadi chunki && belgisi ikkkala tomoniyam true qiymat bolsa oxirgi qiymatni oladi
// console.log(0 && 2);  // console.log da 0 chiqadi chunki && belgisi birtomoni false qiymat chiqsa false qiymatni oladi
// console.log(3 && 2);  // console.log da 2 chiqadi chunki && belgisi ikkkala tomoniyam true qiymat bolsa oxirgi qiymatni oladi
// console.log("salom" && 2); // console.log da 2 chiqadi chunki && belgisi ikkkala tomoniyam true qiymat bolsa oxirgi qiymatni oladi
// console.log("salom" && ""); // console.log da bosh strin chiqadi chunki && belgisi birtomoni false qiymat chiqsa false qiymatni oladi


// ======================================================


// console.log(!true); // console.log false chiqadi chunki ! belgisi true qiymatni false ga false qiymatni true ga aylantradi
// console.log(!false); // console.log true chiqadi chunki ! belgisi true qiymatni false ga false qiymatni true ga aylantradi
// console.log(!2);// console.log false chiqadi chunki ! belgisi true qiymatni false ga false qiymatni true ga aylantradi
// console.log(!0);// console.log true chiqadi chunki ! belgisi true qiymatni false ga false qiymatni true ga aylantradi
// console.log(!"");// console.log true chiqadi chunki ! belgisi true qiymatni false ga false qiymatni true ga aylantradi


// =====================================================

// console.log( true ?? false); // console.log true chiqadi chunki ?? belgisi faqat null va undefined ni false deb qabulqiladi
// console.log( true ?? null);// console.log true chiqadi chunki ?? belgisi faqat null va undefined ni false deb qabulqiladi ikki tomoniham false bolsa keyin false chiqadi oxirgi qiymatini oladi
// console.log( false ?? null);// console.log true chiqadi chunki ?? belgisi faqat null va undefined ni false deb qabulqiladi ikki tomoniham false bolsa keyin false chiqadi oxirgi qiymatini oladi
// console.log(undefined ?? null);// console.log false chiqadi chunki ?? belgisi faqat null va undefined ni false deb qabulqiladi ikki tomoniham false bolsa keyin false chiqadi oxirgi qiymatini oladi
// console.log("eshmat" ?? 0);// console.log eshmat chiqadi chunki ?? belgisi faqat null va undefined ni false deb qabulqiladi ikki tomoniham true bolsa birinchi qiymatini oladi


// ======================================================

// let a = 1, b = 1;
// let c = ++a;// 2 chiqadi ++ operatori ozgaruvchidan oldin kelsa qiymatini 1 taga oshiradi
// let d = b++;// 1 chiqadi ++ operatori ozgaruvchidan keyin kelsa ozidan keyingi qiymatni 1 oshiradi

// console.log(c, d);


// ======================================================


// let a = 2;
// let x = 1 + a * 2;
// console.log(x); // 5 chiqadi chunki a ni * 2 ko'paytiryapti a ni qiymati 2      2 * 2 = 4 chiqadi  4 + 1 = 5 shunaqa ishlayapti


// ======================================================


// let a = "" + 1 + 0;  // console.log da strinda 10 chiqadi
// let b = "" - 1 + 0;  //  console.log da -1 chiqadi
// let c = true + false; //  console.log da  1 chiqadi
// let d = 6 / "3"; // console.log da 2 chiqadi
// let f = "2" * "3"; //  console.log da  6 chiqadi
// let x = 4 + 5 + "px";//  console.log da strinda 45px chiqadi
// let g = "px" + 4 + 5;//  console.log da strinda px45 chiqadi
// let s = "4" - 2;//  console.log da 2 chiqadi
// let j = "4px" - 2;//  console.log da NaN chiqadi
// let v = "  -9  " + 5;//  console.log da strinda -9 5 chiqadi
// let q = "  -9  " - 5;//  console.log da -14 chiqadi
// let w = null + 1;//  console.log da  1 chiqadi
// let e = undefined + 1;// console.log da NaN chiqadi
// let r = " \t \n" + 1;//  console.log da 1 chiqadi

// console.log(a, b, c, d, f, x, g, s, j, v, q, w, e, r);


// ============================================

// console.log(5 > 4); // true
// console.log("apple" > "pineapple");// false
// console.log("2" > "12");// true
// console.log(undefined == null);// true
// console.log(undefined === null);// false
// console.log(null == "\n0\n");// false
// console.log(null === +"\n0\n");// false


// ============================================

// console.log(null || 2 || undefined); // console.log 2 chiqadi chunki || belgisi faqat true qiymatni qidiradi

// ============================================

// console.log(console.log(4) || 5 || console.log(6));// console.log 4 5 chiqadi chunki || belgisi 2 ta turibdi birinchisi 4 qiymatni oladi ikkinchisi 5 qiymatni oladi

// ============================================

// console.log(1 && null && 2); // console.log null chiqadi chunki && belgisida ikkala tomoniyam true qiymat bo'lsa keyin true qiymat chiqaradi

// ============================================

// console.log(console.log(1) && console.log(2)); // console.log 1 va undefined chiqadi chunki && belgisida ikkala tomoniyam true qiymat bo'lsa keyin birinchi kelgan  true qiymat chiqaradi va ikkinchisi undefined ga aylanib qoladi

// ============================================


// console.log(null || 2 && 3 || 4); // console.log ga  3 chiqadi