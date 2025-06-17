
let d = 10, v = 2, q =4;
function ortachaarifmetik (a,b,c){
    let ortacha;

    
    if(a>b && a<c){
        console.log(a,"ortacha");
        max=a
    }
    else if(b>a && b<c){
        console.log(b,"ortacha");
        ortacha=b
    }
    else if(c>a && c<b){
        console.log(c,"ortacha");
        ortacha=c
    }
    
    
    
    else if(a<b && a>c){
        console.log(a,"ortacha");
        ortacha=a
    }
    else if(b<a && b>c){
        console.log(b,"ortacha");
        ortacha=b
    }
    else if(c<a && c>b){
        console.log(c,"ortacha");
        ortacha=c
    }
    
}

ortachaarifmetik(d,v,q)


