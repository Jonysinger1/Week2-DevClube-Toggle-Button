let checkBox=document.querySelector('#toggle');

let Monthlt=document.querySelectorAll('.price-Monthly');
let Yearly=document.querySelectorAll('.price-annually');

checkBox.addEventListener('change',function(){
    if(checkBox.checked){
        Yearly.forEach(price => price.style.display = "none");
        Monthlt.forEach(price =>price.style.display="flex");
    }else{
        Yearly.forEach(price =>price.style.display="flex");
        Monthlt.forEach(price =>price.style.display="none");
    }
})