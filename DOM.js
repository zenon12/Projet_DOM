var btnMoins=document.querySelectorAll('.moins') ;
var numb=document.querySelectorAll('.number') ;
var btnPlus=document.querySelectorAll('.plus');
var Total=document.querySelectorAll('.total') ;
var btn_coeur = document.getElementsByClassName('style_icone') ;
var btn_mark=document.getElementsByClassName('xmark') ;
var article=document.querySelectorAll('section') ;
var parent_article=document.querySelector('.pagnier') ;

console.log(parent_article) ;






btnMoins[0].addEventListener('click', () => {
    var  val=numb[0].innerHTML ;
    var  somme;
    var  concat ;
    if (val<=1){
        numb[0].innerHTML=0 ;
        Total[0].innerHTML=0 ;
    }
      
    else {
        val =val - 1  ; 
        somme=val*6000 ;
        concat='Total: ' + somme + ' fcfa' ;
        numb[0].innerHTML= val ;  
        Total[0].innerHTML= concat ; 
 
    }

})



btnPlus[0].addEventListener('click', () => {
    var val_1=numb[0].innerHTML ;
     console.log(val_1) ;
    var somme_1;
    var concat_1 ;
        val_1 ++ ;
        somme_1=val_1*6000 ;
        concat_1='Total: ' + somme_1 + ' fcfa' ;
        numb[0].innerHTML= val_1 ; 
        Total[0].innerHTML= concat_1 ;  
    
})
 

btn_coeur[0].addEventListener('click',() => {
       var check= btn_coeur[0].innerHTML ;
       if (check=='<i class="fa-sharp fa-solid fa-heart"></i>')
             btn_coeur[0].innerHTML='<i class="fa-regular fa-heart"></i>'
       else
           btn_coeur[0].innerHTML='<i class="fa-sharp fa-solid fa-heart"></i>' ;
})




btn_mark[0].addEventListener('click', () => {
      parent_article.removeChild(article[0]) ;
})


// ********* deuxieme article

btnMoins[1].addEventListener('click',() => {
    var  value=numb[1].innerHTML ;
    var  som;
    var  chaine ;
    if (value<=1){
        numb[1].innerHTML=0 ;
        Total[1].innerHTML=0 ;
    }
      
    else {
        value =value-1 ;
        som=value*3500 ;
        chaine='Total: ' + som + ' fcfa' ;
        numb[1].innerHTML=value ; 
        Total[1].innerHTML=chaine ;  

    }

})



btnPlus[1].addEventListener('click',() => {
    var value_2=numb[1].innerHTML ;
    var som_2;
    var chaine_2 ;
        value_2 ++ ; 
        som_2=value_2*3500 ;
        chaine_2='Total: ' + som_2 + ' fcfa' ;
        numb[1].innerHTML= value_2 ; 
        Total[1].innerHTML= chaine_2 ;
})


btn_coeur[1].addEventListener('click',() => {
       var check= btn_coeur[1].innerHTML ;
       if (check=='<i class="fa-sharp fa-solid fa-heart"></i>')
             btn_coeur[1].innerHTML='<i class="fa-regular fa-heart"></i>'
       else
           btn_coeur[1].innerHTML='<i class="fa-sharp fa-solid fa-heart"></i>' ;
})
  



btn_mark[1].addEventListener('click', () => {
      parent_article.removeChild(article[1]) ;
})


// ********* troisieme article 

//   console.log(numb[2]) ; 
btnMoins[2].addEventListener('click',() => {
    var  valeur=numb[2].innerHTML ;
    var  somm ;
    var ch ; 
    if (valeur<=1){
        numb[2].innerHTML=0 ;
        Total[2].innerHTML=0 ; 
    }
      
    else {
        valeur =valeur - 1  ;
        somm=valeur*4000 ;
        ch='Total: ' + somm + ' fcfa' ;
        numb[2].innerHTML=valeur ; 
        Total[2].innerHTML=ch ;  

    }

})



btnPlus[2].addEventListener('click',() => {
    var vale=numb[2].innerHTML ;
    var sme ;
    var ccat ;
        vale++ ;
        sme=vale*4000 ;
        ccat='Total: ' + sme + ' fcfa' ;
        numb[2].innerHTML= vale ; 
        Total[2].innerHTML= ccat ; 
    
})


btn_coeur[2].addEventListener('click',() => {
       var check= btn_coeur[2].innerHTML ;
       if (check=='<i class="fa-sharp fa-solid fa-heart"></i>')
             btn_coeur[2].innerHTML='<i class="fa-regular fa-heart"></i>'
       else
           btn_coeur[2].innerHTML='<i class="fa-sharp fa-solid fa-heart"></i>' ;
})




btn_mark[2].addEventListener('click', () => {
      parent_article.removeChild(article[2]) ;
})


 // *********

